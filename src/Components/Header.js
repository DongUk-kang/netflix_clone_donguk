import React from 'react';

const Header = () => {
    return (
        <header>
            <li>
                <a href={"/"}>
                    Movie
                </a>
            </li>
            <li>
                <a href={"/tv"}>
                    Tv
                </a>
            </li>
            <li>
                <a href={"/search"}>
                    search
                </a>
            </li>
        </header>
    );
};

export default Header;
