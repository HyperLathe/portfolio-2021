import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import PortfolioData from '../content/portfolio_content.json';

const Search = styled.div `
  text-align: center;
  margin: 40px auto;
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
        &:after {
          padding-bottom: 100%;
        }
     }
   }
   @media screen and (min-width: 768px) {
      flex-direction: row;

   }
`;


function NavList() {

    {/* setting up the search states: */}
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<object[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.currentTarget.value);
    };
  
    {/* search function hook: */}
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
        <Link to={'/portfolio/' + value.id } key={key} style={{backgroundImage: 'url(' + require('../img/portfolio/' + value.id + '_01.jpg' ).default + ')'}}><span><label>{value.nav}</label></span></Link>
        ))}
    </NavListContainer>
    </section>
    </>
  );
}

export default NavList;
