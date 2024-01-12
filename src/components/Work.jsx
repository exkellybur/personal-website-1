import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  background-color: #FFF9F0;
  // scroll-snap-align: center;
`

const Container = styled.div`
  height: 100vh;
  width: 80%; 
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 54px;
  font-family: 'Poppins', sans-serif;
  color: #081F5C;
`;

const Highlight = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Contents = styled.div`

`;

const Block = styled.div`
  border: 3px solid;
  padding: 30px;
  border-radius: 0.3rem;
  margin-top: 30px;
`;

const Logo = styled.div``;

const Subtitle = styled.div`
  font-family: 'Mukta Mahee', sans-serif;
  font-size: 1.3em;
`;

const ListItem = styled.ul`
  
`;

const Description = styled.ul`
  list-style-type: disc;
`;

const Work = () => {
    return (
        <Section>
          <Container>
            <Title>My Experiences</Title>
            <Highlight>
              Work/Extracurricular Highlights ✨
            </Highlight>
            <Contents>
              <Block>
                <Logo></Logo>
                <Subtitle>Director of Community @ Carleton Computer Science Society</Subtitle>
                <Description>
                  <ListItem>a</ListItem>
                  <ListItem>b</ListItem>
                  <ListItem>c</ListItem>
                </Description>
              </Block>

              <Block>
                <Logo></Logo>
                <Subtitle>External Marketer @ Asian Canadians Association Carleton</Subtitle>
                <Description>
                  <ListItem>a</ListItem>
                  <ListItem>b</ListItem>
                  <ListItem>c</ListItem>
                </Description>
              </Block>
            </Contents>
          </Container>
        </Section>
    )
}

export default Work