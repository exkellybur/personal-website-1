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
  overflow: auto; /* Add overflow property to handle overflow behavior */
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
                  <ListItem>⭐️ Organize and lead social events for 2500+ undergraduate students to connect them to the computer science community</ListItem>
                  <ListItem>⭐️ Presented in front of 200+ freshmen to promote the CCSS agenda, increasing event turnout and developing a sense of community among students</ListItem>
                </Description>
              </Block>

              <Block>
                <Logo></Logo>
                <Subtitle>External Marketer @ Asian Canadians Association Carleton</Subtitle>
                <Description>
                  <ListItem>⭐️Coordinate promotional reels to promote sponsors, enhancing both the club and sponsor's online visibility</ListItem>
                  <ListItem>⭐️Maintain contact with 15+ sponsors and local businesses to secure additional resources</ListItem>
                </Description>
              </Block>
            </Contents>
          </Container>
        </Section>
    )
}

export default Work