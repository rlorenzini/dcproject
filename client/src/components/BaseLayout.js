import React,{Component} from 'react';
import Header from './Header'
import './styling/Header.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import TestAPI from './TestAPI'
import TestMyAPI from './TestMyAPI'

class BaseLayout extends Component {
  render(){
    return(
      <div>
      <Header isAuthenticated={this.props.isAuthenticated} history={this.props.history}/>
      <div className="baseLayout">
      {this.props.children}
      </div>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onLogout:()=>dispatch({type:"LOGOUT"})
  }
}

const mapStateToProps=(state)=>{
  return{
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BaseLayout))
