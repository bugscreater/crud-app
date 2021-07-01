import './App.css';
import React,{useState,useEffect} from 'react';
import Content from "./Content"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Display from './Display';






function App() {

  
  
  
  return (
    
      <Router>
        
        <Switch>

       
       
          <Route exact path = "/" component = {Content}/>
          <Route exact path = "/records" component = {Display}/> 
          
 
         
        </Switch>
      
      
      </Router>

      
   
  );
}

export default App;
