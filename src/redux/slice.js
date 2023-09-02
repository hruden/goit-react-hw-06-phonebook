import { nanoid } from 'nanoid';
const { createSlice } = require('@reduxjs/toolkit');



const initialState = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contactsBook',
  initialState,
  reducers: {
    addContact: (state, action) => {const data = action.payload;
        const newContact = {
          ...data,
          id: nanoid(),
        };
        const nameCheck = state.contacts.find(({ name }) => name === data.name);
        if (nameCheck) {
          alert(`${data.name} is already in contacts`);
          return state;
        }
        return { ...state, contacts: [...state.contacts, newContact] };},
        removeContact: (state, action) => {
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
              };
          },
          filterContacts: (state, action) => {
            return{
                ...state,
                filter: action.payload,
            }
          },
  },
});
export const {addContact,
    removeContact,
    filterContacts} = contactsSlice.actions
export default contactsSlice.reducer
