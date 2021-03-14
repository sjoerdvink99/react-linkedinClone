import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://i.pinimg.com/originals/e8/76/f9/e876f9174f627daf2f6a7b66c7e6fe79.jpg'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Sjoerd Vink</h2>
        <h4>sjoerdvink1@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,534</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
      </div>
    </div>
  );
}
