/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './cartArea.scss';
import cart from '../../img/shopping-cart.png';
import ButtonDefault from '../ButtonDefault';
import CartItem from '../CartItem';

export default function CartArea({
content, plus, minus
}) {

const arrayPrices = content.map(product=>(parseFloat(product.price.slice(3).replace(',','.')))*product.quantity)
const totalPrice = arrayPrices.reduce((total, price) => total+price , 0)


	return (
		<div className="cart-container">
			<header>
			<div className="title-card">
				<img
					src={cart}
					className="margin-left-1 margin-bottom-0"
					alt="shopping-cart"
				/>
				<h4 className="margin-left-1 uppercase"> Carrinho </h4>
				</div>
				<div className="subtitle-cart">
				
					<h5 className="item-title">Item</h5>
					<h5 className="qt-title">Qtd.</h5>
					<h5 className="price-title">Preço</h5>

				</div>
				
			</header>
			<div className="added-items-container">
			{/* eslint-disable-next-line */}
			{content.map(product=>
             < CartItem name={product.name} price={product.price} qty={product.quantity} plus={plus} minus={minus}/>)}
			</div>


			 <div className="total-area">
				
				<div className="total">
					<p className="margin-left-1">Total</p>
					<p className="margin-right-1">R$ {totalPrice},00</p>
				</div>
				<div className="cart-buttons-wrapper">
					<ButtonDefault
						className="btn-cart btn-cart-cancel btn-default margin-left-1 uppercase"
					>
						Cancelar
					</ButtonDefault>

					<ButtonDefault
						className="btn cart btn-cart-confirm btn-default margin-right-1 uppercase"
					>
						Confirmar
					</ButtonDefault>
				</div>
			</div>  
		</div>
	);
}
