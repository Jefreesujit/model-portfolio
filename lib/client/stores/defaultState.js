'use strict';

let state = {
  app: {
    current: {
      path: '',
      pageTitle: ''
    }
  },
  homePage: {
    message: "Template Message"
  },
  portfolioListing: {
    listingContent: []
  },
  customizePortfolio: {
    modalPortfolio: {},
    constituentData: {}
  }
};

export default state;
