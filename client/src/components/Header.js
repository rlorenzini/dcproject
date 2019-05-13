import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './styling/Header.css';

class Header extends Component {
  render(){
    return(
      <ul className="headerMenu">
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/history'>History</NavLink></li>
      <li><NavLink to='/force'>UseOfForce</NavLink></li>

      </ul>
    )
  }
}
export default Header
