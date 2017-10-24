import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';

export default class App extends Component<{}> {
    componentWillMount(){
        const config = {
          apiKey: "AIzaSyBrx420xJAuQM1KPmYJnAxrMIaDfcQa1vI",
          authDomain: "eatfast-f5acf.firebaseapp.com",
          databaseURL: "https://eatfast-f5acf.firebaseio.com",
          projectId: "eatfast-f5acf",
          storageBucket: "eatfast-f5acf.appspot.com",
          messagingSenderId: "354773888658"
        };
        firebase.initializeApp(config);
    }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <Router />
        </Provider>
    );
  }
}
