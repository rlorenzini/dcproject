import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './styling/Header.css';

class Header extends Component {
  render(){
    return(
      <div>
      <ul className="headerMenu">
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/history'>History</NavLink></li>
      <li><NavLink to='/force'>UseOfForce</NavLink></li>
      <li><NavLink to='/detained'>Detained</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/interactions'>Interactions</NavLink></li>
      <li><NavLink to='/miranda'>Miranda</NavLink></li>
      <li><NavLink to='/terms'>Terms</NavLink></li>

      </ul>
      </div>
    )
  }
}
export default Header
