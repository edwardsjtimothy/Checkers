import "./css/style.css"
import React, { Component } from 'react'


const pieceSelect=(e)=> {
    console.log(e.target.parentNode.id);
}
export default class whiteChecker extends Component {

    state = {
        whiteOne: "A1",
        whiteTwo: "A3",
        whiteThree: "A5",
        whiteFour: "A7",
        whiteFive: "B2",
        whiteSix: "B4",
        whiteSeven: "B6",
        whiteEight: "B8",
        whiteNine: "C1",
        whiteTen: "C3",
        whiteEleven: "C5",
        whiteTwelve: "C7"
    }

    render() {
        return (
            <div className="checker white" onClick={pieceSelect}>
            </div>
        )
    }
}


