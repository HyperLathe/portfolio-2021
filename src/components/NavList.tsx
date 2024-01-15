import React, { useState, useEffect } from "react";
import { DiReact } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import { FaWordpress, FaAngular } from 'react-icons/fa';
import { GiPaintBrush } from 'react-icons/gi';
import { FaHtml5 } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiCss3, DiPhp, DiJavascript1 } from 'react-icons/di';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import PortfolioData from '../content/portfolio_content.json';

const Search = styled.div `
  text-align: center;
  margin: 40px auto;
  color: ${({ theme }) => theme.bodyText};
    p {
      margin-bottom: 5px;
    }
`;

const SearchInput = styled.input `
  margin: 0px auto 40px auto;
  height: 2rem;
  font-size: 1.3rem;
  width: 200px;
  outline: none;
  color: #000;
  /* transform: translateX(-1rem); */
    &::placeholder {
      color: #b4b4b4;
    }
    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
`;

const NavListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  a {
     margin: 0px 0px 30px 0px;
     width: 100%;
     position: relative;
     color: #ffffff;
     border: 1px solid ${({ theme }) => theme.lineColor};
     font-size: 1rem;
     background-size: 130%;
     background-position: center;
     transition: all 0.2s linear;
     &:hover {
      background-size: 160%;
      color: #ffffff;
     }
     &:after {
      content: "";
      display: block;
      padding-bottom: 40%;
     }
     span {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      text-align: center;
      align-items: center;
      background-color: ${({ theme }) => theme.featureBlockBackground};
        &:hover {
          background: transparent;
        }
        label {
          width: 100%;
          text-align: center;
          padding: 10px;
          background: ${({ theme }) => theme.labelBackground};
          color: ${({ theme }) => theme.labelColor};
            &:hover {
              cursor: pointer;
            }
        }
     }
     @media screen and (min-width: 768px) {
      margin: 0.5vw;
      width: 23%;
  transition: all 0.2s linear;
        &:after {
          padding-bottom: 100%;
        }
     }
   }
   @media screen and (min-width: 768px) {
      flex-direction: row;
   }
`;

const TagIcons = styled.div `
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
   i {
     font-size: 1.5rem;
   }
`;

function NavList() {

    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<object[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.currentTarget.value);
    };

    useEffect(() => {
    const result = PortfolioData.filter(({tags}) => {
      return tags.some(e => e.toLowerCase().includes(searchText.toLowerCase()))
    });
    setSearchResults(result);
  }, [searchText]);


  return (
    <>
    <section>
      <Search>
        <p>Search by title, company, or technology:</p>
        <SearchInput type="text" placeholder="search" autoCapitalize="none" autoCorrect="off" value={searchText} onChange={handleChange}></SearchInput>
      </Search>
    </section>

    <section>
    <NavListContainer>
    {searchResults.map((value: any, key) => (
        <Link to={'/portfolio/' + value.id } key={key} style={{backgroundImage: 'url(' + require('../img/portfolio/' + value.id + '_01.jpg' ) + ')'}}><span><label>{value.nav}
       <TagIcons>
          {(value.tags.includes("React")? <i><DiReact color="#61DBFB" /></i> : '')}
          {(value.tags.includes("VueJS")? <i><RiVuejsFill color="#41B883" /></i> : '')}
          {(value.tags.includes("Angular")? <i><FaAngular color="#dd1b16" /></i> : '')}
          {(value.tags.includes("WordPress")? <i><FaWordpress color="#21759b" /></i> : '')}
          {(value.tags.includes("HTML")? <i><FaHtml5 color="#e34c26" /></i> : '')}
          {(value.tags.includes("CSS")? <i><DiCss3 color="#2965f1" /></i> : '')}
          {(value.tags.includes("JavaScript")? <i><DiJavascript1 color="#f0db4f" /></i> : '')}
          {(value.tags.includes("PHP")? <i><DiPhp color="#8993be" /></i> : '')}
          {(value.tags.includes("TypeScript")? <i><SiTypescript color="#007acc" /></i> : '')}
          {(value.tags.includes("Design")? <i><GiPaintBrush color="#0a9911" /></i> : '')}
       </TagIcons>
        </label></span></Link>
        ))}
    </NavListContainer>
    </section>
    </>
  );
}

export default NavList;
