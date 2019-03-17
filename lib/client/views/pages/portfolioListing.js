'use strict';

import React from 'react';
import Page from './index';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import PortfolioItem from '../components/portfolioItem';

class PortFolioListing extends React.Component {
  constructor () {
    super();

    this.itemClickHandler = (id) => this._itemClickHandler(id);
  }

  _itemClickHandler(id) {
    this.props.history.push(`/customize/${id}`);
  }

  getListingContent() {
    return this.props.listingContent.map((folioData) => {
      return <PortfolioItem key={folioData.id} {...folioData} itemClickHandler={this.itemClickHandler}/>;
    });
  }

  componentDidMount () {
    this.props.dispatch(actions.fetchListingContent());
  }

  render () {
    return (
    <div className="portfolio-listing-section">
      <Page>
        <div className="portfolio-main-section">
          <div className="description">
            Here are a few recommendations to choose from
            <div className="message">
              Use the filters to further zone in one a portfolio depending on your preferences
            </div>
          </div>
          <div className="filter-section">
            <div className="filter-field">
              <label>Risk Level</label>
              <select>
                <option>All</option>
              </select>
            </div>
            <div className="filter-field">
              <label>Region</label>
              <select>
                <option>All</option>
              </select>
            </div>
          </div>
          <div className="listing-section">
            <div className="listing-title">
              <div className="title-tab active">
                {this.props.listingContent.length} Portfolio recommendations based on your preferences
              </div>
              <div className="title-tab">
              </div>
            </div>
            <div className="portfolio-preference-list">
              {this.getListingContent()}
            </div>
          </div>
          <div class="nav-section">
            <button class="nav-back-btn">Back</button>
          </div>
        </div>
      </Page>
    </div>
    );
  }
}

PortFolioListing.displayName = 'PortFolioListing';

function select(state) {
  return {
    listingContent: state.portfolioListing.listingContent
  };
}

export default connect(select)(PortFolioListing);
