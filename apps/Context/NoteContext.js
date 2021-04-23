import React, { useEffect,useState,createContext } from 'react'
import { Alert } from 'react-native';
import { realmDb } from '../db/db';


export const NoteContext=createContext();


export const  NoteProvider =props=>{
    const [getNotes, setgetNotes] = useState([])

    useEffect(()=>{
        const getData=async()=>{
            try {
                await dataAction("Sync")
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    },[])
     
    const addNote=async note=>{
     await dataAction('Add',note)
     await dataAction("Sync")
    }
    const updataNote=async (note,id)=>{
  await dataAction('Update',note,id)
  await dataAction("Sync")
    }
    const deleteNote=async id=>{
await dataAction('Delete',null,id)
await dataAction("Sync")
    }
    const dataAction=async (action,note,id)=>{
        try {
            const realm=await realmDb()
            switch (key) {
                case "Sync":
                    const notes= realm.objects('Note',)
                    return setgetNotes(notes);
                    case "Add":
                        return realm.write(()=>{
                            realm.create('Note',note)
                        })
                        case "Update": 
                        return realm.write(()=>{
                            const dbNote=realm.objectForPrimaryKey('Note',id);
                            dbNote.title=note.title;
                            dbNote.content=note.content
                        })
                        case "Delete":
                            return realm.write(()=>{
                                realm.delete(realm.objectForPrimaryKey('Note',id))
                            })
                
            }
            realm.close()
        } catch (error) {
          console.log(error)  
          Alert.alert("خطایی یاداشت","خطا در ارتباط با پایگاخ داده رخ داده است")
        }
    }
    return (
        <NoteContext.Provider value={{getNotes,addNote,updataNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
} 