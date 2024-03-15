import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  background-color: #FFF9F0;
//   scroll-snap-align: center;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh;
    width: 80%; 
    display: flex;
    justify-content: center; 
    margin: 0 auto;

`;

const LeftCard = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // gap: 2px;
    //background-color:red;
`;

const Intro = styled.h2`
    color: #b0a996;
`;

const Title = styled.div`
    font-size: 74px;
    font-weight: 1000;
    font-family: 'Poppins', sans-serif;
    color: #081F5C;
`;

const WhoAmI = styled.div`
    align-items: center;
    font-size: 30px;
`;

const Icons = styled.div`

`;


const RightCard = styled.div`
    flex: 3;
    position: relative;
    //background-color: yellow;
`;

const Img = styled.img`
    height: 300px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate{
        to{
            transform: translateY(20px);
        }
    }
`;


const Hero = () => {
    const [typeEffect] = useTypewriter({
        words: ['curious', 'happy to meet you', 'an aspiring software developer', 'a graphic designer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    
    })

    return (
        <Section>
            {/* <Navbar/> */}
            <Container>
                <LeftCard>
                    <Intro>Hi, my name is</Intro>
                    <Title>Kelly Huang</Title>
                    <WhoAmI>
                        I'm 
                        <span style={{color: '#7096D1', marginLeft: '5px'}}>{typeEffect}</span>
                    </WhoAmI>
                    <Icons>

                    </Icons>
                </LeftCard>
                <RightCard>
                    {/* 3d model */}
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1.5}/>
                        <directionalLight position ={[3, 2, 1]}/>
                        <Sphere args={[1, 100, 200]} scale={2}>
                            <MeshDistortMaterial 
                                color="#7096D1" 
                                attach="material" 
                                distort={0.45} 
                                speed={1}
                                />
                        </Sphere>
                        {/* <Duck position={[0, 1.2, 1.5]} scale={[0.5, 0.5, 0.5]}>
                        </Duck> */}
                    </Canvas>
                    <Img src='./img/duckpic.png'></Img>
                    
                </RightCard>

            </Container>
        </Section>
    )
}

export default Hero