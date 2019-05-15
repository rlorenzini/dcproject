import React,{Component} from 'react';
import axios from 'axios';

class TestMyAPI extends Component {
  constructor(){
    super()
    this.state = {
      newsList: []
    }
  }
  componentDidMount() {
     let url = "https://www.reddit.com/r/upliftingnews/top/.json?count=20"

     fetch(url)
     .then(response => response.json())
     .then(newsItems => {
       let newsList = newsItems.data.children.map((article) => {
           return ( <div>
             <a href={article.data.url}><h3 className="body">{article.data.title}</h3></a>
             <img src={article.data.thumbnail}/>
           </div>
           )
         })
       this.setState({newsList: newsList})
     })
   }


   render() {
     return(
       <div>
       {this.state.newsList}
       </div>
     )
   }

 }
export default TestMyAPI
