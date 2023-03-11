import React from 'react'
import './Footer.scss';
import payment from "../../assets/img/payment.png";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, beatae tempore! Ipsum voluptatum impedit exercitationem. Veniam quibusdam voluptatum provident dolores soluta, debitis sit mollitia saepe beatae? A cupiditate animi beatae?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, natus consequatur maxime autem quis est optio ducimus voluptatibus animi velit, magni perferendis eaque molestias, atque consectetur odit ab doloremque? Sapiente.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Shopspree</span>
          <span className='copyright'> © Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src={payment} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer