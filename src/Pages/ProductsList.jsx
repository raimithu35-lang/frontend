import React from 'react';
import { Link } from 'react-router-dom';
import products from '../api/api';
import './Productslist.css';

function ProductsList({ List }) {

    const filteredProducts = List
        ? products.filter(
            (product) => product.category === List
        )
        : products;

    return (
        <div className="products-page">

            {/* Header */}
            <div className="products-header">

                <h1>
                    {List
                        ? `${List.charAt(0).toUpperCase()}${List.slice(1)} Products`
                        : 'Product List'}
                </h1>

                <p>
                    Explore our latest products
                </p>

            </div>

            {/* Products */}
            <div className="products-container">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (

                        <div
                            className="product-card"
                            key={product.id}
                        >

                            {/* Product Image */}
                            <div className="product-image">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                            </div>

                            {/* Product Information */}
                            <div className="product-info">

                                <h2>
                                    {product.name}
                                </h2>

                                <p className="product-category">
                                    {product.category}
                                </p>

                                <p className="product-price">
                                    ${product.price}
                                </p>

                                <Link
                                    to={`/product/${product.id}`}
                                    className="view-product"
                                >
                                    View Product
                                </Link>

                            </div>

                        </div>

                    ))

                ) : (

                    <p className="no-products">
                        No products found.
                    </p>

                )}

            </div>

        </div>
    );
}

export default ProductsList;