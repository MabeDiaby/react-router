import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
    <div>
            Inside Nav
        <br />
        <Link to="/">
            <button className="button hoverRed homeButton">
                <h3> Home </h3>
            </button>
        </Link>
        <Link to="/A">
        <br />
            <button className="button hoverRed homeButton">
                <h3> A Component </h3>
            </button>
        </Link>
        <br />
        <Link to="/B">
            <button className="button hoverRed homeButton">
                <h3> B Component </h3>
            </button>
        </Link>
    </div>
    );
}

export default Nav;