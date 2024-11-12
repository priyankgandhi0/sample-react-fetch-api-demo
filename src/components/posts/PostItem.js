import React, { Component, Fragment } from 'react';

import './PostItem.css'

class PostItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="post-item-wrapper">
          <h1>{this.props.data.title}</h1>
          <p>{this.props.data.body}</p>
        </div>
      </Fragment>
    );
  }
}

export default PostItem;