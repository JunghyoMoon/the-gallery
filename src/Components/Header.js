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

const Title = styled.h1``;

const List = styled.ul`
    display: flex;
    
`;

const Item = styled.li``;

const LinkTo = styled(Link)``;

const Header = () => (
    <Sheader>
        <Title>
            the Gallery
        </Title>
        <List>
            <Item>home</Item>
            <Item>search</Item>
            <Item>???</Item>
        </List>
    </Sheader>
)

export default withRouter(Header);