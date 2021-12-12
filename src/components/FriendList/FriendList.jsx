import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={s.friend__list}>
            {friends.map(({id, name, avatar, isOnline}) => (
                <FriendListItem           
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    ); 
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};