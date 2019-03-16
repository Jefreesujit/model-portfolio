'use strict';

import React from 'react';

class PortFolioCustomize extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
    <div className="portfolio-customize-section">
        <h2> Portfolio customize {this.props.match.params.id} </h2>
    </div>
    );
  }
}

PortFolioCustomize.displayName = 'PortFolioCustomize';

export default PortFolioCustomize;
