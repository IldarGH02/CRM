import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    filteredContacts: [],
    searchValue: ''
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
            const filtered = state.users.filter((contact) => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
                return {
                    ...state,
                    filteredContacts: filtered,
                    searchValue: action.payload                    
                }
        },

        editContact(state, action){
            

        },

        removeContact(state, action) {
            state.users = state.users.filter(contact => {
                return contact.id !== action.payload.id
            })
        },
    }
})

export const {setContact, removeContact, searchContact, editContact} = contactsSlice.actions

export default contactsSlice.reducer;