import {useState } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components/macro';
import { lightTheme, darkTheme } from "./themes/themes";
import './App.css';

import PortfolioData from './content/portfolio_content.json';

import NavBurger from "./components/NavBurger";

import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import ProjectPage from "./pages/projectPage";

const Main = styled.div`
  width: 100%;
  height: 100%;
	transition: all 0.3s ease;
	background: ${({ theme }) => theme.background};
	position: relative;
    &.nav-open {
			/* transform: translateX(-200px); */
			margin: 0px 0px 0px -200px;
			padding-right: 215px;
		}
		@media screen and (min-width: 768px) {
			margin: 0px auto;
			max-width: 100%;
			position: relative;
			&.nav-open {
				/* transform: translateX(0); */
				margin: 0px auto;
				padding-right: 0px;
			}
		}
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
			box-shadow: none;
			&.nav-open {
				margin-left: 0;
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
	background: url('${({ theme }) => theme.logo}') 45% 90% no-repeat ${({ theme }) => theme.logoBackground};
	background-size: 150px;
	display: block;
	@media screen and (min-width: 768px) {
		width: 200px;
		background-position: 45% 70%;
	}
`;

const Nav = styled.nav`
	list-style-type: none;
	position: absolute;
	top: 0;
	right: 0;
	margin: 0px;
	padding: 18px 20px 20px 20px;
	width: 200px;
	height: 130%;
	min-height: 100vh;
	margin-right: -200px;
	text-align: right;
	display: flex;
	flex-direction: column;
	transform: scaleX(0);
	transform-origin: right;
	transition: all 0.3s ease;
	overflow-y: scroll;
	background: ${({ theme }) => theme.navBackground};
		&.nav-open {
			transform: scaleX(1);
			transition: all 0s ease;
			}
	 a {
			font-family: helvetica, arial, sans-serif;
			text-transform: uppercase;
			font-size: 0.9rem;
			text-decoration: none;
			color: ${({ theme }) => theme.navText};
			margin-bottom: 7px;
			transition: all 0.1s linear;
				&:first-child {
					margin-top: 10px;
				}
				&:last-child {
					margin-bottom: 100px;
				}
	 }
	@media screen and (min-width: 768px) {
		margin-right: 0;
		flex-direction: row;
		align-items: flex-end;
		height: 100%;
		min-height: auto;
		overflow: initial;
		padding: 0px;
		width: 50%;
		transform: scaleX(1);
		position: relative;
		align-items: center;
			a {
				flex-grow: 1;
				margin: 0;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-left: 1px solid #b4b4b4;
					&:nth-child(3) {
						border-right: 1px solid #b4b4b4;
					}
					&.active {
						color: ${({ theme }) => theme.navSelectedText};
						@media (hover: hover) {
							&:hover {
								color: ${({ theme }) => theme.navSelectedHoverText};
							}
						}
							&:after {
								width: 0; 
								height: 0; 
								border-left: 20px solid transparent;
								border-right: 20px solid transparent;
								border-top: 8px solid ${({ theme }) => theme.navSelectedArrow};
								content: '';
								display: block;
								position: absolute;
								margin-bottom: 19px;
								bottom: 0;
							}
					}
					@media (hover: hover) {
						&:hover {
							color: ${({ theme }) => theme.navHoverText};
							background: ${({ theme }) => theme.navHoverBackground};
						}
					}

				&:first-child {
					margin-top: 0px;
				}
				&:last-child {
					margin-bottom: 0px;
				}
			}
	}
`;

const DayNightButton = styled.button`
	width: 30px;
	height: 30px;
	display: block;
	background: url('${({ theme }) => theme.themeButton}') center center no-repeat;
	background-size: contain;
	border: 0;
	outline: none;
	position: absolute;
	cursor: pointer;
		@media (hover: hover) {
			&:hover {
				background-color: ${({ theme }) => theme.logoBackground};
			}
		}
		@media screen and (min-width: 768px) {
			position: relative;
			width: 75px;
			height: 100%;
			background-size: 30px;
		}
`;

const MobileExtraLinks = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.navText};
		p {
			margin: 15px 0px 7px 0px;
			font-size: 0.8rem;
		}
		a {
			font-size: 0.8rem;
		}
		@media screen and (min-width: 768px) {
			display: none;	
	}
`;


const Content = styled.div`
	width: 100vw;
	padding: 70px 15px 80px 15px;
	height: 100%;
	min-height: 100vh;
	@media screen and (min-width: 768px) {
		height: 100%;
		padding: 100px 0;
    width: 80vw;
    margin: 0px auto;
	}
	@media screen and (min-width: 1000px) {
    width: 60vw;
	}
`;

const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 35px;
	display: flex;
	align-items: center;
  padding: 0px 30px;
	border-top: 1px solid #b4b4b4;
	font-size: 0.8rem;
	background: ${({ theme }) => theme.headerBackground};
	color: ${({ theme }) => theme.bodyText};
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
		<ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
			<BrowserRouter>
				<Main className={(isOpen ? 'nav-open' : '')}>
					<Header onClick={closeNav} className={isOpen ? 'nav-open' : ''}>
						<NavBurger isOpen={isOpen} toggle={toggle} />
						<NavLink exact to="/"><Logo>Hyperlathe</Logo></NavLink>
						<Nav onClick={toggle} className={isOpen ? 'nav-open' : ''}>
							<NavLink exact to="/" title='Home'>Home</NavLink>
							<NavLink exact to="/portfolio" title='Portfolio'>Portfolio</NavLink>
							<NavLink exact to="/about" title='About'>About</NavLink>
							<MobileExtraLinks onClick={toggle}>
							<p>portfolio:</p>
							{Object.entries(PortfolioData).map(([key, value]) => {
								return (<NavLink key={key} to={"/portfolio/" + value.id}>{value.nav}</NavLink>)
							})}
						</MobileExtraLinks>
							<DayNightButton onClick={toggleTheme} title='Toggle light / dark mode' />
						</Nav>
					</Header>
					<Content onClick={closeNav}>
						<Route exact path="/" component={Home} {...PortfolioData} />
						<Route exact path="/about" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />

						{Object.entries(PortfolioData).map(([key, value]) => {
							return (<Route exact key={key} path={"/portfolio/" + value.id} component={() => <ProjectPage {...value} />} />)
      			}
						)}
						
					</Content>
					 <Footer>© {displayYear} Hyperlathe Ltd</Footer>
				</Main>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
