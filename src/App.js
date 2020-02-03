import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import Post from './components/Post';
import Users from './components/Users';
import User from './components/User';

class App extends Component {

  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/posts' component={Posts} />
          <Route path='/posts/:id' component={Post} />
          <Route exact path='/users/' component={Users} />
          <Route path='/users/:id' component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;