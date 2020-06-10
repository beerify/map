import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Fragment } from 'react'

import { Platform } from 'react-native'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'

const web = Platform.OS === 'web' ? require('../components/WebMap').default : <Fragment></Fragment>

const Map = Platform.select({
  web: () => web,
  default: () => require('../components/MobileMap').default,
})()

const BottomTab = createBottomTabNavigator()

const INITIAL_ROUTE_NAME = 'map'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='map'
        component={Map}
        options={{
          title: 'map',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-map' />,
        }}
      />
      <BottomTab.Screen
        name='info'
        component={HomeScreen}
        options={{
          title: 'info',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-code-working' />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'info':
      return 'About this app'
    case 'map':
      return 'Beer Map'
    default:
      return null
  }
}
