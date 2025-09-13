import { Text } from "@/components/texts";
import "./home.scss";
import HomeSlider from "./home-slider/HomeSlider";
import HomeHighlightedParagraph from "./home-highlighted-paragraph/HomeHighlightedParagraph";
import HomeHighlightedProducts from "./home-highlighted-products/HomeHighlightedProducts";
import HomeHighlightedProductCard from "./home-highlighted-product-card/HomeHighlightedProductCard";

const Home = () => {
    return (
        <div className="home">
            <Text variant="h2">Bienvenidos a Armon Dirac</Text>
            <HomeHighlightedParagraph/>
            <HomeSlider/>
            <HomeHighlightedProducts/>
            <HomeHighlightedProductCard/>
        </div>
    );
};

export default Home;