import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import { Button } from "../Button/Button";
import {FaBars} from 'react-icons/fa'



const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: red;
  padding: 1rem 2rem;
  z-index: 100;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size:24px;
`;

const MenuBars = styled((FaBars))`
    display: none;

    @media screen and (max-width: 768px){
        display:block;
        color:white;
        height:30px;
        width:30px;
        cursor: pointer;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-60%, 35%)
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -40px;

    @media screen and (max-width:768px){
        display: none
    }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-size: 24px
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width:768px){
        display: none
    }
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/">UCT-AGENCY</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
          <Button to="/contact" primary="true">Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
