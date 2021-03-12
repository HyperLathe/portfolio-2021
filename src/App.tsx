import React, { useState } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components/macro';
import {lightTheme, darkTheme} from "./themes/themes";
import './App.css';
import NavList from "./components/NavList";
import NavBurger from "./components/NavBurger";

const Main = styled.div `
  width: 100%;
  height: 100%;
	transition: all 0.3s ease;
	background: ${({ theme }) => theme.background};
`;

const Header = styled.header`
    width: 100%;
    text-align: center;
    margin: 0;
    height: 60px;
    position: fixed;
    left: 0;
		background: ${({ theme }) => theme.headerBackground};
		transition: all 0.3s ease;
		z-index: 1;
    &.nav-open {
			margin-left: -200px;
		}
		@media screen and (min-width: 768px) {
			border-bottom: 1px solid #b4b4b4;
			height: 75px;
			display: flex;
			justify-content: space-between;
			position: relative;
			box-shadow: none;
			&.nav-open {
				margin-left: 0;
			}
		}
`;

const Nav = styled.nav`
	list-style-type: none;
	position: absolute;
	top: 0;
	right: 0;
	margin: 0px;
	padding: 20px;
	width: 200px;
	height: 100%;
	margin-right: -200px;
	text-align: right;
	transition: all 0.4s ease;
	display: flex;
	flex-direction: column;
	transform: scaleX(0);
	transform-origin: right;
		&.nav-open {
			transform: scaleX(1);
			}
	 a {
			font-family: helvetica, arial, sans-serif;
			text-transform: uppercase;
			font-size: 0.8rem;
			text-decoration: none;
			color: #b4b4b4;
			margin-bottom: 7px;
				&:hover,
				&.active {
					color: #000;
				}
	 }
	@media screen and (min-width: 768px) {
		margin-right: 0;
		flex-direction: row;
		align-items: flex-end;
		height: 100%;
		padding: 0px;
		width: auto;
		transform: scaleX(1);
		position: relative;
		justify-content: center;
		align-items: center;
			a {
				width: 100px;
				margin: 0;
				padding: 0px 50px;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-left: 1px solid #b4b4b4;
					&:nth-child(2) {
						border-right: 1px solid #b4b4b4;
					}
					&:hover {
						background-color: ${({ theme }) => theme.logoBackground};
						color: #ffffff;
					}
			}
	}
`;

const Logo = styled.h1`
	line-height: 0;
	font-size: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: transparent;
	background: url('${({ theme }) => theme.logo}') 45% 55% no-repeat ${({ theme }) => theme.logoBackground};
	background-size: 70%;
	display: block;
	@media screen and (min-width: 768px) {
		width: 200px;
	}
`;

const DayNightButton = styled.button `
	width: 100%;
	height: 100%;
	display: block;
	background: url('${({ theme }) => theme.themeButton}') center center no-repeat;
	background-size: 35px;
	border: 0;
	outline: none;
		&:hover {
			background-color: ${({ theme }) => theme.logoBackground};
		}
`;

const Footer = styled.footer `
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.textColor};
`;



function App() {

  const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const closeNav = () => {
		return (isOpen ? setIsOpen(false) : '');
	}

	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}


	const displayYear = new Date().getFullYear();

  return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <BrowserRouter>
      <Main>
        <Header onClick={closeNav} className={isOpen ? 'nav-open' : ''}>
					<NavBurger isOpen={isOpen} toggle={toggle} />
					<NavLink exact to="/"><Logo>Hyperlathe</Logo></NavLink>
					<Nav onClick={toggle} className={isOpen ? 'nav-open' : ''}>
					<NavLink exact to="/portfolio">Portfolio</NavLink>
					<NavLink exact to="/about">About</NavLink>
					{/* <MobileExtraLinks onClick={toggle}>
							<p>portfolio:</p>
							{Object.entries(PortfolioData).map(([key, value]) => {
								return (<NavLink key={key} to={"/portfolio/" + value.id}>{value.nav}</NavLink>)
							})}
						</MobileExtraLinks> */}
					<DayNightButton onClick={toggleTheme} />
					</Nav>
        </Header>
        <NavList />
				<Footer>© {displayYear} Hyperlathe Ltd</Footer>
      </Main>
    </BrowserRouter>
		</ThemeProvider>
  );
}

export default App;
