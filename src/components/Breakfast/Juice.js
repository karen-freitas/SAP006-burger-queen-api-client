import React from 'react';
import './breakfast.scss';

import ProductArea from '../ProductArea';
import suco from '../../img/juice.png';
import ButtonDefault from '../ButtonDefault';

export default function Juice() {
	return (
        <div className="menu-wrap">
            <div className="products-row">
                <ProductArea
                    inputId="breakfast"
                    inputName="breakfast"
                    inputValue="Suco de fruta natural"
                    // inputOnChange={}
                    productImg={suco}
                    productImgAlt="juice"
                    productName="Suco de fruta natural"
                    productPrice="R$ 7,00"
                />      
            </div>

            <ButtonDefault className="btn-default btn-add-item"> 
                ADICIONAR ITEM 
            </ButtonDefault>
        </div>
	);
}