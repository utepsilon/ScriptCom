import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  border-top-left-radius:50px;
  border-bottom-left-radius:50px;
  border-top-right-radius:50px;
  border-bottom-right-radius:50px;
  font-family:Poppins;
  font-size:1.0rem;
`
 const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ff4760;
    border-radius:100%

  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:20px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -50px;

/* Second Nav */
/* margin-right: 0px; */

/* Third Nav */
/* width: 100vw;
white-space: nowrap; */

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Image = styled.img`
height:80px;
widht:80px;
position:absolute;
left:50px;
border-radius:30%;
`

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavBtnLink = styled(Link)`
  position:absolute;
  right:50px;
  border-radius: 10px;
  background: #ff4760;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
 
  /* Second Nav */
  margin-left: 0px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
const NavBar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
        <Image src={require('../assets/logo/Logo_New.png')} alt='Logo'></Image>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/category' activeStyle>
          Categories
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      
    </Nav>
    </>
  )
}

export default NavBar