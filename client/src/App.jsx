import React from 'react'
import './App.css'
import {Route, BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className={"loader"}>
                {/*<Route path='/' component={() => { window.location = 'https://mnogomebeli.com/'; return null;} }/>*/}
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
