import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Collapsible, TestComponent} from './test'

export default function App() {
    return <div className="app">
        <nav className="header">
            <img src={logo} className="header-logo" alt="logo"/>
            <h1 className="header-text">Test!</h1>
        </nav>
        <div className="main">
            <p className="main-text">
                This is placeholder text!
            </p>
            <Collapsible name="Weekly">
                <TestComponent name="Career"/>
                <TestComponent name="Health"/>
                <TestComponent name="Finances"/>
            </Collapsible>
        </div>
    </div>
        ;
}
