import { Box, Marker, Img, UserName } from './Friendlist.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => {
        return <FriendItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export const FriendItem = ({ item }) => {
  return (
    <Box>
      <Marker isOnline={item.isOnline}></Marker>
      <Img src={item.avatar} alt={item.name} />
      <UserName>{item.name}</UserName>
    </Box>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
