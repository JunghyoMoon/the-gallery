import React from "react";
import {HashRouter as HRouter, Route, Redirect, Switch} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Details from "../Routes/Details";
import Search from "../Routes/Search";


const Router = () => <HRouter>
    <Header />
    <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/search"} component={Search} />
        <Route path={"/:id"} component={Details} />
        <Redirect from="*" to={"/"} />
    </Switch>
</HRouter>

export default Router;
