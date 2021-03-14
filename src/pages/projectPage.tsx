import styled from "styled-components/macro";

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
    color: #d76b65;
      &:hover {
        text-decoration: underline;
      }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ImageBlock = styled.div `
  border: 1px solid ${({ theme }) => theme.bodyText};
  padding: 30px;
  border-radius: 10px;
`;

const Link = styled.div `
  display: flex;
  flex-direction: column;
   a {
     margin-bottom: 5px;
     @media screen and (min-width: 768px) {
      margin-bottom: 0px;
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

function projectPage({id, featured, nav, title, imgs, body, links, tags}: Project) {
  // console.log(props);
  return (
    <Content>
      <h2>{title}</h2>

      {Object.entries(body).map(([key, value]) => {
				return (<p key={key}>{value}</p>)
      })}
      <ImageBlock>
<p>images</p>

      </ImageBlock>
      <TagList>

      </TagList>
      
    </Content>
  );
}

export default projectPage;
