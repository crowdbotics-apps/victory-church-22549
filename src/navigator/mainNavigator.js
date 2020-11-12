import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList171824Navigator from '../features/ArticleList171824/navigator';
import ArticleList171823Navigator from '../features/ArticleList171823/navigator';
import ArticleList171822Navigator from '../features/ArticleList171822/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList171824: { screen: ArticleList171824Navigator },
ArticleList171823: { screen: ArticleList171823Navigator },
ArticleList171822: { screen: ArticleList171822Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
