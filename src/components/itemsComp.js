import React from 'react';

import HeadLines from './headlinesComp';



class NewsItem extends React.Component{
  
  constructor(props){
    super(props)
            
      this.state= {
          newLists:[]
      }

     this.fetchInfo = this.fetchInfo.bind(this);
    }

    componentDidMount(){
     
      
        this.fetchInfo()
       
      

    }


    componentWillUnmount() {
      this.fetchInfo()
    }

    
    fetchInfo(){
     
      this.props.lists.map((itemNum)=>{
        return fetch("https://hacker-news.firebaseio.com/v0/item/"+itemNum+".json")
              .then((res)=>res.json())
              .then(data=> this.setState(prevState=>{
                return{
                  newLists: prevState.data({ newLists:data})
                }
              }))
      })
      
    }
    
         
   // https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json
   
  

  

    render(){     
      return(
        <div>
              
       <HeadLines heading={this.state.newLists}/>
        </div>
      )
    }
}
 

export default NewsItem;