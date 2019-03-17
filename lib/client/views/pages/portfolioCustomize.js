'use strict';

import React from 'react';
import Page from './index';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class PortFolioCustomize extends React.Component {
  constructor () {
    super();

    this.state = {
      constituentData: {}
    };
  }

  componentDidMount () {
    this.props.dispatch(actions.fetchPortfolioData());
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.modalPortfolio.length) {
      let modalData = nextProps.modalPortfolio[0],
          constituentData = modalData.constituents.reduce((r, a) => {
            r[a.instrument.type] = r[a.instrument.type] || [];
            r[a.instrument.type].push(a);
            return r;
        }, Object.create(null));

      return {
        ...modalData,
        constituentData 
      };
    } else {
      return null;
    }
  }

  renderGridSubContent (content) {
    return (
      <div class="instrument-row">
        <div className="content-value category"><a href="">{content.instrument.name}</a></div>
        <div className="content-value link">&nbsp;</div>
        <div className="content-value weight">{content.weight}%</div>
        <div className="content-value weight">
          <span className="inc">+</span>
          <input type="number" className="weight-input" defaultValue={content.weight}></input>
          <span class="dec">-</span>
        </div>
      </div>
    );
  }

  renderGridContent () {
    const { constituentData } = this.state;
    let gridContent = [],
        weight;

    for (let key in constituentData) {
      weight = constituentData[key].reduce((r, a) => {
        return r + a.weight;
      }, 0);
      gridContent.push(
        <div className="constituent-group">
          <div className="group-bar">
            <div className="column-value category">{key}</div>
            <div className="column-value link"><a href=""> +Add {key}</a></div>
            <div className="column-value weight">{weight}%</div>
            <div className="column-value weight">{weight}%</div>
          </div>
          <div className="group-accord">
            {constituentData[key].map(this.renderGridSubContent)}
          </div>
        </div>
      )
    }

    return gridContent;
  }

  render () {
    return (
    <div className="portfolio-customize-section">
        <Page>
          <div className="customize-content">
            <div className="top-section">
              <h2 className="header">Portfolio Constituents</h2>
              <div className="action-section">
                <button onClick={this.resetHandler} className="btn btn-primary reset-btn">Reset</button>
                <button onClick={this.rebalanceHandler} className="btn btn-primary rebalance-btn">Rebalance</button>
                <button onClick={this.saveHandler} className="btn btn-primary save-btn">Save and Continue</button>
              </div>
            </div>
            <div className="portfolio-grid-section">
              <div className="grid-title">
                <div className="column-title category">Category/Stock</div>
                <div className="column-title link">&nbsp;</div>
                <div className="column-title weight">Model Weight(%)</div>
                <div className="column-title weight">Weight(100 %)</div>
              </div>
              <div className="grid-content">
                {this.renderGridContent()}
              </div>
            </div>
          </div>
        </Page>
    </div>
    );
  }
}

PortFolioCustomize.displayName = 'PortFolioCustomize';

function select(state) {
  return {
    modalPortfolio: state.customizePortfolio.modalPortfolio
  };
}

export default connect(select)(PortFolioCustomize);
