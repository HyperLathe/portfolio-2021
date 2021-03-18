import styled from "styled-components/macro";
import NavList from "../components/NavList";

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
  p {
    margin: 5px 0px 20px 0px;
    color: ${({ theme }) => theme.bodyText};
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: #d76b65;
      &:hover {
        text-decoration: underline;
      }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

function Portfolio() {
  return (
    <Content>
      <h2>Portfolio</h2>
      <NavList />
    </Content>
  );
}

export default Portfolio;
