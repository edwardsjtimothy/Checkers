import "./css/style.css"
import React, { Component } from 'react'


export default class whiteChecker extends Component {
    
    state = {
        // A1: true,
        // A3: true,
        // A5: true,
        // A7: true,
        // B2: true,
        // B4: true,
        // B6: true,
        // B8: true,
        // C1: true,
        // C3: true,
        // C5: true,
        // C7: true
    }

    //function for selecting and moving white checkers
    pieceSelect=(e)=> {
        let piece = e.target
        piece.focus();
        let startingPosition = e.target.parentNode.id;
        console.log(startingPosition);
        this.setState({ startingPosition });
    }

    render() {
        return (
            <div className="checker white" onClick={this.pieceSelect}>
            </div>
        )
    }
}


