import React from 'react'
import './App.css'
import Home from './Componets/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Componets/Product-Api/Products';
import About from './Componets/About/About';
import Contact from './Componets/Contact-Us/Contact';
import Resigter from './Componets/Resigter/Resigter';
import Login from './Componets/Login/Login';
import Cart from './Componets/Cart/Cart';
import NotFound from './Componets/Not-Found/NotFound';
import SingleProduct from './Componets/Single-Product/SingleProduct';
import Scroll from './Componets/Scroll-Button/Scroll'
import { Provider } from 'react-redux';
import store from './Componets/Cart/redux/store'


const App = () => {
  document.title="ShoppingExpress"
  
  return (
    <>
    <Provider store={store}>
     <Scroll/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/resigter' element={<Resigter/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/products/:id' element={<SingleProduct/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    </Provider>
    </>
  )
}



export default App;
