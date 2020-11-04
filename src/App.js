import React from 'react';
import './App.css';
import Homepage from "./routes/homepage/homepage";
import Bratari from "./routes/bratari/bratari";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


function App() {
    return (
    <div className="App">
        <Switch>
            <Route exact from="/" render={props => <Homepage {...props} />} />
            <Route exact path="/bratari" render={props => <Bratari {...props} />} />
        </Switch>
    </div>
    );
}

export default App;