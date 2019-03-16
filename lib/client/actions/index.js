/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

import axios from 'axios';

export const FETCHING_PAGEDATA = 'FETCHING_PAGEDATA';
export const SET_PAGEDATA = 'SET_PAGEDATA';
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export const SET_PORTFOLIO_DATA = 'SET_PORTFOLIO_DATA';

export function fetchingPageData () {
  return {
    type: FETCHING_PAGEDATA
  };
}

export function setPageData (data) {
  return {
    type: SET_PAGEDATA,
    payload: data
  };
}

export function setPortfolioData (data) {
  return {
    type: SET_PORTFOLIO_DATA,
    payload: data
  };
}

export function fetchPageData () {
  return function (dispatch) {
    dispatch(fetchingPageData());
    return axios.get('/api/get-page-details')
       .then(function (response) {
         dispatch(setPageData(response.data));
       });
  };
}

export function fetchListingContent () {
  return function (dispatch) {
    let listContent = [];

    for (let i = 1; i <= 14; i++) {
      listContent.push({
        id: i,
        title: 'Hong Kong Technology',
        imageUrl: '/build/images/HKSPnightview2panorama.jpg',
        volatality: '26.84',
        monthReturn: '2.96',
        meanReturn: '37.29',
        minInvestment: '170000',
        currency: 'HKD',
        eligibility: 'available'
      });
    }

    dispatch(setPortfolioData(listContent));
  };
}
