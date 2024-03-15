import React from 'react'
import styled from 'styled-components'

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; 


const Section = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFF9F0;

  
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;


const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    display: flex; 
    gap: 20px; 
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;    
`;

const Icons = styled.img`
    
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./img/memoji.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>
                            <a>About</a>
                    </ListItem>
                    <ListItem>
                        <ScrollLink to="works" smooth={true} duration={500}>Works</ScrollLink>
                    </ListItem>
                    <ListItem>
                        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                    </ListItem>
                </List>
                </Links>
                <Icons></Icons>
            </Container>
        </Section>
    )
}

export default Navbar