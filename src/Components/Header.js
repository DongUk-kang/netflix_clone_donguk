import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <li>
                <Link to={"/"}>
                    Movie
                </Link>
            </li>
            <li>
                <Link to={"/tv"}>
                    Tv
                </Link>
            </li>
            <li>
                <Link to={"/search"}>
                    search
                </Link>
            </li>
        </header>
    );
};

export default Header;
