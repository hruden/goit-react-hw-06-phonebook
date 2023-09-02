import { ContactsBook, ContactsItem, DeletContact } from "./ContactList.styled"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeContact } from "redux/slice";


export const ContactList = ({list}) => {
    const dispatch = useDispatch()

    return (
        <ContactsBook>
            {list.map(({id, name, number}) => 
                <ContactsItem key={id}>{name}: {number}
                    <DeletContact onClick={()=>dispatch(removeContact(id))}>Delete</DeletContact>
                </ContactsItem>            
            )}
        </ContactsBook>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func
}
