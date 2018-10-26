import React from 'react';
import  {Link, BrowserRouter as Router, Route } from 'react-router-dom';
//import  { Link, BrowserRouter as Router, Route } from 'react-router';
import Home from '../components/homeComp';
import News from '../components/newComp';
import Comment from '../components/commentComp';
import Jobs from '../components/jobComp';
import Show from '../components/showComp';
import Login from '../components/loginComp';
import Ask from '../components/askComp';
import Submit from '../components/submitComp';



import '../App.css'


function MainRoute(){
  return(
    <Router >
      <div>
      <p className='routes'>
      
       <span>  <Link to="/">Hacker News</Link> </span> 
       <span> <Link to="/new">new</Link>  </span> 
       <span>  <Link to="/comments">comments</Link> </span> 
       <span>  <Link to="/show">show</Link> </span> 
       <span>  <Link to="/ask">ask</Link> </span> 
       <span>  <Link to="/jobs">jobs</Link> </span> 
       <span>  <Link to="/submit">submit</Link> </span> 
       <span>   <Link to="/login">login</Link> </span> 
          
      </p>
      <hr/>

         <Route exact path='/' component={Home} /> 
          <Route exact path='/new' component={News} /> 
          <Route exact path='/comments' component={Comment} /> 
          <Route exact path='/show' component={Show} />
          <Route exact path='/ask' component={Ask} /> 
          <Route exact path='/jobs' component={Jobs} /> 
          <Route exact path='/submit' component={Submit} /> 
          <Route exact path='/login' component={Login} /> 
       
          </div>
    </Router>

  )
}

export default MainRoute;