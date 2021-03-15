import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

const tijd = "01.33.00";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
