import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import CartBlock from '../cart-block/cart-block'
import LogoHeader from '../logo-header/logo-header'

export default function Header() {
  return (
    <div className='header'>
        <div className='wrapper'>
            <LogoHeader/>
            <Link to={"/"} className="header_store-title">
            Game Store
            </Link>
        </div>
        <div className='wrapper header_card-btn-wrapper'>
            <CartBlock/>
        </div>
    </div>
  )
}

