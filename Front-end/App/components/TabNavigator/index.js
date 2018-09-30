import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createTabNavigator} from 'react-navigation';

import App from "../App";
import Colors from '../../themes/colors';

export default createTabNavigator(
    {
        Profile: App,
        Chat: App,
        Messages: App,
        Home: App,
        Coracao: App
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                const outline = focused ? '' : '-outline';

                let iconName;

                if (routeName === 'Home')
                    iconName = `coffee${outline}`;

                else if (routeName === 'Profile')
                    iconName = `account${outline}`;

                else if (routeName === 'Chat')
                    iconName = 'wechat';

                else if (routeName === 'Messages')
                    iconName = `message-text${outline}`;

                else if (routeName === 'Coracao')
                    iconName = `heart${outline}`;

                return <MaterialIcon name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.primary,
            inactiveTintColor: Colors.secondary,
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: 'white',
                elevation: 0.5
            },
            indicatorStyle: {
                height: 1,
                backgroundColor: Colors.primary
            }

        }
    })