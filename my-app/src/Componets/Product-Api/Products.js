import React, { useEffect, useState } from 'react'
import NavBar from '../Nav-Bar/NavBar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import productslice from '../Cart/redux/productslice';

const Products = () => {
  const dispatch= useDispatch()
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  })
  return (
    <>
      <NavBar/>
      <div id='axios'>
      <div id='sectionTwo'>
        {
          products.map((el)=>(
            <Card style={{ width: '18rem' }} className='card' key={el.id}>
            <Card.Img variant="top" src={el.image} alt='' className='cardImg'/>
            <Card.Body>
              <Card.Title className='cardTitle'>{el.title}</Card.Title>
              <div className='price'>
                <span>{Math.round(el.price)}$<span className='line'> {Math.round(el.price *1.6)}$ </span> <span className='off'>60% OFF</span></span><AiOutlineShoppingCart className='AiOut' onClick={()=>dispatch(productslice.actions.addtocart(el))}/>
              </div>
              <RiStarSFill className='RiStar'/><RiStarSFill className='RiStar'/><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' /><RiStarSFill className='RiStar' />
              <br/>
              <Link to={`${el.id}`} ><Button variant="danger" className='view'>View</Button></Link>
            </Card.Body>
              </Card>
          ))
        }
      
      </div>
      </div>
      
    </>
  )
}

export default Products
