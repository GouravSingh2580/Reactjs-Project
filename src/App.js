import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render()
  {
    return(
      <div>
        <img src={logo} alt="logo" width="1000" height="1000" className="logo" />
      <h1 className="app-title">Code with Gourav</h1>
      <div classname="container">
        Add an Item...
        <br></br>
        <input
        type="text"
        className="input-text"
        placeholder="Write your name ..."
        />
        <button className="add-btn">Add Code 
        </button>
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" name="" id=""/>
              hello
              <button className="btn">Delete</button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }


}

export default App;
