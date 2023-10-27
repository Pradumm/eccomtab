import React from 'react'
import ProductCard from './ProductCard'
const ProductContainer = ({ product, heading }) => {

    // console.log(product, "______________pro")

    return (
        <>
            <h1 className=''>{heading}</h1>
            <div className="product_desk">
                {product?.map((item) => {
                    // console.log(item, "________-");
                    return (
                        <ProductCard item={item} />
                    );
                })}
            </div>

        </>
    )
}

export default ProductContainer