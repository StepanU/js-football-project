import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { Provider } from "react-redux"
import { About } from "./components/about";
import { Game } from "./components/game";
import ConnectedSchedule from "./components/schedule";
import ConnectedTemplate from "./components/template";
import {store} from "./store";
import "./css/main.css"
import Button from "@material-ui/core/Button/Button"
import ConnectedGame from "./components/game";


const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <div className="mainBar">
                    <Button component={Link} to="/about">
                        Football Score
                    </Button>
                </div>
                <div className="leftBar"><ConnectedTemplate/></div>
                <div className="rightPart">
                    <Switch>
                            <Route exact path='/about' component  = { About } />
                            <Route exact path='/' component  = { ConnectedSchedule }  />
                            <Route exact path='/schedule' component  = { ConnectedSchedule }  />
                            <Route path='/schedule/:id' component  = { ConnectedGame }   />
                            <Route render = {() => (<div>404</div>)}/>
                    </Switch>
                </div>
            </div>
        </Router>

    </Provider>
);

ReactDOM.render(
<App/>,
    document.getElementById('app')
);