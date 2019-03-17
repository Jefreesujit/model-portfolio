'use strict';

import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class ConstituentItem extends React.Component {
  constructor () {
  super();

  this.onChangeHandler = (event) => this.itemChangeHandler(parseInt(event.target.value));
  this.increaseHandler = () => this.itemChangeHandler(this.props.weight + 1);
  this.decreaseHandler = () => this.itemChangeHandler(this.props.weight - 1);
  this.deleteHandler = () => this._deleteHandler();
  }

  itemChangeHandler (value) {
    if (value > 0) {
      const {type, id} = this.props.instrument;
      this.props.dispatch(actions.updateItemWeight({type, id, value}));
    }
  }

  _deleteHandler () {
    if (this.props.allowDelete) {
      const {type, id} = this.props.instrument;
      this.props.dispatch(actions.deleteConstituentItem({type, id}));
    }
  }

  getValue() {
    return this.state.inputValue;
  }

  render () {
  return (
    <div className="instrument-row">
      <span className="icon glyphicon glyphicon-trash" onClick={this.deleteHandler} >D</span>
      <div className="content-value category"><a href="">{this.props.instrument.name}</a></div>
      <div className="content-value link">&nbsp;</div>
      <div className="content-value weight">{this.props.weight}%</div>
      <div className="content-value weight">
      <span onClick={this.decreaseHandler} class="icon dec">-</span>
      <input type="number" className="weight-input" onChange={this.onChangeHandler} value={this.props.weight}></input>
      <span onClick={this.increaseHandler} className="icon inc">+</span>
      </div>
    </div>
    );
  }
}

ConstituentItem.displayName = 'ConstituentItem';

export default connect()(ConstituentItem);
