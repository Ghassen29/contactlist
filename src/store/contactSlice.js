import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

const contactSlice = createSlice({
    name: 'contact',
    initialState: [{
        id: uuidv4(),
        name:'ghassen',
        age:24,
        email:'ghassen29@gmail.com'
    }],
    reducers:{
        addContact:(state,action)=>{
            const newContact={
                id:uuidv4(),
                ...action.payload
            }
            return [...state,newContact]
        },

        //reducer des contacts
        setContacts:(state,action)=>{
            return action.payload
        }
    }
})
export const {setContacts,addContact}= contactSlice.actions
export default contactSlice.reducer