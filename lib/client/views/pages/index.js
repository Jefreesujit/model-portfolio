'use strict';

import React from 'react';

class Page extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div class="page-wrapper">
        <header className="page-header">
          <div className="logo-section">
            <img className="logo-img" src="/build/images/logo.svg"></img>
          </div>
          <div className="action-section">
            <span>Log In</span>
          </div>
        </header>
        <main id="body">
          <div id="container" className="page-container">
            {this.props.children}
          </div>
        </main>
        <footer>
          <div className="footer">
            Copyright &copy; <a href="" >CGS-CIMB Securities</a>. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
}

Page.displayName = 'Page';

export default Page;
