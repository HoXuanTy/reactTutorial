import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Add from '../Add';

function Apps() {
    return (
        <Router>
            <div>
                <h1>Welcome to my react</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        {/* <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li> */}
                        <li>
                            <Link to={"/add"}>Add</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/add" component={Add} />
            </div>
        </Router>
    );
}

export default Apps;

