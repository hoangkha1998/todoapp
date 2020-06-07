import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Add from './components/Add';
import Edit from './components/Edit';
import { Provider } from 'react-redux';
import store from './store'
ReactDOM.render(
  <React.Fragment>
    <Router>
      <Provider store={store}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/add" component={Add} />
            <Route  path="/edit/:id" component={Edit} />
          </Switch>
        </App>
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
