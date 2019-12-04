import React, { Component } from 'react';
import Whitechecker from "./whiteChecker.js";
import Bluechecker from "./blueChecker.js";
import "./css/style.css";

export default class Gameboard extends Component {

   

// handleClick = (e) => {
//   e.preventDefault();
//   const active = document.querySelector('.active');
//   if(active){
//     active.classList.remove('active');
//   }
//   e.currentTarget.classList.add('active');
// }

  componentDidMount =()=> {
    const row = document.createElement("div");
    row.className += "row"
    // const sqaure = document.createElement("DIV").classList.add("square");
    // const redClass = square.classList.add("red");
    // const blackClass = square.classList.add("black");
    console.log(row);

    for(let i = 0; i = 8; i++) {
      document.getElementById("board").appendChild(row);
    }

  }

    render() {
        return (
            <div id="board">
                {/* Row A */}
              <div className="row">
                <div id="A1" className="square black"><Whitechecker /></div>
                <div id="A2" className="square red"></div>
                <div id="A3" className="square black"><Whitechecker /></div>
                <div id="A4" className="square red"></div>
                <div id="A5" className="square black"><Whitechecker /></div>
                <div id="A6" className="square red"></div>
                <div id="A7" className="square black"><Whitechecker /></div>
                <div id="A8" className="square red"></div>
              </div>

              {/* Row B */}
              <div className="row">
                <div id="B1" className="square red"></div>
                <div id="B2" className="square black"><Whitechecker /></div>
                <div id="B3" className="square red"></div>
                <div id="B4" className="square black"><Whitechecker /></div>
                <div id="B5" className="square red"></div>
                <div id="B6" className="square black"><Whitechecker /></div>
                <div id="B7" className="square red"></div>
                <div id="B8" className="square black"><Whitechecker /></div>
              </div>

              {/* Row C */}
              <div className="row">
                <div id="C1" className="square black"><Whitechecker /></div>
                <div id="C2" className="square red"></div>
                <div id="C3" className="square black"><Whitechecker /></div>
                <div id="C4" className="square red"></div>
                <div id="C5" className="square black"><Whitechecker /></div>
                <div id="C6" className="square red"></div>
                <div id="C7" className="square black"><Whitechecker /></div>
                <div id="C8" className="square red"></div>
              </div>

              {/* Row D */}
              <div className="row">
                <div id="D1" className="square red"></div>
                <div id="D2" className="square black"></div>
                <div id="D3" className="square red"></div>
                <div id="D4" className="square black"></div>
                <div id="D5" className="square red"></div>
                <div id="D6" className="square black"></div>
                <div id="D7" className="square red"></div>
                <div id="D8" className="square black"></div>
              </div>

              {/* Row E */}
              <div className="row">
                <div id="E1" className="square black"></div>
                <div id="E2" className="square red"></div>
                <div id="E3" className="square black"></div>
                <div id="E4" className="square red"></div>
                <div id="E5" className="square black"></div>
                <div id="E6" className="square red"></div>
                <div id="E7" className="square black"></div>
                <div id="E8" className="square red"></div>
              </div>

              {/* Row F */}
              <div className="row">
                <div id="F1" className="square red"></div>
                <div id="F2" className="square black"><Bluechecker /></div>
                <div id="F3" className="square red"></div>
                <div id="F4" className="square black"><Bluechecker /></div>
                <div id="F5" className="square red"></div>
                <div id="F6" className="square black"><Bluechecker /></div>
                <div id="F7" className="square red"></div>
                <div id="F8" className="square black"><Bluechecker /></div>
              </div>

              {/* Row G */}
              <div className="row">
                <div id="G1" className="square black"><Bluechecker /></div>
                <div id="G2" className="square red"></div>
                <div id="G3" className="square black"><Bluechecker /></div>
                <div id="G4" className="square red"></div>
                <div id="G5" className="square black"><Bluechecker /></div>
                <div id="G6" className="square red"></div>
                <div id="G7" className="square black"><Bluechecker /></div>
                <div id="G8" className="square red"></div>
              </div>

              {/* Row H */}
              <div className="row">
                <div id="H1" className="square red"></div>
                <div id="H2" className="square black"><Bluechecker /></div>
                <div id="H3" className="square red"></div>
                <div id="H4" className="square black"><Bluechecker /></div>
                <div id="H5" className="square red"></div>
                <div id="H6" className="square black"><Bluechecker /></div>
                <div id="H7" className="square red"></div>
                <div id="H8" className="square black"><Bluechecker /></div>
              </div>

            </div>
        )
    }
}
