import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { Provider } from "react-redux"
import { About } from "./components/about";
import ConnectedSchedule from "./components/schedule";
import ConnectedTemplate from "./components/template";
import {store} from "./store";
import "./css/main.css"
import Button from "@material-ui/core/Button/Button"
import ConnectedGame from "./components/game";


const App = () => (
    <Provider store={store}>
        <Router>
            <div className="pole">

                <Button variant="contained" color="primary" component={Link} className="mainBar" fullWidth = "true" to="/about">
                    Football Score
                </Button>
                <div className="leftBar"><ConnectedTemplate/></div>
                <div className="rightPart">
                    <Switch>
                            <Route exact path='/about' component  = { About } />
                            <Route exact path='/' component  = { ConnectedSchedule }  />
                            <Route exact path='/schedule' component  = { ConnectedSchedule }  />
                            <Route path='/schedule/:id' component  = { ConnectedGame }   />
                        <Route render = {() => (<img src = "https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg"></img>)}/>
                    </Switch>
                </div>
                <div className="footer"></div>
            </div>
        </Router>

    </Provider>
);

ReactDOM.render(
<App/>,
    document.getElementById('app')
);