import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "@/pages/products/product-item/ProductItem";
import "./home-highlighted-products.scss";

const HomeHighlightedProducts = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;
    const highlightedProducts = products.filter((product) => product.promoted);

    return (
        <div className="home-highlighted-products">
            {highlightedProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isLoading={isLoading}/>
            ))}
        </div>
    );
};

export default HomeHighlightedProducts;