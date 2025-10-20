import React, { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import ProductSearch from "../product-search/ProductSearch";
import "./product-gallery.scss";

const ProductGallery = () => {
    const { productsContext, searchQuery } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <>
            <ProductSearch />
            <div className="product-gallery">
                <ProductNewItem />
                {filteredProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isLoading={isLoading}/>
                ))}
            </div>
        </>
    );
};

export default ProductGallery;