import React from 'react';
import './FriendList.css';
import './common.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log({ avatar, name, isOnline });
    return (
        <div className="friend-card">
            <img src={avatar} alt={`${name}'s avatar`} width="48" className="friend-avatar" />
            <p className="friend-name">{name}</p>
            <p className={`friend-status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default FriendListItem;