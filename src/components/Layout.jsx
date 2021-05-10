import React from 'react'
import Head from './Head'
import '../App.css'
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Container = ({ children }) => {

    return <div className="app">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="App-nav">
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            {children}
        </header>
    </div >
}

const Layout = ({ children }) => {
    return <>{children}</>
}

Layout.Head = Head
Layout.Container = Container


export default Layout;