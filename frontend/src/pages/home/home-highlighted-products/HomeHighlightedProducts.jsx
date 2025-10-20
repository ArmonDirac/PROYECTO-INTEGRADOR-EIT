import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./home-highlighted-products.scss";
import HomeHighlightedProductCard from "../home-highlighted-product-card/HomeHighlightedProductCard";

const HomeHighlightedProducts = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;
    const highlightedProducts = products.filter((product) => product.promoted);

    return (
        <div className="home-highlighted-products">
            {highlightedProducts.map((product) => (
                <>
                    <HomeHighlightedProductCard
                        key={product.id}
                        product={product}
                        isLoading={isLoading}/>
                </>
            ))}
        </div>
    );
};

export default HomeHighlightedProducts;