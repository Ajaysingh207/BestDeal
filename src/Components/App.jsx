import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import About from './About'
import Shop from './Shop'
import Cart from './Cart'
import Checkout from './Checkout'
import SingleProduct from './SingleProduct'
import Contact from './Contact'

import AdminHome from './Admin/AdminHome'
import AdminMaincategory from './Admin/Maincategory/AdminMaincategory'
import AdminAddMaincategory from './Admin/Maincategory/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/Maincategory/AdminUpdateMaincategory'

import AdminSubcategory from './Admin/Subcategory/AdminSubcategory'
import AdminAddSubcategory from './Admin/Subcategory/AdminAddSubcategory'
import AdminUpdateSubcategory from './Admin/Subcategory/AdminUpdateSubcategory'

import AdminBrand from './Admin/Brand/AdminBrand'
import AdminAddBrand from './Admin/Brand/AdminAddBrand'
import AdminUpdateBrand from './Admin/Brand/AdminUpdateBrand'

import AdminProduct from './Admin/Product/AdminProduct'
import AdminAddProduct from './Admin/Product/AdminAddProduct'
import AdminUpdateProduct from './Admin/Product/AdminUpdateProduct'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Confirmation from "./confirmation"

export default function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/shop/:mc/:sc/:br' element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/single-product/:id' element={<SingleProduct/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/update-profile' element={<UpdateProfile/>}/>
                <Route path='/confirmation' element={<Confirmation/>}/>
               
               
                

                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='/admin-maincategory' element={<AdminMaincategory/>}/>
                <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>}/>
                <Route path='/admin-update-maincategory/:id' element={<AdminUpdateMaincategory/>}/>
                
                <Route path='/admin-subcategory' element={<AdminSubcategory/>}/>
                <Route path='/admin-add-subcategory' element={<AdminAddSubcategory/>}/>
                <Route path='/admin-update-subcategory/:id' element={<AdminUpdateSubcategory/>}/>

                <Route path='/admin-brand' element={<AdminBrand/>}/>
                <Route path='/admin-add-brand' element={<AdminAddBrand/>}/>
                <Route path='/admin-update-brand/:id' element={<AdminUpdateBrand/>}/>

                <Route path='/admin-product' element={<AdminProduct/>}/>
                <Route path='/admin-add-product' element={<AdminAddProduct/>}/>
                <Route path='/admin-update-product/:id' element={<AdminUpdateProduct/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}
