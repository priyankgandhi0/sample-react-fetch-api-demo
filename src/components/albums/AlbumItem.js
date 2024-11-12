import React, { Component, Fragment } from 'react';

import './AlbumItem.css';

class AlbumItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="album-item-wrapper">
          <h3>{this.props.data.title}</h3>
        </div>
      </Fragment>
    );
  }
}

export default AlbumItem;