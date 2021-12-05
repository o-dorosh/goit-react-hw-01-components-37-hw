
import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
    <div className={css.description}>
        <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
        width="150px"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}><GoLocation className={css.icon} size="16" />{location}</p>
  </div>

    <ul className={css.stats}> 
     <li>
       <span className={css.label}>Followers</span>
       <span className={css.quantity}>{stats.followers}</span>
     </li>
     <li>
       <span className={css.label}>Views</span>
       <span className={css.quantity}>{stats.views}</span>
     </li>
     <li>
       <span className={css.label}>Likes</span>
       <span className={css.quantity}>{stats.likes}</span>
     </li>
   </ul>
</div>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };
