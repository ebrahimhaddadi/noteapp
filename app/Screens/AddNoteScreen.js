import React, {useState, useContext} from 'react';
import uuid from 'react-native-uuid';
import {StyleSheet} from 'react-native';
import {Button, Textarea, Form, Item, Input, Label, Text} from 'native-base';
import Layout from '../Components/Layout';
import {NoteContext} from '../Context/NoteContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AddNoteScreen = props => {
  const [getTitle, setTitle] = useState('');
  const [getContent, setContent] = useState('');
  const context = useContext(NoteContext);

  const saveNote = () => {
    const note = {
      _id: uuid(),
      title: getTitle,
      content: getContent,
    };

    // console.log(note);

    context.addNote(note);
    props.navigation.navigate('Home');
  };

  return (
    <Layout
      title="ساخت یاداشت"
      footer={
        <>
          <Button full onPress={saveNote}>
            <Text>ذخیره یاداشت</Text>
          </Button>
          <Button full onPress={() => props.navigation.navigate('Home')}>
            <Text>انصراف</Text>
          </Button>
        </>
      }>
      <Form style={styles.container}>
        <Item>
          <Label>عنوان :</Label>
          <Input value={getTitle} onChangeText={title => setTitle(title)} />
        </Item>
        <Textarea
          style={styles.container}
          value={getContent}
          onChangeText={content => setContent(content)}
          bordered
          placeholder="متن اصلی اینجا قرار میگیرد"
        />
      </Form>
    </Layout>
  );
};

export default AddNoteScreen;
