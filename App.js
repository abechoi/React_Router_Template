import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Blogs from "./Blogs";
import About from "./About";
import ProjectDetails from "./ProjectDetails";
import projects from "./data/projects";


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
          { projects.map((project) => (

            <Route path={project.url}>
              <ProjectDetails project={project} key={project.id}/>
            </Route>
            
          ))}
        </Switch>
      </Router>
    </div>
  )

}
export default App;