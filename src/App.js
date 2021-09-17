import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import MainContent from "./components/MainContent";
import Data from "./pages/Data";
import List from "./pages/List";
// import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Router>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <Switch>
          <MainContent sidebar={sidebar}>
            <Route path="/" exact>
              <Counter />
            </Route>
            <Route path="/data">
              <Data />
            </Route>
            <Route path="/list">
              <List />
            </Route>
          </MainContent>
        </Switch>
      </Router>
    </>
  );
}

export default App;
