import React from "react";

//Components
import Nav from "./components/navBar";

//Pages
import Home from "./pages/Home";
//Global Styles
import GlobalStyles from "./components/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  )
}

export default App;
