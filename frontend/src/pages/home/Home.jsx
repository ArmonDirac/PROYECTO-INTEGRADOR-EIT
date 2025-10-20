import { Text } from "@/components/texts";
import "./home.scss";
import HomeSlider from "./home-slider/HomeSlider";
import HomeHighlightedParagraph from "./home-highlighted-paragraph/HomeHighlightedParagraph";
import HomeHighlightedProducts from "./home-highlighted-products/HomeHighlightedProducts";

const Home = () => {
    return (
        <div className="home">
            <Text className="home__title" variant="h2">Bienvenidos a Armon Dirac</Text>
            <HomeSlider/>
            <HomeHighlightedParagraph/>
            <HomeHighlightedProducts/>

        </div>
    );
};

export default Home;