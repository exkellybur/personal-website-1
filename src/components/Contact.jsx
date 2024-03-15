import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Map from './Map';

import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  background-color: #FFF9F0;
`
const Container = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex; 
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
  font-size: 54px;
  font-family: 'Poppins', sans-serif;
  color: #081F5C;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #ededed;
  border-radius: 5px;
  border: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #ededed;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  background-color: #7097d1;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex:1;
`;


const Contact = () => {
  const ref = useRef();
  const[success, setSucces] = useState(null);

  const handleSubmit =e=>{
    e.preventDefault()
    emailjs.sendForm('service_jdkzavl', 'template_1xc4hy5', ref.current, 'hqjdMVaXOfkx-Q87J')
      .then((result) => {
          console.log(result.text);
          setSucces(true);
      }, (error) => {
          console.log(error.text);
          setSucces(false);
    });
  }
    return (
        <Section>
          <Container>
            <Left>
              <Form ref ={ref} onSubmit={handleSubmit}>
                <Title>Contact Me</Title>
                <Input placeholder="Name" name="name"/>
                <Input placeholder="Email" name="email"/>
                <TextArea placeholder="Write your message..." name="message" rows={10}/>
                <Button type="submit">Send</Button>
                {success && "Your message has been sent. I'll get back to you soon:)"}
              </Form>
            </Left>
            <Right>
              <Map/>
            </Right>
          </Container>
        </Section>
    )
}

export default Contact