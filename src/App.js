import React from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Service from './component/Service'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "./index.css"

const App = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className="body">
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Service" component={Service}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/contact" component={Contact}></Route>
      <Redirect to="/"></Redirect>
     </Switch>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default App
