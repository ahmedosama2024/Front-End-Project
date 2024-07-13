import React from 'react'
import NavBar from '../Nav-Bar/NavBar';
import Slider from '../Slider/Slider';
import Section from '../Section-one/Section';
import Section2 from '../Section-two/Section2';
import Section3 from '../Section-three/Section3';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Section/>
      <Section2/>
      <Section3/>
      <Footer/>
    </>
  )
}

export default Home;


