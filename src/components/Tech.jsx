import React from "react";
import styled from 'styled-components'

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  gap: 10;
  margin-top: 1rem;
  max-height: 300px; /* Set a maximum height */
  overflow: auto; /* Add overflow property to handle overflow behavior */
`;

const Ball = styled.div`
  width: 80px;
  height: 80px;
  gap: 15px;
  
`

const Tech = () => {
  return (
    <Container>
      {technologies.map((technology) => (
        <Ball key={technology.name}> 
          <BallCanvas icon={technology.icon} />
        </Ball>
      ))}
    </Container>
  );
};

export default Tech