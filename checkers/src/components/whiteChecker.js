import "./css/style.css"
import React, { Component } from 'react'


export default class whiteChecker extends Component {
    constructor(props) {
        super(props);
        this.hereIAm = React.createRef();
        this.pieceSelect = this.pieceSelect.bind(this);
      }

    //function for selecting and moving white checkers
    pieceSelect=(e)=> { 
        let focus = this.hereIAm.current
        let startingPosition = e.target.parentNode.id;
        focus.classList.toggle("active");
        console.log(startingPosition);
        this.setState({ startingPosition });
    }

    render() {
        return (
            <div className="checker white" onClick={this.pieceSelect} ref={this.hereIAm} >
            </div>
        )
    }
}


