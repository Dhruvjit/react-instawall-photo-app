import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Main from "./Components/Main";
import {BrowserRouter} from 'react-router-dom';
import './Styles/Stylesheet.css'

/*
* notes
*
* BrowserRouter: its a module from react-router and its main purpose is to keep track of changes to the url
*
* BrowserRouter depends on Link component upon which user will click, which in return will tell the BrowserRouter to
* update the url and help our app to render changes (including when someone presses back button)
*
* */
ReactDom.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>,
    document.getElementById('root')
);
