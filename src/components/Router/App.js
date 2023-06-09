import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Add from '../Add';
import ShowProduct from './ShowProduct';
import Edit from '../Edit';
import Lazada from '../Middterm/Lazada';
import AddLazada from '../Middterm/AddLazada';

function Apps() {
    return (
        <Router>
            <div>
                <h1>Welcome to my react Ho Xuan Ty dep trai hon thay dinh</h1>
                <nav>
                    <li className="nav-item">
                        <Link to={"/"}>Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to={"/showproduct"}>Show product</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to={"/lazada"}>Lazada</Link>
                    </li>
                    <li className="nav-item btn_add">
                        <Link to={"/add"}>Add</Link>
                    </li>
                </nav>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/showproduct" component={ShowProduct} />
                <Route path="/lazada" component={Lazada} />
                <Route path="/add" component={AddLazada} />
                <Route path="/Edit/:id" component={Edit} />
            </div>
        </Router>
    );
}

export default Apps;

