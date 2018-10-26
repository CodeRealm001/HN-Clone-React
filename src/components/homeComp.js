import React from 'react';
import NewsItem from "./itemsComp";
//import fetch from "isomorphic-fetch";
import '../App.css'
class Home extends React.Component{

  constructor(){
    super()

    this.state={
       topNewsLists: [],
       storiesLists:[]
    }

    this.fetchFeeds = this.fetchFeeds.bind(this);
  }


    componentDidMount(){
           this.fetchFeeds()
    }

    fetchFeeds(){
     const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        return fetch(url)
                .then(res => res.json())
                .then(data=> {this.setState({topNewsLists:data})
                    this.newsNumber = this.state.topNewsLists
                    this.newsNumber.map(items=>{
                                  fetch('https://hacker-news.firebaseio.com/v0/item/' + items + '.json')
                                  .then(resp=>resp.json())
                                  .then(newsDatas=>  {this.setState((prevState)=>{
                                    return{
                                      storiesLists : prevState.storiesLists.concat(newsDatas)
                                    }
                                  })
                                    
                                  })
                                  .catch(error =>{
                                    return{
                                      Error : error
                                    }
                                })
                                })
                })
                
              
                .catch(error =>{
                    return{
                      Error : error
                    }
                })
       }


    render(){
      return(
         
           <span > {this.state.storiesLists.map((stories,index)=>(
                   <div className="post" key={index}>
                    <span className="postNum" key={index}>{index +1 }</span> 
                      <h5><a href={stories.url}>{stories.title}</a></h5> 
                      <span className="postFooter">{stories.score} points by <a href={"/"}>{stories.by}</a> {stories.time} hours ago |<a>Hide</a> |  </span> 
                    </div>
                  ))
                }
            </span>
        
              
      )
    }

}






export default Home ;