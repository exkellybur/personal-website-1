import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import styled from "styled-components"


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto; 
  `;

function App() {

  return (
    <Container>
      <Navbar />
      <Hero id="home"/>
      <About/>
      <Work id="works"/>
      <Contact id="contact"/>
      <Footer/>
    </Container>
  )
}

export default App
