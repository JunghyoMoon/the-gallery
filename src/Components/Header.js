import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Sheader = styled.header`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
        margin-right: 0px;
    }
`;

const LinkTo = styled(Link)``;

const Header = () => (
    <Sheader>
        <Title>the Gallery</Title>
        <List>
            <Item>home</Item>
            <Item>search</Item>
            <Item>???</Item>
        </List>
        <List>
            <Item>🔨</Item>
            <Item>👦🏻</Item>
        </List>
    </Sheader>
);

export default withRouter(Header);
