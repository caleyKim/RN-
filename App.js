// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen/Index'
import CounterScreen from './src/Counter/Index'

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App =()=>{
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerRight: () => (
              <Button 
                onPress={() => alert('This is button')}
                title="Info"
              />
            )
            
          }}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <View>
        <Text>ddd</Text>
      </View>
    </>
  );
}

export default App;