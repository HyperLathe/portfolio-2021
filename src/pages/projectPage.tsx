import styled from "styled-components/macro";
import { useEffect } from 'react';

const Content = styled.div `
  img {
    max-width: 100%;
  }
  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 1.1rem;
    margin: 40px 0px 40px 0px;
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

const ImageBlock = styled.div `
  border: 1px solid ${({ theme }) => theme.lineColor};
  padding: 3% 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
    a {
      margin: 0px 2%;
      img {
      border: 1px solid ${({ theme }) => theme.lineColor};
      max-height: 500px;
    }

    }
`;

const LinkBlock = styled.div `
  margin: 40px 0; 
  display: flex;
  flex-direction: column;
  text-align: center;
   a {
     margin-bottom: 5px;
     @media screen and (min-width: 768px) {
      margin-bottom: 10px;
     }
   }
`;

const TagList = styled.ul `
  display: flex;

`;

interface Ilink {
	link: string;
	label: string;
}

interface Project {
  id: string;
  featured: boolean;
	nav: string;
	title: string;
	imgs: number;
	body: string[];
	links: Array<Ilink>;
	tags: string[];
}


function ProjectPage({id, featured, nav, title, imgs, body, links, tags}: Project) {
  console.log(links);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const ImageArray = [...Array(imgs)].map((_, i) => {
    return ( (links[0].link === 'n/a') ? 
    <a href={'/portfolio'}><img src={require("../img/portfolio/" + id + "_0" + (i + 1) + ".jpg" ).default} key={i} alt={title + ' screenshot'} /></a> :
    <a href={links[0].link} target='_blank'><img src={require("../img/portfolio/" + id + "_0" + (i + 1) + ".jpg" ).default} key={i} alt={title + ' screenshot'} /></a>
    );
  });

  return (
    <Content>
      <h2>{title}</h2>

      {Object.entries(body).map(([key, value]) => {
				return (<p key={key}>{value}</p>)
      })}

      <LinkBlock>
      {(links[0].link === 'n/a') ? <p>No link(s) available.</p> : links.map((value) => {
          return <a href={value.link} target="_blank" rel="noopener noreferrer" key={value.label}>{value.label}</a>
        })} 
      </LinkBlock>


      <ImageBlock>
      {ImageArray}
      </ImageBlock>

      <TagList>
        {Object.entries(tags).map(([key, value]) => {
          return (<li key={key}> {value}&nbsp;•&nbsp;</li>)
        })}
        </TagList>
    </Content>
  );
}

export default ProjectPage;
