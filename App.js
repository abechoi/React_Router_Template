import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Blogs from "./Blogs";
import About from "./About";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/blogs"><Blogs/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/about"><About/></Route>
        </Switch>
      </Router>
    </div>
  )

}
export default App;