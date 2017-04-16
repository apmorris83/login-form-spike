import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './src/components/Login/Login';

export default class formSpike extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('formSpike', () => formSpike);
