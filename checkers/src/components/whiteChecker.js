import "./css/style.css"
import React, { Component } from 'react'


const pieceSelect=()=> {
    console.log("clicked");
}
export default class whiteChecker extends Component {

    render() {
        return (
            <div className="checker white" onClick={pieceSelect}>
            
            </div>
        )
    }
}


