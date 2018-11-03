import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { Provider } from "react-redux"
import { About} from "./about";
import { Schedule } from "./schedule";

const App = () => (
    <Provider>
        <Router>
            <div>
                <Switch>

                        <Route exact path='/about' component  = { About } />
                        <Route exact path='/' component  = { Schedule }  />
                        <Route exact path='/schedule' component  = { Schedule }  />
                        <Route path='/schedule/:id' component  = { Schedule }   />
                        <Route render = {() => (<div>404</div>)}/>
                </Switch>
            </div>
        </Router>

    </Provider>
);

ReactDOM.render(
<App/>,
    document.getElementById('app')
);