import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slice';
export const Filter = () => {
  // const { searchContact, setSearchContact } = useContext(Context);
  const {filter} = useSelector(state=>state.contactsBook)
  const dispatch = useDispatch();



  const handleFind = ({ target }) => {
    const normalizedValue = target.value.trim().toLocaleLowerCase();
    dispatch(filterContacts(normalizedValue));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={handleFind}
        value={filter}
        name="searchContact"
        type="text"
        placeholder="Search contact..."
      />
    </>
  );
};

Filter.propTypes = {
  searchContact: PropTypes.string,
  handleFind: PropTypes.func,
};
