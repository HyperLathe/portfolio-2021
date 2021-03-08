import React, { useState } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled from 'styled-components/macro';
// import logo from './logo.svg';
import './App.css';
import NavList from "./components/NavList";
import NavBurger from "./components/NavBurger";
import LogoGraphic from "./img/logo.svg";

const Main = styled.div `
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
    width: 100%;
    text-align: center;
    margin: 0;
    height: 60px;
    position: fixed;
    left: 0;
    background: #fff;
		transition: all 0.4s ease;
		box-shadow: 0px 0px 5px #b2b2b2;
		z-index: 1;
    &.nav-open {
			margin-left: -200px;
		}
		@media screen and (min-width: 768px) {
			border-bottom: 1px solid #b2b2b2;
			height: 60px;
			display: flex;
			justify-content: space-between;
			position: relative;
			box-shadow: none;
			&.nav-open {
				margin-left: 0;
			}
		}
`;

const Logo = styled.h1`
	line-height: 0;
	font-size: 0;
		a {
			color: transparent;
			background: url('${LogoGraphic}') center center no-repeat;
			background-size: contain;
			width: 60%;
			height: 43px;
			display: block;
			margin: 0px auto;
		}
	@media screen and (min-width: 768px) {
		width: 200px;
		height: 60px;
			a {
				margin: 0px;
				background-position: bottom left;
				width: 100%;
				height: 100%;
			}
	}
`;



function App() {

  const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const closeNav = () => {
		return (isOpen ? setIsOpen(false) : '');
	}
  return (
    <BrowserRouter>
      <Main>
        <Header>
        <NavBurger isOpen={isOpen} toggle={toggle} />
					<Logo><NavLink exact to="/">Hyperlathe</NavLink></Logo>
        </Header>
        <NavList />
      </Main>
    </BrowserRouter>
  );
}

export default App;
