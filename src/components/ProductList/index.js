import React from 'react'
import Index from '../Product'
import './style.css'

export default function ProductList({ products, sortingType }) {

    switch (sortingType){
        case 'title':
            sortByName(products);
            break;
        case 'price':
            sortByPrice(products);
            break;
        case 'categories':
            sortByCategory(products);
            break;
        default:
            break;
    }

    function sortByName(array) {
        array.sort(function(first, second) {
            if (first.name < second.name) return -1;
            if (first.name > second.name) return 1;
            return 0;
        });
    }

    function sortByPrice(array) {
        array.sort(function(first, second) {
            return first.price-second.price;
        });
    }

    function sortByCategory(array) {
        array.sort(function(first, second) {
            if (first.type < second.type) return -1;
            if (first.type > second.type) return 1;
            return 0;
        });
    }

    const productList = products.map (product =>
        <li key = {product.name} className="product-list__li">
            <Index product = {product}/>
        </li>
    )

    return (
        <ul>
            {productList}
        </ul>
    )
}