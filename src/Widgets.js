import React from "react";
import { FiberManualRecord, Info } from "@material-ui/icons";
import "./Widgets.css";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecord />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("New job offer", "Top news - 9099 readers")}
      {newsArticle("New job offer", "Top news - 9099 readers")}
      {newsArticle("New job offer", "Top news - 9099 readers")}
    </div>
  );
}
