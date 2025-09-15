import { Text } from "@/components/texts";
import ProductGallery from "./product-gallery/ProductGallery";
import "./products.scss";

const Products = () => {
    return (
        <div className="products">
            <Text variant="h2">Tu impulso tiene valor aquí</Text>
            <ProductGallery />
        </div>
    );
};

export default Products;