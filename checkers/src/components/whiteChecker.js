import "./css/style.css"
import React, { Component } from 'react'

export default class whiteChecker extends Component {

    peiceSelect =()=> {
        console.log("clicked")
    }


    render() {
        return (
            <div className="checker white" onClick={this.peiceSelect}>
            
            </div>
        )
    }
}

