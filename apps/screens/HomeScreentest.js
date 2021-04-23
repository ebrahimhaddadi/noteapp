import React, {useCallback, useState, useContext,useEffect} from 'react';
import {Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {Button, Form, Input, Item} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import Layout from "../components/Layout";
import NoteContent from "../components/NoteContent"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Details from './Details';
import Todo from './Todo';
import { NavigationContainer } from '@react-navigation/native';
import { registerUser } from '../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = props => {
  
  const [notes, setNotes] = useState([{},{}]);
  const [fullname,setfullname]=useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("")
  useEffect(()=>{
   
    myUser();
  
   
  },[])
  const myUser=async()=>{
    
   
    
        }
    
  const  MyTabs=({navigation})=> {
    return (
      <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Todo" component={Todo} />
      </Tab.Navigator>
  
    );
  }
  const saveUser= async(fullname,email)=>{
try {
const name=  await AsyncStorage.setItem(fullname)
 const mail= await AsyncStorage.setItem(email)
 console.log(name,mail)
 return(name,mail)
} catch (error) {
  console.log(error)
}
  }
 const sendData=async()=>{ 
  try {
    const user={fullname,email,password,passwordConfirmation}
     const status= await registerUser(user)
     saveUser(fullname,email)
     if(status===201){
       Alert.alert("ثبت نام با موفقیت انجام شد ")
     }else{
       Alert.alert("خطایی رخ داده است")
     }
  } catch (error) {
    console.log(error)
  }

 }
  // console.log(MyTabs)
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
        keyExtractor={note => note.id}
        renderItem={note => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Update', {id: note.item.id})
            }>
            <NoteContent
              note={{item: {title: 'اولین یاداشت', content: 'اولین متن'}}}
            />
          </TouchableOpacity>
        )}
      />
      <Form>
        <Item>
          <Input placeholder="fullname" onChangeText={(text)=>{setfullname(text)}}/>
        </Item>
        <Item>
          <Input placeholder="email" onChangeText={(text)=>{setemail(text)}}/>
        </Item>
        <Item>
          <Input placeholder="password" onChangeText={(text)=>{setpassword(text)}}/>
        </Item>
        <Item>
          <Input placeholder="configPassword" onChangeText={(text)=>{setpasswordConfirmation(text)}}/>
        </Item>
      </Form>
      <Button full onPress={sendData} >
        <Text>test api</Text>
      </Button>
    </Layout>
  );
};

export default HomeScreen;
