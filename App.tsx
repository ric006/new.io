// App.tsx

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Home from './components/Home';
import Menu from './components/Menu';
import World from './components/World';

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/world" component={World} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
