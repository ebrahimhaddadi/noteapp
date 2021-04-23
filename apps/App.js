import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import { NoteProvider } from './Context/NoteContext';
 const Stack=createStackNavigator();
const App = () => {
    return (
        <NoteProvider>
       <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={HomeScreen}/> 
              <Stack.Screen name="Add" component={AddNoteScreen}/>
          </Stack.Navigator>
      </NavigationContainer> 
        </NoteProvider>
      
    )
}

export default App;
