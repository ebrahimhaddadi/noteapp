
import { Button,Form, Input, Item, Textarea,Text, Label } from 'native-base'
import { StyleSheet, } from 'react-native'
import uuid from 'react-native-uuid';
// import uuid from 'uuid';
import Layout from '../components/Layout'
import  React , { useEffect,useState,useContext} from 'react';
import { NoteContext } from '../Context/NoteContext';

const AddNoteScreen = (props) => {
    
    const [getTitle, setTitle] = useState("");
    const [getContent, setContent] = useState("");
const context=useContext(NoteContext)
    const saveNote=()=>{
        const note={
            _id:uuid(),
            title:getTitle,
            content:getContent,
        }
        context.addNote(note)
        console.log(note._id)
        props.navigation.navigate("Home") 
    }

    return (
       <Layout 
       title="ساخت یاداشت "
       footer={
           <>
               <Button onPress={saveNote}>
                   <Text>ذخیره یاداشت</Text>
               </Button>
               <Button onPress={()=>props.navigation.navigate("Home")}>
                   <Text>انصراف</Text>
               </Button>
           </>
       }
        >
        <Form style={styles.container}>
         <Item>
             <Label>
                 عنوان :
             </Label>
             <Input value={getTitle} onChangeText={(title)=>{setTitle(title)}} />
         </Item>
         <Textarea 
             style={styles.container}
             value={getContent}
             onChangeText={(content)=>{setContent(content)}}
             bordered
             placeholder="متن اصلی اینجا وارد کنید"
         />
        </Form>
       </Layout>
    )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
