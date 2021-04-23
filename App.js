import React from 'react';
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/Screens/HomeScreen';
import AddNoteScreen from './app/Screens/AddNoteScreen';
import {NoteProvider} from './app/Context/NoteContext';
import UpdateNoteScreen from './app/Screens/UpdateNoteScreen';

I18nManager.forceRTL(true);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add" component={AddNoteScreen} />
          <Stack.Screen name="Update" component={UpdateNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
};

export default App;
