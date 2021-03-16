import React, { useState } from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth } from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch({
              type: actionTypes.SET_USER,
              user: {
                email: result.user.email,
                uid: result.user.uid,
                displayName: name,
                photoUrl: profilePic,
              },
            });
          });
      })
      .catch((error) => alert(error.message));
    setName("");
    setEmail("");
    setPassword("");
    setProfilePic("");
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            email: result.user.email,
            uid: result.user.uid,
            displayName: name,
            photoUrl: profilePic,
          },
        });
      })
      .catch((error) => alert(error.message));
    setName("");
    setEmail("");
    setPassword("");
    setProfilePic("");
  };

  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png'
        alt=''
      />
      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full name (required if registering)'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type='text'
          placeholder='Profile pic URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button type='submit'>Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
