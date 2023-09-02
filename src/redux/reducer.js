// import { createReducer } from '@reduxjs/toolkit';
// import ACTIONS from './constans';
// import { nanoid } from 'nanoid';

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// export const contReducer = createReducer(contactsInitialState, {
//   [ACTIONS.ADD_CONTACTS]: (state, action) => {
//     const data = action.payload;
//     const newContact = {
//       ...data,
//       id: nanoid(),
//     };
//     const nameCheck = state.contacts.find(({ name }) => name === data.name);
//     if (nameCheck) {
//       alert(`${data.name} is already in contacts`);
//       return state;
//     }
//     return { ...state, contacts: [...state.contacts, newContact] };
//   },
//   [ACTIONS.REMOVE_CONTACTS]: (state, action) => {
//     return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== action.payload),
//       };
//   },
//   [ACTIONS.FILTER_CONTACTS]: (state, action) => {
//     return{
//         ...state,
//         filter: action.payload,
//     }
//   },
// });
// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case ACTIONS.ADD_CONTACTS:
//       const data = action.payload;
//       const newContact = {
//         ...data,
//         id: nanoid(),
//       };
//       const nameCheck = state.contacts.find(({ name }) => name === data.name);
//       if(nameCheck){
//         alert(`${data.name} is already in contacts`)
//         return state
//       }
//       return { ...state, contacts: [...state.contacts, newContact] };
//     case ACTIONS.REMOVE_CONTACTS:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(contact => contact.id !== action.payload),
    //   };
//       case ACTIONS.FILTER_CONTACTS:
        // return{
        //     ...state,
        //     filter: action.payload,
        // }
//     default:
//       return state
//   }
// };
