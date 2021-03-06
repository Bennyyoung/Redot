import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Foot from './Components/Foot';
import Head from './Components/Head';
import Home from './Components/Home.js';
import OurBrand from './Components/OurBrand';
import About from './Components/About';

import NotFoundPage from './Components/NotFoundPage';
import './App.css';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
            <Head />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/our_brand" component={OurBrand} />
                <Route path="/about_us" component={About} />

                <Route component={NotFoundPage} />
              </Switch>
              {/*<Maps />*/}
            <Foot />
        </div>
      </Router>  
    );
  }
}

export default App;