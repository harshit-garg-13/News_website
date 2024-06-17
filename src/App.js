//import logo from './logo.svg';
//import './App.css';

import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
//import NewItems from './components/NewItems';
import News from './components/News';
import {HashRouter as Router,Routes,Route} from "react-router-dom";
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress})
  }
  render() {
    return (
      <div>
        <Router basename="/New-Website">
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route  exact path="/New-Website" element={   <News setProgress={this.setProgress}  key="general" country="in" category="general" name="Latest News"/>}/>
         <Route exact path="/sports" element={   <News setProgress={this.setProgress}  key="sports" country="in" category="sports" name="Sports news"/>}/>
         <Route exact path="/business" element={   <News setProgress={this.setProgress}  key="business" country="in" category="business" name="Business news"/>}/>
         <Route exact path="/entertainment" element={   <News setProgress={this.setProgress}  key="entertainment" country="in" category="entertainment" name="Entertainment News "/>}/>
         <Route exact path="/science" element={   <News setProgress={this.setProgress}  key="science" country="in" category="science" name="Science News"/>}/>
         <Route exact path="/technology" element={   <News setProgress={this.setProgress}  key="technology" country="in" category="technology" name="Technology News"/>}/>
         <Route exact path="/health" element={   <News setProgress={this.setProgress}  key="health" country="in" category="health" name="Health News"/>}/>
         <Route exact path="/general" element={   <News setProgress={this.setProgress}  key="general" country="in" category="general" name="Latest News"/>}/>
        </Routes>
      
       </Router>

      </div>
    )
  }
}
