import styled from "styled-components/macro";

const Content = styled.div `
  img {
    max-width: 100%;
  }
  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin: 40px 0;
    text-align: center;
    color: ${({ theme }) => theme.bodyText};
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
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


function About() {
  return (
    <Content>
      <h2>About</h2>
      
    </Content>
  );
}

export default About;
