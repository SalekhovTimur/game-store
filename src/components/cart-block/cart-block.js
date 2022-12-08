import React, { useCallback, useState } from 'react'
import {BsCart4} from 'react-icons/bs'
import './cart-block.css'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../utils'
import { CartMenu } from '../cart-menu'
import { ItemsInCart } from '../items-in-cart/items-in-cart'
import { useNavigate } from 'react-router-dom'


export default function CartBlock() {
  const [isCatMenuVisible, setIsCatMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice (items);
  const navigate = useNavigate ();

  const handleClick = useCallback ( () => {
    setIsCatMenuVisible(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div className='cart-block'>
        <ItemsInCart quantity={items.length}/>
        <BsCart4 size={25} className="cart-block_icon" onClick={() => setIsCatMenuVisible (!isCatMenuVisible)}/>
       {totalPrice > 0 ? <span className='cart-block_total-price'>{totalPrice} руб.</span> : null}
        {isCatMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  )
}
