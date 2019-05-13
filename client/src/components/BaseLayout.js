import React,{Component} from 'react';
import Header from './Header'
// import TestAPI from './TestAPI'

class BaseLayout extends Component {
  render(){
    return(
      <div>
      <Header/>
      <TestAPI/>
      {this.props.children}
      </div>
    )
  }
}
export default BaseLayout
