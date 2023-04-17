import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    filterContacts: []
}

const contactsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setContact(state, action) {
            state.users.push({
                email: action.payload.email,
                name: action.payload.name,
                phone: action.payload.phone,
                id: action.payload.id                
            })
        },
        searchContact(state, action) {    
            const filtered = [...state.users].filter((contact) => contact.name.includes(action.payload))  
                return {
                    ...state,
                    users: action.payload.length > 0 ? filtered : [...state.users]
                }
        },
        removeContact(state, action) {
            state.users = state.users.filter(contact => {
                return contact.id !== action.payload.id
            })
        },
    }
})

export const {setContact, removeContact, searchContact} = contactsSlice.actions

export default contactsSlice.reducer;