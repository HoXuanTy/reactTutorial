import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Add from '../Add';
import ShowProduct from './ShowProduct';
import Edit from '../Edit';

function Apps() {
    return (
        <Router>
            <div>
                <h1>Welcome to my react</h1>
                <nav>
                    <li className="nav-item">
                        <Link to={"/"}>Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to={"/showproduct"}>Show product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contact"}>Contact</Link>
                    </li> */}
                    <li className="nav-item btn_add">
                        <Link to={"/add"}>Add</Link>
                    </li>
                </nav>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/showproduct" component={ShowProduct} />
                <Route path="/contact" component={Contact} />
                <Route path="/add" component={Add} />
                <Route path="/Edit/:id" component={Edit} />
            </div>
        </Router>
    );
}

export default Apps;

