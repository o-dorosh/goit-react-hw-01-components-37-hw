import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => (
                <FriendListItem           
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};