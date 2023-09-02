import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';

export function App () {
  // const { searchContact,} = useContext(Context)
  const {contacts, filter} = useSelector(state=> state.contactsBook)
  // const {filter} = useSelector(state=>state.filter)
  
  const findContact = () =>{
    return contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(filter)
  )}

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        { findContact().length ? (<ContactList list={findContact()}/>
        ): (<p>No matches found!</p>)} 
      </Container>
    );
}
