import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LangProvider } from './context/langContext';

// components
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <LangProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/project/:pname' component={Project} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </LangProvider>
  );
}

export default App;
