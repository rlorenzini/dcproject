import React,{Component} from 'react';
import Header from './Header'
import './styling/Header.css'
// import TestAPI from './TestAPI'
// import TestMyAPI from './TestMyAPI'

class BaseLayout extends Component {
  render(){
    return(
      <div>
      <Header/>
      <div className="baseLayout">
      {this.props.children}
      </div>
      </div>
    )
  }
}
export default BaseLayout
