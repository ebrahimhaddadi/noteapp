import React, {useCallback, useState, useContext,useEffect} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import Layout from "../components/Layout";
import NoteContent from "../components/NoteContent"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Details from './Details';
import Todo from './Todo';
import { NavigationContainer } from '@react-navigation/native';
import { NoteContext } from '../Context/NoteContext';


const HomeScreen = props => {
  const [notes, setNotes] = useState([]);
const context=useContext(NoteContext)


useFocusEffect(
  useCallback(()=>{
    setNotes(context.getNotes)
  },[context.getNotes])
)

  return (
    <Layout
      title="یاداشتهای من"
      footer={
        <Button full onPress={() => props.navigation.navigate('Add')}>
          <Text>اضافه کردن یاداشت جدید</Text>
        </Button>
      }>
      
      <FlatList
        data={notes}
        keyExtractor={note => note._id}
        renderItem={note => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Update', {id: note.item._id})
            }>
            <NoteContent
              note={{...note}}
            />
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
};

export default HomeScreen;
