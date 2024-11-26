import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log({ avatar, name, isOnline });
    return (
        <div class="friend-card">
            <img src={avatar} alt={`${name}'s avatar`} width="48" class="friend-avatar" />
            <p class="friend-name">{name}</p>
            <p class={`friend-status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default FriendListItem;