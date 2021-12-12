import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, id, isOnline }) => {
    const online = `${s.status} ${isOnline ? s.online : s.offline}`;
    return (
        <li className={s.friend__item} key={id}>
        <span className={online} />
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
        </li>
    );
  }

  FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };