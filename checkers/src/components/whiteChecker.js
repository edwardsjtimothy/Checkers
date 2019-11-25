import "./css/style.css"
import React, { Component } from 'react'


export default class whiteChecker extends Component {
    constructor(props) {
        super(props);
        this.hereIAm = React.createRef();
        this.pieceSelect = this.pieceSelect.bind(this);
      }

    // componentDidUpdate() {
    //     console.log(this.hereIAm.current.focus());
    // }  

    onFocus(e) {
        document.body.style.backgroundColor = "red"
    };

    //function for selecting and moving white checkers
    pieceSelect=(e)=> { 
        // let focus =this.hereIAm.current.focus(e); 
        e.target.focus()
        let startingPosition = e.target.parentNode.id;
        // console.log(focus);
        console.log(startingPosition);
        this.setState({ startingPosition });
    }

    render() {
        return (
            <div className="checker white" onClick={ this.pieceSelect} onFocus={this.onFocus} ref={this.hereIAm} >
            </div>
        )
    }
}


