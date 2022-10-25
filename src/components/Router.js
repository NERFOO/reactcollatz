import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Collatz from './Collatz';
import Home from './Home';
import MenuNavegacion from './MenuNavegacion';
import PageNotFound from './PageNotFound';

export default class Router extends Component {
    render() {

        function CollatzElement() {
            var { numero } = useParams();

            return <Collatz num={numero}/>
        }

        return (<div>
            <h1>Router</h1>

            <BrowserRouter>
                <MenuNavegacion />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/collatz/:numero' element={<CollatzElement />}/>
                    <Route path='/collatz/:numero' element={<CollatzElement />}/>
                    <Route path='*' element={<PageNotFound />}/>
                </Routes>
            </BrowserRouter>

        </div>)
    }
}
