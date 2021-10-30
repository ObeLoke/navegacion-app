import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hola mundo</Text>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;
