import React from 'react';
import { HashRouter as Router, Route, HashRouter } from "react-router-dom";
import Movie from "../Routes/Movie";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <>
            <Route path="/" exact component={Movie} />
            <Route path="/tv" exact component={Tv} />
            <Route path="/search" exact component={Search} />

        </>
    </Router>
)


