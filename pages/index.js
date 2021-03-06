import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import Main from '../components'

import { initStore } from '../store';


class Index extends Component { 
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default withRedux(initStore, null)(Index);