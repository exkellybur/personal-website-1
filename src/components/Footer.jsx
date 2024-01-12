import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  background-color: #081F5C;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  color: #F2F0DE;
`;

const Container = styled.div`
    width: 100%;
`;


const Footer = () => {
    return (
        <Section>
            Made with ❤️ + 🍣
        </Section>
    )
}

export default Footer