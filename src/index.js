import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'
import {Provider} from 'react-redux';
import store from './store/Store'
var firebaseConfig = {
  apiKey: "AIzaSyAN4NWO4aDLTtYlk5ju-t7oT45H60u97k0",
  authDomain: "messenger-87813.firebaseapp.com",
  databaseURL: "https://messenger-87813.firebaseio.com",
  projectId: "messenger-87813",
  storageBucket: "messenger-87813.appspot.com",
  messagingSenderId: "271668517691",
  appId: "1:271668517691:web:6cf951080b1e7ad7a7351e",
  measurementId: "G-20G400564X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const auth=firebase.auth()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
