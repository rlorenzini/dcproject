import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './styling/Header.css';

class Header extends Component {
  render(){
    return(
      <div>
      <ul className="headerMenu">
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/register'>Register</NavLink></li>
      <li><NavLink to='/TestMyAPI'>TESTING</NavLink></li>
      {this.props.isAuthenticated ?<li><NavLink to='/history'>History</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/force'>UseOfForce</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/detained'>Detained</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/search'>Search</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/interactions'>Interactions</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/miranda'>Miranda</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/terms'>Terms</NavLink></li>:null}
      {this.props.isAuthenticated ?<li><NavLink to='/articles'>Articles</NavLink></li>:null}

      </ul>
      </div>
    )
  }
}
export default Header
