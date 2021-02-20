import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 10;
    background-color: rgba(20, 20, 20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
    `

const List = styled.ul`
    display: flex;
`
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
`

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`




const Header = () => {
    return (
        <Head>
            <List>
                <Item>
                    <SLink to={"/"}>
                        Movie
                    </SLink>
                </Item>
                <Item>
                    <SLink to={"/tv"}>
                        Tv
                    </SLink>
                </Item>
                <Item>
                    <SLink to={"/search"}>
                        search
                    </SLink>
                </Item>
            </List>

        </Head>
    );
};

export default Header;
