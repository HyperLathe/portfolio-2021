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
  h3 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1rem;
    margin: 10px 0px 5px 0px;
    color: ${({ theme }) => theme.bodyText};
    @media screen and (min-width: 768px) {
      font-size: 1rem;
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

const Links = styled.div `
  display: flex;
  flex-direction: column;
   a {
     margin-bottom: 5px;
     @media screen and (min-width: 768px) {
      margin-bottom: 0px;
     }
   }
`;


function Home() {
  return (
    <Content>
      <h2>Richard Young: Front-end Developer</h2>
      <p>With over 16 years’ industry experience, I am an accomplished front-end developer with a good knowledge of design and UX/UI. I have a strong problem-solving mindset, an eye for detail, and excellent communication skills.</p>
      <h3>Problem solving on both a macro and micro level</h3>
      <p>HTML, CSS/SCSS, JavaScript, React, VueJS, UX/UI, wireframing, prototyping, user testing, responsive design, html emails, jQuery, WordPress, image editing, asset creation &amp; optimising, video/audio editing.</p>
      <h3>Featured projects:</h3>
      <p>For a more comprehensive list please check out my <a href='/portfolio/'>portfolio</a>.</p>
    </Content>
  );
}

export default Home;