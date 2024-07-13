import React from 'react';
import NavBar from '../Nav-Bar/NavBar';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import card from './Cart.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import productslice from './redux/productslice';

const Cart = () => {
  const cartProduct = useSelector((state) => state.product.items);
  const dispatch= useDispatch()
  let Total=0
  function sum(arr){
    for(let i =0; i<arr.length; i++){
      Total+= arr.map(el=>el.price)[i]
    }
    return Math.round(Total);
  }
  return (
    <>
      <NavBar />
      <div className={card.container}>
        {cartProduct.map((el) => (
          <div className={card.product} key={el.id}>
            <div>
              <img src={el.image} alt='' />
              <h5>{el.title}</h5>
              <h5>{Math.round(el.price)} $</h5>
            </div>

            <div className={card.icon}>
                <FaPlus onClick={()=>dispatch(productslice.actions.addtocart(el))} size={20} className={card.FaPlus} />
                <FaMinus onClick={()=>dispatch(productslice.actions.remove(el))} size={20} className={card.FaPlus}/>
            </div>
          </div>
        ))}
      </div>
      <div className={card.total}>
          <h5>Total: {sum(cartProduct)} $</h5>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
