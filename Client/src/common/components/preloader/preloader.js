import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './preloader.css';

export class Preloader extends Component {
  render() {
    return (
      <div className='loader-wrapper'>
        <div className='preloader'>
          <Loader
            type='ThreeDots'
            color='rgb(57, 85, 242)'
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  }
}
