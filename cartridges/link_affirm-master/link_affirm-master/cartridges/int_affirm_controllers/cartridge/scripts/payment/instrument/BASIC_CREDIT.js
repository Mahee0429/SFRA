'use strict';

var Resource = require('dw/web/Resource');
var app = require('*/cartridge/scripts/app');
var parametersMap = request.httpParameterMap;
var Transaction = require('dw/system/Transaction');
var PaymentMgr = require('dw/order/PaymentMgr');
var PaymentInstrument = require('dw/order/PaymentInstrument');

/**
 * Method add of this hook implements replacement for default affirm payment method
 * @param {dw.order.Basket} basket basket to be updated
 * @returns {dw.order.OrderPaymentInstrument} added payment instrument
 */
exports.add = function (basket) {
    var billingAddress = basket.getBillingAddress();
    if (billingAddress) {
        Transaction.wrap(function () {
            billingAddress.setCity(parametersMap['billing_address[city]'].stringValue);
            billingAddress.setAddress1(parametersMap['billing_address[street1]'].stringValue);
            billingAddress.setAddress2(parametersMap['billing_address[street2]'].stringValue);
            billingAddress.setStateCode(parametersMap['billing_address[region1_code]'].stringValue);
            billingAddress.setPostalCode(parametersMap['billing_address[postal_code]'].stringValue);
        });
    }
    var cart = app.getModel('Cart').get(basket);

    var cardNumber = parametersMap.number.stringValue;
    var cardHolder = parametersMap.cardholder_name.stringValue;
    var cardSecurityCode = parametersMap.cvv.stringValue;
    var cardType = 'Visa';
    var expirationMonth = parametersMap.expiration.stringValue.substr(0, 2);
    var expirationYear = '20' + parametersMap.expiration.stringValue.substr(2, 2);
    var paymentCard = PaymentMgr.getPaymentCard(cardType);

    var creditCardStatus = paymentCard.verify(expirationMonth, expirationYear, cardNumber, cardSecurityCode);

    if (creditCardStatus.error) {
        return null;
    }
    var paymentInstrument;
    Transaction.wrap(function () {
        cart.removeExistingPaymentInstruments(PaymentInstrument.METHOD_CREDIT_CARD);
        paymentInstrument = cart.createPaymentInstrument(PaymentInstrument.METHOD_CREDIT_CARD, cart.getNonGiftCertificateAmount());

        paymentInstrument.creditCardHolder = cardHolder;
        paymentInstrument.creditCardNumber = cardNumber;
        paymentInstrument.creditCardType = cardType;
        paymentInstrument.creditCardExpirationMonth = expirationMonth;
        paymentInstrument.creditCardExpirationYear = expirationYear;
    });

    return paymentInstrument;
};
