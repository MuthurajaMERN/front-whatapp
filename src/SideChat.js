import { Avatar } from '@mui/material'

import React from 'react'
import './SideChat.css';

function SideChat({id,name,photo,addNewChat}) {
  return !addNewChat?(
  <div className="sideChat">
    <Avatar src={photo}/>
    <div className="sideChat_info">
        <h2>{name}</h2>
        <p>Message to be Shown</p>

    </div>

  </div>
  ): (
    <div className="SideChat">
        
        
        <h2>Add New Chat</h2></div>
  )
}

export default SideChat