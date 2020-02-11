/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { Navigation } from 'react-native-navigation';

AppRegistry.registerComponent(appName, () => App);

// Navigation.registerComponent('darr.App', () => App);

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'darr.App', // unique ID registered with Navigation.registerScreen
//     title: 'Welcome', // title of the screen as appears in the nav bar (optional)
//     navigatorStyle: {
//       navBarHidden: false,
//     }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
//     navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
//   }
// });




//AppRegistry.registerComponent(appName, () => App);
