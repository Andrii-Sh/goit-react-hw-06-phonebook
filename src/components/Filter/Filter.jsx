import PropTypes from 'prop-types';
import { Label, Input } from './Filted.styled';

export const Filter = ({ onChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
