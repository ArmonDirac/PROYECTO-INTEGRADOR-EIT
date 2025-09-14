import React from "react";
import { Container } from "@mui/material";
import Carousel from "@/pages/home/home-slider/home-slider-carousel/HomeSliderCarousel";
import "./home-slider.scss";

const HomeSlider = () => {
    return (
        <div className="home-slider">
            <Container>
                <Carousel/>
            </Container>
        </div>
    );
};

export default HomeSlider;