import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './styles/main.scss'
import 'bulma'

import Home from './components/common/Home'
import FeministIndex from './components/feminists/FeministIndex'
import FeministShow from './components/feminists/FeministShow'
import FeministNew from './components/feminists/FeministNew'
import FeministEdit from './components/feminists/FeministEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import NotFound from './components/common/NotFound'

const App = () => (
  <BrowserRouter>
    <main>
      <nav className="navbar">
        <Link className="navbar-item is-small" to="/">HOME</Link>
        <Link className="navbar-item is-small" to="/feminists">SEE ALL FEMINIST ICONS</Link>
        <Link className="navbar-item is-small" to="/feminists/new">ADD YOUR FEMINIST</Link>
        <Link className="navbar-item is-small" to="/register">REGISTER</Link>
        <Link className="navbar-item is-small" to="/login">LOGIN</Link>        
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feminists/:id/edit" component={FeministEdit} />
        <Route path="/feminists/new" component={FeministNew} />
        <Route path="/feminists/:id" component={FeministShow} />
        <Route path="/feminists" component={FeministIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)