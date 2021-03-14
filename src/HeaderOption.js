import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

export default function HeaderOption({ title, Icon, avatar }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={avatar} alt={title} />
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}
