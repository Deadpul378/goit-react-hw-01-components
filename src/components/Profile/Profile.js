import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Stats,
  StatsList,
  StatsItem,
  DescriptionText,
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
        <DescriptionText className="name">{username}</DescriptionText>
        <DescriptionText className="tag">@{tag}</DescriptionText>
        <DescriptionText className="location">{location}</DescriptionText>
      </Description>

      <StatsList className="stats">
        <StatsItem>
          <Stats className="label">Followers</Stats>
          <Stats className="quantity">{likes}</Stats>
        </StatsItem>
        <StatsItem>
          <Stats className="label">Views</Stats>
          <Stats className="quantity">{views}</Stats>
        </StatsItem>
        <StatsItem>
          <Stats className="label">Likes</Stats>
          <Stats className="quantity">{followers}</Stats>
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
