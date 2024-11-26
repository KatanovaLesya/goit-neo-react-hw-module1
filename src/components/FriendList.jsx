import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    console.log({ friends });
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li key={friend.id} class="friend-list-item">
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