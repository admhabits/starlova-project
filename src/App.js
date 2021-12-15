import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
// import {Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './reducers/store';

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadAssetsAsync = async () => {
        await Font.loadAsync({
         "PublicSans-Bold": require('./assets/fonts/PublicSans-Bold.ttf'),
         "PublicSans-Regular": require('./assets/fonts/PublicSans-Regular.ttf'),
         "PublicSans-SemiBold": require('./assets/fonts/PublicSans-SemiBold.ttf'),
         "PublicSans-Light": require('./assets/fonts/PublicSans-Light.ttf'),
        })
        setFontLoaded(true)
  }

  useEffect(() => {
    loadAssetsAsync()
    // Alert.alert("Font Loaded");
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
