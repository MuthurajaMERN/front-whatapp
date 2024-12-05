import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SideChat from './SideChat';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const roomsCollection = collection(db, 'rooms');
    const unsubscribe = onSnapshot(roomsCollection, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  console.log(rooms);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpObpNtJKyVexJ3KCGVXbTzilWCQiGDyXbeQ&s.png" />

        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search the chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SideChat addNewChat />

        {rooms.map((room) => (
          <SideChat key={room.id} id={room.id} name={room.data.name} photo={room.data.roomPhoto} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
