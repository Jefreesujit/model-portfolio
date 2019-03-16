'use strict';

import React from 'react';

class PortFolioItem extends React.Component {
  constructor () {
    super();

    this.eligibilityMapping = {
      available: 'Available for all investors',
      restricted: 'Restricted to Accredited investors '
    }

    this.clickHandler = () => this.itemClickHandler();
  }

  itemClickHandler () {
    this.props.itemClickHandler(this.props.id);
  }

  render () {
    return (
    <div className="portfolio-item">
      <div className="item-head">
        <img src={this.props.imageUrl} className="folio-item-image">
        </img>
        <div className="folio-item-title"><span>{this.props.title}</span></div>
      </div>
      <div className="item-body">
        <div className="item-record">
          <div className="record-label">Volatality</div>
          <div className="record-value">{this.props.volatality}%</div>
        </div>
        <div className="item-record">
          <div className="record-label">1 Month Return</div>
          <div className="record-value">{this.props.monthReturn}%</div>
        </div>
        <div className="item-record">
          <div className="record-label">Mean Return</div>
          <div className="record-value">{this.props.meanReturn}%</div>
        </div>
        <div className="item-record">
          <div className="record-label">Minimum Investment</div>
          <div className="record-value"><span className="currency">{this.props.currency}</span>{this.props.minInvestment}</div>
        </div>
        <div className="item-record">
          <div className="record-label">Eligibility</div>
          <div className="record-value">{this.eligibilityMapping[this.props.eligibility]}</div>
        </div>
      </div>
      <div className="item-action" onClick={this.clickHandler}>Explore Investment Idea</div>
    </div>
    );
  }
}

PortFolioItem.displayName = 'PortFolioItem';

export default PortFolioItem;
