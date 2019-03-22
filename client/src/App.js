import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Waffles from './components/Waffles.jsx'
import UserLogin from './components/UserLogin.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import User from './components/User.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>Hola Peter is reading this</div>
            <div>
              <NavigationBar/>
            </div>
            <Switch>
              <Route exact path="/" component={UserLogin} />
              <Route exact path="/:userId" component={User} />
              <Route exact path="/:userId/waffles" component={Waffles} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
