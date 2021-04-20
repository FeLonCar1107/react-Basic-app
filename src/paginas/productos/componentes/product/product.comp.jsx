import React from 'react';
import './product.style.css';

const Product = () => {
        return (
          <div className="product-container">
              Football $49.99
            <div className="product2-container">
               Baseball $9.99 
                <div className="product3-container">
                   Basketball $29.99 
                   <div className="product4-container">
                      iPod touch $99.99 
                      <div className="product5-container">
                         iPhone 5 $399.99 
                         <div className="product6-container">
                            Nexus 7 $199.99 
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        );
}


export default Product;