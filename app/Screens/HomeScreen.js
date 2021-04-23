import React, {useCallback, useState, useContext} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import Layout from '../Components/Layout';
import NoteContent from '../Components/NoteContent';
import {NoteContext} from '../Context/NoteContext';

const HomeScreen = props => {
  const [notes, setNotes] = useState([]);
  const context = useContext(NoteContext);

  useFocusEffect(
    useCallback(() => {
      setNotes(context.getNotes);
    }, [context.getNotes]),
  );

  return (
    <Layout
      title="یاداشتهای من"
      footer={
        <Button full onPress={() => props.navigation.navigate('Add')}>
          <Text style={{fontFamily: 'Vazir'}}>اضافه کردن یاداشت جدید</Text>
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
            <NoteContent note={{...note}} />
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
};

export default HomeScreen;
