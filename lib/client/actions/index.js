/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

import axios from 'axios';
import listingMockData from '../../mockdata/listing';
import portfolioModalData from '../../mockdata/customize';

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export const SET_LISTING_DATA = 'SET_LISTING_DATA';
export const SET_PORTFOLIO_DATA = 'SET_PORTFOLIO_DATA';
export const UPDATE_ITEM_WEIGHT = 'UPDATE_ITEM_WEIGHT';
export const RESET_PORTFOLIO_DATA = 'RESET_PORTFOLIO_DATA';
export const REBALANCE_CONSTITUENTS = 'REBALANCE_CONSTITUENTS';
export const DELETE_CONSTITUENT_ITEM = 'DELETE_CONSTITUENT_ITEM';


export function fetchListingContent () {
  return function (dispatch) {
    dispatch({
      type: SET_LISTING_DATA,
      payload: listingMockData
    });
  };
}

export function fetchPortfolioData () {
  return function (dispatch) {
    dispatch({
      type: SET_PORTFOLIO_DATA,
      payload: portfolioModalData[0]
    });
  };
}

export function resetPortfolioData () {
  return function (dispatch, getState) {
    let { customizePortfolio } = getState();
    dispatch({
      type: RESET_PORTFOLIO_DATA,
      payload: customizePortfolio.modalPortfolio
    });
  };
}

export function updateItemWeight (data) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ITEM_WEIGHT,
      payload: data
    });
  };
}

export function deleteConstituentItem (data) {
  return function (dispatch) {
    dispatch({
      type: DELETE_CONSTITUENT_ITEM,
      payload: data
    });
  };
}

export function rebalanceConstituents (data) {
  return function (dispatch) {
    dispatch({
      type: REBALANCE_CONSTITUENTS,
      payload: data
    });
  };
}
