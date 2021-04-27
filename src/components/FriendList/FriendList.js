import React from 'react';
import FriendItem from '../FriendItem/FriendItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendList;
