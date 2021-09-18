import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import MainContent from "./components/MainContent";
import Data from "./pages/Data";
import List from "./pages/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <>
      <Router>
        <div className={isOpenSidebar ? "sidebar width-15" : "sidebar width-0"}>
          <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
        </div>
        <div className={isOpenSidebar ? "body width-85" : "body width-100"}>
          {/* topNavigation */}
          <div className="top-navigation-wrapper">
            <Switch>
              <MainContent isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}>
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
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
