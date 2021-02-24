import React from "react";
import {Switch, Route} from "react-router-dom";

//Components
import Nav from "./components/navBar";

//Pages
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import Projects from "./pages/Projects";

//Global Styles
import GlobalStyles from "./components/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/designs">
          <Designs />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
