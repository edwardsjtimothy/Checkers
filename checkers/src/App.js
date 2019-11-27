import React from "react";
import "./components/css/style.css";
import Gameboard from "./components/gameBoard.js";
import Jumbo from "./components/jumbotron.js";

function App(props) {

  return (
    <div className="App">
      <Jumbo />
      <div className="container">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-1 col-lg-2"></div>
          <div className=" col-10 col-sm-10 col-md-10 col-lg-10">
            <Gameboard />
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-0"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
