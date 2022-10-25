import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuNavegacion extends Component {
    render() {
        return (<div>
            <h1>Menu Navegacion</h1>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className='navbar-nav'>
                    <li>
                        <NavLink className="navbar-brand" to="/">Home</NavLink>
                    </li>

                    <div className="collapse navbar-collapse">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/collatz/6">Collatz 6</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/collatz/11">Collatz 11</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/noexisto">Sin ruta mapeada</NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>)
    }
}
