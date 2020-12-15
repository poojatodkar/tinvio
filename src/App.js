import React from 'react';
import MenuList from './components/MenuList';
import InboxMenu from './components/InboxMenu';
import FriendList from './components/FriendList';
import ChatScreen from './components/ChatScreen';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  return (
    <div className="container chat-app flex">
      <MenuList />
      <InboxMenu />
      <FriendList />
      <ChatScreen />
      <Profile />
    </div>
  );
};

export default App;
