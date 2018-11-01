import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Provider } from "react-redux"

const App = () => (
    <Provider>
        <Router>
            <div>a 2</div>
        </Router>
    </Provider>
);

ReactDOM.render(
<App/>,
    document.getElementById('app')
);