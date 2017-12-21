import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArtdFuMc3_EgRUjKvyLTnCHINDp527OTs',
      authDomain: 'auth-f7e6c.firebaseapp.com',
      databaseURL: 'https://auth-f7e6c.firebaseio.com',
      projectId: 'auth-f7e6c',
      storageBucket: 'auth-f7e6c.appspot.com',
      messagingSenderId: '483071465701'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
          return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
