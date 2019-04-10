import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'


export const wrapWithMockReduxAndNavigator = (Component) => {
  const initialState = { appReducer: {}}
  const mockStore = configureStore()

  const AppNavigator = createStackNavigator({
    Component
  })
  const ComponentWithNavigation = createAppContainer(AppNavigator)
  return <Provider store={mockStore(initialState)}>
      <ComponentWithNavigation />
    </Provider>   
}