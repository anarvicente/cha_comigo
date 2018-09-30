/** @format */

import {AppRegistry} from 'react-native';
import App from './components/App';
import {name as appName} from './app.json';
import TabNavigator from './components/TabNavigator'

AppRegistry.registerComponent(appName, () => TabNavigator);
