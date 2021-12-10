import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default() => {
    const [isLoggedIn, setIsLiggedIn] = useState(false);
    return(
        <Router>
            <Switch>
                {isLoggedIn ? (
                <>
                <Route exact path="/">
                    <Home />
                </Route>
                </> 
                ) : (
                <Route exact path="/">
                    <Auth />
                </Route>)}
            </Switch>
        </Router>
    )
    
}