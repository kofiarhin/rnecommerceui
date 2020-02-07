import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promiseMiddleware from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

export default class App extends Component {

  render() {

    return <Provider store={createStoreWithMiddleware(reducers)}>
      <Routes />
    </Provider>

  }
}
