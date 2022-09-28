import PropTypes from 'prop-types';
import { Td, Tr } from './Raw.styled';

export const Raw = ({ item }) => {
  return (
    <Tr>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>
  );
};

Raw.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};
