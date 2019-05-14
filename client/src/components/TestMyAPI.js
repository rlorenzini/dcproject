import React,{Component} from 'react';
import axios from 'axios';

class TestMyAPI extends Component {
  handleClick=()=>{
    let url = "https://www.odmp.org"
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.odmp.org/search/year/2019`).then(response=>{console.log(response.json)})
  }

  render(){
    return(
      <div>
      <button onClick={this.handleClick}>ClickyClick</button>
      </div>
    )
  }
}
export default TestMyAPI
