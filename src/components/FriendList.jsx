import React from 'react';
import FriendListItem from './FriendListItem';
import './FriendListItem.css';
import './common.css';

const FriendList = ({ friends }) => {
    console.log({ friends });
    return (
        <ul className="friend-list container">
            {friends.map(friend => (
                <li key={friend.id} className="friend-list-item">
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;