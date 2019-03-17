'use strict';

import React from 'react';
import Page from './index';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import ConstituentItem from '../components/constituentItem';

class PortFolioCustomize extends React.Component {
  constructor () {
    super();

    this.state = {
      constituentData: {}
    };

    this.refsList = {};

    this.resetHandler = () => this._resetHandler();
    this.rebalanceHandler = () => this._rebalanceHandler();
  }

  componentDidMount () {
    this.props.dispatch(actions.fetchPortfolioData());
  }

  _resetHandler () {
    this.props.dispatch(actions.resetPortfolioData());
  }

  _rebalanceHandler () {
    this.props.dispatch(actions.rebalanceConstituents());
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      modalData: nextProps.modalPortfolio,
      constituentData: nextProps.constituentData
    };
  }

  renderGridContent () {
    const { constituentData } = this.state;
    let gridContent = [],
        weight;

    for (let key in constituentData) {
      weight = constituentData[key].weight;

      gridContent.push(
        <div className="constituent-group">
          <div className="group-bar">
            <div className="column-value category">{key}</div>
            <div className="column-value link"><a href=""> +Add {key}</a></div>
            <div className="column-value weight">{weight.toFixed(1)}%</div>
            <div className="column-value weight">{weight.toFixed(1)}%</div>
          </div>
          <div className="group-accord">
            {constituentData[key].list.map(content => 
              <ConstituentItem key={content.instrument.id} type={key} {...content} 
                               allowDelete={constituentData[key].list.length > 1}/>
            )}
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
    modalPortfolio: state.customizePortfolio.modalPortfolio,
    constituentData: state.customizePortfolio.constituentData
  };
}

export default connect(select)(PortFolioCustomize);
