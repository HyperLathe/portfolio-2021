import { useEffect } from "react";
import styled from "styled-components/macro";

const Content = styled.div `
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
    font-size: 1.3rem;
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
    color: ${({ theme }) => theme.linkText};
      &:hover {
        text-decoration: underline;
      }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ProfilePic = styled.img `
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    margin: 40px auto;
    @media screen and (min-width: 768px) {
      width: 250px;
      height: 250px;
      margin: 20px auto 40px auto;
    }
`;

const GenericPic = styled.img `
    width: 80%;
    margin: 40px auto;
    @media screen and (min-width: 768px) {
      width: 30%;
      margin: 0px auto 40px auto;
    }
`;


function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Content>
      <h2>About</h2>
      <section>
        <ProfilePic src={require('../img/richardyoung.jpg').default} alt={'Richard Young'} />
        <p>Having worked in perm and contract roles since 2004, I enjoy all aspects of front-end development, as well as wireframing, UX, prototyping, design, and testing. I am a huge fan of responsive design, accessibility, and clean, semantic markup, and have worked in a number of industries including e-commerce, finance, communications, and insurance.</p>
        <p>My strengths lie in building robust, performant user interfaces that function well and display correctly on all screens and devices. My historically hybrid approach has helped me gain an 'holistic' appreciation for how web content should look and function, and in that regard I enjoy opportunities to contribute to the design process, as well as assist with UX wherever relevant.</p>
        <p>I also offer a bespoke service for designing and/or building websites from the ground up, for SMEs of all kinds. Contact me at info@hyperlathe.com to find out more, or to discuss contract or perm roles.</p>
      </section>
      <section>
        <h3>Other information:</h3>
        <p>Prior to my current career path, I worked as a composer and copywriter; both of which I found to be useful methodologies in thinking about effective engagement and communication.</p>
        <p>Since 2009 I have been an active participant at <a href={'https://burningman.org/'} target='_blank' rel='noopener noreferrer'>Burning Man</a>, a yearly event focusing on community, art, and self-expression that takes place in the Nevada Desert. I provide artwork and design assets for the Burning Man Organisation and the related metalworking camp I am a member of, <a href={'http://www.ironmonkeyarts.org/'} target='_blank' rel='noopener noreferrer'>Iron Monkey Arts</a>. In 2018 one of my Burning Man Fire Conclave map designs was included in an <a href={'https://americanart.si.edu/exhibitions/burning-man'} target='_blank' rel='noopener noreferrer'>exhibition at the Smithsonian in Washington DC</a>.</p>
        <GenericPic src={require('../img/smithsonian.jpg').default} alt={'Richard Young at the Smithsonian Museum, Washington DC'} />
        <p>I'm currently living in Richmond, London, and frequently enjoy the green spaces of Richmond Park and Kew Gardens. In my spare time I also enjoy cooking for friends, cinema, and live music (when there isn't a pandemic happening).</p> 
        <p>Feel free to email me at info@hyperlathe.com if you would like to discuss working together.</p>
      </section>
    </Content>
  );
}

export default About;
