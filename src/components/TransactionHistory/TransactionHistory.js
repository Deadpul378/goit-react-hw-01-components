import PropTypes from 'prop-types';
import { Raw } from './Raw/Raw';
import { Head } from './Head/Head';
import { Tr } from './Head/Head.styled';
import { Table } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Head title="type" />
          <Head title="amount" />
          <Head title="currency" />
        </Tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <Raw key={item.id} item={item} />;
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
