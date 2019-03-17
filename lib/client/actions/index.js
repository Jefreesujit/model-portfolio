/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

import axios from 'axios';
import listingMockData from '../../mockdata/listing';
import portfolioModalData from '../../mockdata/customize';

export const FETCHING_PAGEDATA = 'FETCHING_PAGEDATA';
export const SET_PAGEDATA = 'SET_PAGEDATA';
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export const SET_LISTING_DATA = 'SET_LISTING_DATA';
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

export function setListingData (data) {
  return {
    type: SET_LISTING_DATA,
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
    dispatch(setListingData(listingMockData));
  };
}

export function fetchPortfolioData () {
  return function (dispatch) {
    dispatch(setPortfolioData(portfolioModalData));
  };
}
