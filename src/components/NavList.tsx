import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import PortfolioData from '../content/portfolio_content.json';

const NavListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      a {
        margin-bottom: 5px;
        width: 23%;
        position: relative;
        color: #ffffff;
        border: 1px solid ${({ theme }) => theme.lineColor};
        font-size: 1rem;
        background-size: 130%;
        background-position: center;
        transition: all 0.2s linear;
        margin-bottom: 10px;
        &:hover {
          background-size: 150%;
          color: #ffffff;
        }
        &:after {
          content: "";
          display: block;
          padding-bottom: 100%;
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
              padding: 10px 0;
              background: rgba(0,0,0,0.6);
              color: #ffffff;
            }
        }
        @media screen and (min-width: 768px) {
          margin-bottom: 1.5vw;
        }
      }
    }
`;


function NavList() {
  return (
    <NavListContainer>

      {Object.entries(PortfolioData).map(([key, value]) => {
         {return <Link to={'portfolio/' + value.id}key={key} style={{backgroundImage: 'url(' + require('../img/portfolio/' + value.id + '_01.jpg' ).default + ')'}}><span><label>{value.nav}</label></span></Link>

        } 
      })}
    </NavListContainer>
  );
}

export default NavList;
