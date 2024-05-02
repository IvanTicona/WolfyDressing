/* eslint-disable no-unused-vars */

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, 
  Cart, 
  Checkout, 
  Confirmation, 
  Contact, 
  Offers, 
  Product, 
  Search, 
  Tracking 
} from './pages'
import { NavBarUI } from './components'

function App() {

  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Wolfy Dressing Website</h1> */}
      <NavBarUI />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/offers' element={<Offers/>} />
        <Route path='/tracking' element={<Tracking/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>

    </>
  )
}

export default App
