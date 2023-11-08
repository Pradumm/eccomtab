import React from 'react'
import ProductCard from './ProductCard'


const ProductContainer = ({ product, heading }) => {
   
    // console.log(product, "______________pro")

    
       
    // console.log(data,"_________-categories part")


    return (
        <>
            <h1 className=''>{heading}</h1>
            <div className="product_desk">
                {product?.map((item) => {

                    return (
                        <ProductCard item={item} />

                    );
                })}
            </div>

        </>
    )
}

export default ProductContainer