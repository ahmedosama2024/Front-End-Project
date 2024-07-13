import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import single from'./Single.module.css'
import NavBar from '../Nav-Bar/NavBar'
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import productslice from '../Cart/redux/productslice'


const SingleProduct = () => {
  const [cartItems,setCart]=useState([])
  const Items=useSelector(state=>state.product.items)
  const dispatch=useDispatch()
  useEffect(()=>{
    setCart(Items)
  },[cartItems,Items])

  const [product,setProduct]=useState([])
  const {id}=useParams();
  console.log(useParams())
  useEffect(()=>{
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>setProduct(res.data))
  })
  
  return (
    <>
      <NavBar/>
      <img src={product.image} alt='' className={single.img}/>
      <div className={single.flex}>
      <div className={single.div}>
      <h1>{product.title}</h1>
      <h3>{Math.round(product.price)} <span className='line'> {Math.round(product.price *1.6)}$ </span> </h3>
      <p>{product.description}</p>
      <RiStarSFill size={30} className={single.star}/><RiStarSFill size={30} className={single.star}/><RiStarSFill size={30} className={single.star}/><RiStarSFill size={30} className={single.star}/><RiStarSFill size={30} className={single.star}/>
      </div>
      <div>
        <AiOutlineShoppingCart size={100} className={single.cart} onClick={()=>dispatch(productslice.actions.addtocart(product))} />
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default SingleProduct
