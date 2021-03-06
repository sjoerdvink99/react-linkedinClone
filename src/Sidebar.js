import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

export default function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  const recentItem = (topic) => (
    <div className='sidebar__recentItems'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://i.pinimg.com/originals/e8/76/f9/e876f9174f627daf2f6a7b66c7e6fe79.jpg'
          alt=''
        />
        <Avatar
          src={user.photoUrl}
          className='sidebar__avatar'
          alt={user.displayName}
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
