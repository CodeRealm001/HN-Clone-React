import React from 'react';



function HeadLines (props){

  return(
    <div>
      
    {props.heading.map((news,index)=>
        <div key={index}>
          {index}
          <NewsHeader upContainer={news}/>
          <NewsFooter downContainer={news}/>
        </div>
        
    )}
     
      
    </div>
  )
}


function NewsHeader(props){
  return(
    <div>
      {props.upContainer.map((contain,index)=>(
            <a key={index} href={contain.url}>
               {contain.title}
            </a>
     ))}
    </div>
    

  )
}


function NewsFooter(props){
  return(
    <div> 
      
          {props.downContainer.map((contains,index)=>(
            <h6 key={index}>
                {contains.score} points by {contains.by} <a href={contains.time}>{contains.time}</a>
            </h6>
              
          ))}
    </div>
    
   ) 
}











export default HeadLines;