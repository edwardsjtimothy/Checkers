import React from 'react';
import "./css/style.css"

export default function Jumbo() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Checkers</h1>
                    <p className="lead">It does what it says on the tin!</p>
                </div>
            </div>
        </>
    )
}
