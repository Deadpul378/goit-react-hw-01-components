import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Label,
  Quantity,
  StatsList,
  StatsItem,
  UserName,
  UserNickName,
  UserLocation,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserNickName className="tag">@{tag}</UserNickName>
        <UserLocation className="location">{location}</UserLocation>
      </Description>

      <StatsList className="stats">
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
