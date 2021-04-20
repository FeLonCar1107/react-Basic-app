import React from 'react';
import ProductCategory from '../product-category/product-category.comp';
import Product from '../product/product.comp';
import './product-table.style.css';

const ProductTable = () => {
        return (
          <div className="product-table-container">
              <strong> Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price</strong>
              <ProductCategory/>
              <Product/>
          </div>
        );
}


export default ProductTable;