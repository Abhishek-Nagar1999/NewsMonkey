import './App.css';
import React, { Component, useState } from 'react'
import NavBar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
 apiKey = process.env.REACT_APP_NEWS_API

  state={
   progress:0
  }
  setProgress=(progress)=>{
   this.setState({progress:progress})
  }


  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <LoadingBar
        color='red'
        progress={this.state.progress}
        height= {3} 
      />
       <Routes>
       <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={'general'} pageSize={6} country="in" category='general'></News>}/>
       <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={"business"} pageSize={6} country="in" category='business'>Business</News>}/>
       <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={"entertainment"} pageSize={6} country="in" category='entertainment'>Entertainment</News >}/>
       <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={'health'} pageSize={6} country="in" category='health'>Health</News >}/>
       <Route exact path="/science"element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={"science"} pageSize={6} country="in" category='science'>Science</News >}/>
       <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={"sports"} pageSize={6} country="in" category='sports'>Sports</News>}/>  
       <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={"technology"} pageSize={6} country="in" category='technology'>Technology</News>}/>
       </Routes>

       </Router>
      </div>
    )
  }
}
