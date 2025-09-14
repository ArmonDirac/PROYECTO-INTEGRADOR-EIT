import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "@/pages/products/product-item/ProductItem";
import "./home-highlighted-products.scss";

const HomeHighlightedProducts = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    return (
        <div className="home-highlighted-products">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isLoading={isLoading}/>
            ))}
        </div>
    );
};

export default HomeHighlightedProducts;