import React from 'react'
import styled from 'styled-components'

import Tech from "./Tech";

const Section = styled.div`
  height: 100vh;
  background-color: #FFF9F0;
  // scroll-snap-align: center;
`;

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

const Subtitle = styled.div`
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  color: #081F5C;
  padding-top: 30px;
`

const BioCard = styled.div`
  display: flex;
  gap: 30px;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 15em;
  background: #081F5C; 
  box-shadow: 0 0 20px #081F5C;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  margin-top: 2em;
`;


const About = () => {
    return (
        <Section id="about">
          <Container>
            <Title>About me</Title>
            <BioCard>
              <Img src='./img/kellyabout.jpg' alt='Kelly Huang'/> 
              <Bio>
                Hello, World! My name is Kelly Huang, a computer science student at Carleton University. 
                <br/>
                I'm goal-oriented and passionate about using technology and creativity to create products that leave a positive impact on the world.
              </Bio>
            </BioCard>
            <Subtitle>Languages & Tools</Subtitle>
            <Tech />
          </Container>
        </Section>
    )
}

export default About