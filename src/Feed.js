import React, { useState } from "react";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import InputOption from "./InputOption";
import "./Feed.css";

export default function Feed() {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    // db stuff
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <Create />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>SEND</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={Image} title='Photo' color='#70B5F9' />
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDay}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>
    </div>
  );
}
