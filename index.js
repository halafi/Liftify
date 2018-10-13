// @flow strict
import firebase from 'react-native-firebase';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';


firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  });

AppRegistry.registerComponent(appName, () => App);
