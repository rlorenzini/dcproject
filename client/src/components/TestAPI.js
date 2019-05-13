import React,{Component} from 'react';
import axios from 'axios';

class TestAPI extends Component {
  constructor(){
    super()
  }
  handleClick=()=>{
  let url = "http://www.giantbomb.com/api/search/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=json&query=%22spider-man%22&resources=game"
  // let url = "&format=json&query=%22spider-man%22&resources=game"
  axios.get(
    `${'https://cors-anywhere.herokuapp.com/'}http://www.giantbomb.com/api/search/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=json&query=%22spider-man%22&resources=game`,{crossdomain:true})
  .then(response=>{
    console.log(response.json)
  })}
  render(){
    return(
      <div>
      <h2>testing</h2>
      <button onClick={this.handleClick}>Button</button>
      </div>
    )
  }
}
export default TestAPI
