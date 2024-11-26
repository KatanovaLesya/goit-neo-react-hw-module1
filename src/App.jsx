import React from 'react'
import './App.css'
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import friends from './friends.json';
import userData from './userData.json';
import TransactionHistory from './components/TransactionHistory';
import items from './transactions.json';

const App = () => {

  return (
    <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
      <FriendList
        friends={friends} />
      <TransactionHistory
        items={items} />
    </>
  );
};

export default App;
