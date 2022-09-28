import PropTypes from 'prop-types';
import { Th } from './Head.styled';

export const Head = ({ title }) => {
  return <Th>{title.toUpperCase()}</Th>;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};
