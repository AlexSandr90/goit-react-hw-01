import styles from './FriendList.module.css'
import FriendListItem from '../friendListItem/FriendListItem';
import PropTypes from 'prop-types';


const FriendList = ({friends}) => {
  return (
    <ul className={styles['friends-list']}>
      {
        friends.map(({avatar, name, isOnline, id}) => {
          return (
            <li key={id}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          )
        })
      }
    </ul>
  );
};

export default FriendList;


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};