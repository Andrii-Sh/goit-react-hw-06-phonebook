import PropTypes from 'prop-types';
import { ContactInfo, DeleteButton } from './Contact.styled';

export const Contact = ({ id, onDeleteContact, name, number }) => {
  const handleDelBtnClick = () => {
    onDeleteContact(id);
  };

  return (
    <>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton type="submit" onClick={handleDelBtnClick}>
        Delete
      </DeleteButton>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
