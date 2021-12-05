import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, id, isOnline }) => {
    const online = `${css.status} ${isOnline ? css.online : css.offline}`;
    return (
        <li className={css.friend__item} key={id}>
        <span className={online}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </li>
    );
  }

  FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };