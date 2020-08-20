import React from 'react'; 
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';


function App() {
  return (
    <Router>
       <div className="App">
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>


            {/* This is the default Route---Home Page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>  
    </Router>
  );
}



      {/* we need React-Router */}
      {/* localhost.com/ */}
      {/* localhost.com/checkout */}
      {/* localhost.com/login */}
      
      export default App;
