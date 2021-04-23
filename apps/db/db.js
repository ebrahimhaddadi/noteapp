
import Realm  from 'realm';


const NoteSchema={
    name:"Note",
    properties:{
        _id:"string",
        title:"string",
        content:"string"
    },
    primaryKey:'_id'
}


  export const realmDb=async()=>{
   return await Realm.open({schema:[NoteSchema],schemaVersion:1});
}
console.log(realmDb())