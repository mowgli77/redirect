import React from 'react'
import './App.css'
import {Route, BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className={"loader"}>
                <Route path='/' component={() => { window.location = 'https://ad.admitad.com/g/ek1lob0vrw561b9069146818ed5561/'; return null;} }/>
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
