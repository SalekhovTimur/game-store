import React from 'react'
import { CartItem } from '../cart-item/cart-item'
import { calcTotalPrice } from '../utils'
import './cart-menu.css'


export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>
            <span className='span__game'>Корзина:</span>
            <div className='cart-menu__games-list'>
                {items.length > 0 ? items.map(game => (
                <CartItem 
                    key={game.title} 
                    price={game.price} 
                    title={game.title} 
                    id={game.id} 
                    />
                )) 
            : 'Корзина пуста'}
            </div>
            {
                items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className='cart-menu__total-price'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <button className='button' type='primary' size='20' onClick={onClick}>
                            Оформить заказ
                        </button>
                    </div>
                    : null
            }
        </div>
    )
}
