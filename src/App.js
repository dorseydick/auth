import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyArtdFuMc3_EgRUjKvyLTnCHINDp527OTs',
      authDomain: 'auth-f7e6c.firebaseapp.com',
      databaseURL: 'https://auth-f7e6c.firebaseio.com',
      projectId: 'auth-f7e6c',
      storageBucket: 'auth-f7e6c.appspot.com',
      messagingSenderId: '483071465701'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
