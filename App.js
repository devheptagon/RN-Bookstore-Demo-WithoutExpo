import React from 'react';
import { Provider } from 'react-redux'
import { Platform, StatusBar, StyleSheet } from 'react-native'
import { FormattedProvider } from 'react-native-globalize'
import AppNavigator from './src/navigation/AppNavigator'
import HeaderBar from './src/screens/layout/HeaderBar'
import rootReducer from './src/redux/rootReducer'
import createStore from './src/redux/store'
import FlexView from './src/screens/components/FlexView'
import Theme from './src/constants/Theme'
import Config from './src/config/appConfig'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FormattedProvider locale={Config.locale} currency={Config.currency}>
          <FlexView style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <HeaderBar />
            <AppNavigator />
          </FlexView>
        </FormattedProvider>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.App.BackgroundColor
  },
})