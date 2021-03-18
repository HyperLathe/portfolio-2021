
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import PortfolioData from '../content/portfolio_content.json';

const Content = styled.div `
  img {
    max-width: 100%;
  }
  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin: 60px 0 20px 0;
    text-align: center;
    color: ${({ theme }) => theme.headers};
    @media screen and (min-width: 768px) {
      font-size: 1.7rem;
    }
  }
  h3 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1rem;
    margin: 60px 0px 5px 0px;
    text-align: center;
    color: ${({ theme }) => theme.headers};
    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
      margin: 60px 0px 20px 0px;
    }
  }
  p {
    margin: 5px 0px 20px 0px;
    text-align: center;
    color: ${({ theme }) => theme.bodyText};
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.linkText};
      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.bodyText};
      }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const FeaturedBlock = styled.div `
  margin: 20px 0 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
   a {
     margin-bottom: 30px;
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
      margin-bottom: 0px;
      width: 24%;
        &:after {
          padding-bottom: 100%;
        }
     }
   }
   @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 30px 0 60px 0;
   }
`;


function Home() {
  return (
    <Content>
      <h2>Richard Young: Front-end Developer</h2>
      <p>With over 16 years’ industry experience, I am an accomplished front-end developer with a good knowledge of design and UX/UI. I have a strong problem-solving mindset, an eye for detail, and excellent communication skills.</p>
      <h3>Problem Solving Via:</h3>
      <p>HTML, CSS/SCSS, JavaScript, React, VueJS, UX/UI, wireframing, prototyping, user testing, responsive design, html emails, WordPress, image editing.</p>
      <h3>Featured projects:</h3>

      <FeaturedBlock>
      {Object.entries(PortfolioData).map(([key, value]) => {
         {return (value.featured === false) ? '' :
         <Link to={'portfolio/' + value.id}key={key} style={{backgroundImage: 'url(' + require('../img/portfolio/' + value.id + '_01.jpg' ).default + ')'}}><span><label>{value.title}</label></span></Link>
        } 
      })}
      </FeaturedBlock>

      <p>For a more comprehensive list of projects, please check out my <Link to='/portfolio/'>portfolio</Link>, and to discuss your requirements please email info(at)hyperlathe.com.</p>
    </Content>
  );
}

export default Home;