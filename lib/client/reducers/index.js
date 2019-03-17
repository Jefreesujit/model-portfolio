import * as actionEvents from '../actions/index';

export function homePageReducer (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PAGEDATA) {
    newState = action.payload;
  }

  return newState;
}

export function portfolioListingReducer (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_LISTING_DATA) {
    newState.listingContent = action.payload;
  }

  return newState;
}

export function customizePortfolioReducer (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PORTFOLIO_DATA) {
    newState = action.payload;
  }

  return newState;
}

function setWeightList (constituentData) {
    let weightList = {};
    Object.keys(constituentData).map(key => {
      constituentData[key].weight = constituentData[key].list.reduce((r, a) => {
        return r + a.weight;
      }, 0);
    });

    return weightList;
}

export function constituentDataReducer (state, action) {
  let actionType = action.type, totalWeight,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PORTFOLIO_DATA || actionType === actionEvents.RESET_PORTFOLIO_DATA) {
    newState = action.payload.constituents.reduce((r, a) => {
      r[a.instrument.type] = r[a.instrument.type] || {};
      r[a.instrument.type].list = r[a.instrument.type].list || []
      r[a.instrument.type].list.push({...a});
      return r;
    }, Object.create(null));

    setWeightList(newState);

  } else if (actionType === actionEvents.UPDATE_ITEM_WEIGHT) {
    const { type, id, value } = action.payload;
    newState[type].list.find(item => item.instrument.id === id).weight = value;
  } else if (actionType === actionEvents.DELETE_CONSTITUENT_ITEM) {
    const { type, id, value } = action.payload;
    let deletedWeight;
    newState[type].list.some((item, index, list) => {
      if (item.instrument.id === id) {
        deletedWeight = item.weight;
        list.splice(index, 1);
        return true;
      }
    });
  } else if (actionType === actionEvents.REBALANCE_CONSTITUENTS) {
    Object.keys(newState).map(type => {
      var totalWeight = newState[type].list.reduce((r, a) => { return r + a.weight }, 0), weightDiff;
      if (totalWeight < newState[type].weight) {
        weightDiff = newState[type].weight - totalWeight;
        newState[type].list.forEach((item) => {
          item.weight += parseFloat(((item.weight * weightDiff)/totalWeight).toFixed(1));
        });
      } else {
        // not sure of the usecase here, going with the assumption
        weightDiff = totalWeight - newState[type].weight;
        newState[type].list.forEach((item) => {
          item.weight -= parseFloat(((item.weight * weightDiff)/totalWeight).toFixed(1));
        });
      }
    });
  }

  return newState;
}

export function appState (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.LOCATION_CHANGE) {
    newState.current.path = action.payload.pathname;
  }

  return newState;
}

export function dataRequests (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SETTING_PAGEDATA) {
    newState.settings = true;
  } else if (actionType === actionEvents.SET_PAGEDATA) {
    newState.settings = false;
  }

  return newState;
}
