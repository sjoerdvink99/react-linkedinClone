import React from "react";
import "./Header.css";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth } from "./firebase";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();

  const logoutOfApp = () => {
    dispatch({
      action: actionTypes.LOG_OUT,
    });
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://image.flaticon.com/icons/png/512/174/174857.png'
          alt='linkedin'
        />
        <div className='header__search'>
          <Search />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption title='Home' Icon={Home} />
        <HeaderOption title='Network' Icon={SupervisorAccount} />
        <HeaderOption title='Jobs' Icon={BusinessCenter} />
        <HeaderOption title='Messaging' Icon={Chat} />
        <HeaderOption title='Notifications' Icon={Notifications} />
        <HeaderOption
          avatar={user?.photoUrl}
          title='Me'
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}
