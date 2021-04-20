import React from 'react';
import ProductCategory from '../product-category/product-category.comp';
import ProductTable from '../product-table/product-table.comp';
import SearchBar from '../search-bar/search-bar.comp';
import './filterable-tabla-producto.style.css';

const FilterableTablaProducto = () => {
        return (
          <div className="filterable-tabla-producto-container">
            <SearchBar/>
            <ProductTable/>
          </div>
        );
}


export default FilterableTablaProducto;