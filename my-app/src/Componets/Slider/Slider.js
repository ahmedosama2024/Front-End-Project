import React,{ useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Imga from './Img slider/fashion-sale-with-discount-template_23-2148936503.avif'
import Imgb from './Img slider/flat-design-fashion-collection-facebook-template_23-2149921756.avif'
import Imgc from './Img slider/modern-sale-banner-website-slider-template-design_54925-46.avif'
import { CarouselCaption } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='slider'>
        <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img src={Imga} alt='First slide'/>
        <CarouselCaption>
        <Link to='/products' ><Button variant="light" className='ShopNow' >Shop Now 😉</Button></Link>  
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Imgb} alt='Second slide' text="Second slide" />
      <CarouselCaption>
      <Link to='/products' ><Button variant="light" className='ShopNow' >Shop Now 🤓</Button></Link>  
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Imgc} alt='Third slide' text="Third slide" />
      <CarouselCaption>
      <h3 id='discount'> Up To 60% <span>OFF</span> </h3>
      <Link to='/products' ><Button variant="light" className='ShopNow' >Shop Now 😮</Button></Link>  
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;