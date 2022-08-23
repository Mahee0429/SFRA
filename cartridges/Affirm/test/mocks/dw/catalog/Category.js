/**
 * Represents dw.catalog.Category
 */

var Category = function (catID) {
    this.ID = catID;
};

var custom = {
    AffirmFPName: 'DefaultFinProgram',
    AffirmFPMode: 'AffirmFPMode',
    AffirmFPPriority: 0,
    AffirmFPStartDate: new Date(new Date().getTime() - (1000 * 60 * 60 * 100)),
    AffirmFPEndDate: new Date(new Date().getTime() + (1000 * 60 * 60 * 100))
};

Category.prototype.allRecommendations = null; // Collection
Category.prototype.categoryAssignments = null; // Collection
Category.prototype.defaultSortingRule = null; // SortingRule
Category.prototype.description = null; // String
Category.prototype.displayName = this.ID; // String
Category.prototype.ID = null; // String
Category.prototype.image = null; // MediaFile
Category.prototype.incomingCategoryLinks = null; // Collection
Category.prototype.online = null; // boolean
Category.prototype.onlineCategoryAssignments = null; // Collection
Category.prototype.onlineFlag = null; // boolean
Category.prototype.onlineFrom = null; // Date
Category.prototype.onlineIncomingCategoryLinks = null; // Collection
Category.prototype.onlineOutgoingCategoryLinks = null; // Collection
Category.prototype.onlineProducts = null; // Collection
Category.prototype.onlineSubCategories = null; // Collection
Category.prototype.onlineTo = null; // Date
Category.prototype.orderableRecommendations = null; // Collection
Category.prototype.outgoingCategoryLinks = null; // Collection
Category.prototype.pageDescription = null; // String
Category.prototype.pageKeywords = null; // String
Category.prototype.pageTitle = null; // String
Category.prototype.pageURL = null; // String
Category.prototype.parent = null; // Category
Category.prototype.productAttributeModel = null; // ProductAttributeModel
Category.prototype.products = null; // Collection
Category.prototype.recommendations = null; // Collection
Category.prototype.root = null; // boolean
Category.prototype.siteMapChangeFrequency = null; // String
Category.prototype.siteMapIncluded = null; // Number
Category.prototype.siteMapPriority = null; // Number
Category.prototype.subCategories = null; // Collection
Category.prototype.template = null; // String
Category.prototype.thumbnail = null; // MediaFile
Category.prototype.topLevel = null; // boolean
Category.prototype.custom = custom; // CustomPreferences

Category.prototype.getCustom = function () { return this.custom; }; // CustomPreferences
Category.prototype.getAllRecommendations = function () {}; // Collection
Category.prototype.getAllRecommendations = function (type) {}; // Collection
Category.prototype.getCategoryAssignments = function () {}; // Collection
Category.prototype.getDefaultSortingRule = function () {}; // SortingRule
Category.prototype.getDescription = function () {}; // String
Category.prototype.getDisplayMode = function () {}; // Number
Category.prototype.getDisplayName = function () {}; // String
Category.prototype.getID = function () {}; // String
Category.prototype.getImage = function () {}; // MediaFile
Category.prototype.getIncomingCategoryLinks = function () {}; // Collection
Category.prototype.getIncomingCategoryLinks = function (type) {}; // Collection
Category.prototype.getOnlineCategoryAssignments = function () {}; // Collection
Category.prototype.getOnlineFlag = function () {}; // boolean
Category.prototype.getOnlineFrom = function () {}; // Date
Category.prototype.getOnlineIncomingCategoryLinks = function () {}; // Collection
Category.prototype.getOnlineOutgoingCategoryLinks = function () {}; // Collection
Category.prototype.getOnlineProducts = function () {}; // Collection
Category.prototype.getOnlineSubCategories = function () {}; // Collection
Category.prototype.getOnlineTo = function () {}; // Date
Category.prototype.getOrderableRecommendations = function () {}; // Collection
Category.prototype.getOrderableRecommendations = function (type) {}; // Collection
Category.prototype.getOutgoingCategoryLinks = function () {}; // Collection
Category.prototype.getOutgoingCategoryLinks = function (type) {}; // Collection
Category.prototype.getPageDescription = function () {}; // String
Category.prototype.getPageKeywords = function () {}; // String
Category.prototype.getPageTitle = function () {}; // String
Category.prototype.getPageURL = function () {}; // String
Category.prototype.getParent = function () {}; // Category
Category.prototype.getProductAttributeModel = function () {}; // ProductAttributeModel
Category.prototype.getProducts = function () {}; // Collection
Category.prototype.getRecommendations = function () {}; // Collection
Category.prototype.getRecommendations = function (type) {}; // Collection
Category.prototype.getSearchPlacement = function () {}; // Number
Category.prototype.getSearchRank = function () {}; // Number
Category.prototype.getSiteMapChangeFrequency = function () {}; // String
Category.prototype.getSiteMapIncluded = function () {}; // Number
Category.prototype.getSiteMapPriority = function () {}; // Number
Category.prototype.getSubCategories = function () {}; // Collection
Category.prototype.getTemplate = function () {}; // String
Category.prototype.getThumbnail = function () {}; // MediaFile
Category.prototype.hasOnlineProducts = function () {}; // boolean
Category.prototype.hasOnlineSubCategories = function () {}; // boolean
Category.prototype.isDirectSubCategoryOf = function (parent) {}; // boolean
Category.prototype.isOnline = function () {}; // boolean
Category.prototype.isRoot = function () {}; // boolean
Category.prototype.isSubCategoryOf = function (ancestor) {}; // boolean
Category.prototype.isTopLevel = function () {}; // boolean
Category.prototype.setDisplayMode = function (displayMode) {}; // void
Category.prototype.setSearchPlacement = function (placement) {}; // void
Category.prototype.setSearchRank = function (rank) {}; // void

module.exports = Category;
