import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './products/f1.jpg'
import img2 from './products/f2.jpg'
import img3 from './products/f3.jpg'
import img4 from './products/f4.jpg'
import img5 from './products/f5.jpg'
import img6 from './products/f6.jpg'
import img7 from './products/f7.jpg'
import img8 from './products/f8.jpg'
import { RiStarSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Section2 = () => {

  return (
    <>
      <h1 id='exclusiveProduct'>Exclusive Products</h1>
      <div id='sectionTwo'>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img1} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Floral Shirt</Card.Title>
              <div className='price'>
                <span>54$ <span className='line'> 90$ </span> <span className='off'>60% OFF</span></span> 
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img2} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Floral Shirt</Card.Title>
              <div className='price'>
                <span>44$ <span className='line'> 102$ </span> <span className='off'>60% OFF</span></span> 
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img3} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Floral Shirt</Card.Title>
              <div className='price'>
                <span>70$ <span className='line'> 120$ </span> <span className='off'>60% OFF</span></span> 
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img4} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Floral Shirt</Card.Title>
              <div className='price'>
                <span>35$ <span className='line'> 80$ </span> <span className='off'>60% OFF</span></span> 
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img5} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Floral Shirt</Card.Title>
              <div className='price'>
                <span>70$ <span className='line'> 90$ </span> <span className='off'>60% OFF</span></span> 
                
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
             <Link to='/products'> <Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img6} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Floral Shirt</Card.Title>
              <div className='price'>
                <span>100$ <span className='line'> 150$ </span> <span className='off'>60% OFF</span></span> 
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img7} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Cotton Pant</Card.Title>
              <div className='price'>
                <span>35$ <span className='line'> 50$ </span> <span className='off'>60% OFF</span></span> 
              
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger"id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={img8} alt='' className='sectionimg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>Purple blouse</Card.Title>
              <div className='price'>
                <span>99$ <span className='line'> 120$ </span> <span className='off'>60% OFF</span></span> 
                
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to='/products'><Button variant="danger" id='ShowAll'>ShowAll</Button></Link>
            </Card.Body>
              </Card>
      </div>
    </>
  )
}
export default Section2;
