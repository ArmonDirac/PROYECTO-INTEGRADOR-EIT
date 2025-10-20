import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import slider1Image from "@/../public/images/slider/slide1.jpg";
import slider2Image from "@/../public/images/slider/slide2.jpg";
import slider3Image from "@/../public/images/slider/slide3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/pages/home/home-slider/home-slider-carousel/home-slider-carousel.scss";
import { Text } from "@/components/texts";

const carouselItems = [
    {
        image: slider1Image,
        title: "Sueña como los robots",
        description: "Traenos tu mejor proyecto de automatización, nosotros soñaremos con vos",
    },
    {
        image: slider2Image,
        title: "Diseña el futuro",
        description: "Lo repetitivo es para las máquinas, el desafío de la creación es nuestro y pronto de los robots también.",
    },
    {
        image: slider3Image,
        title: "Trabajemos en equipo",
        description: "La colaboración entre robots y humanos está en nuesto código fuente.",
    },
];

const Carousel = () => {
    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Muestra un slide a la vez
        slidesToScroll: 1, // Desplaza un slide a la vez
        autoplay: true, // Reproducción automática
        autoplaySpeed: 3000, // Cambia cada 3 segundos
        arrows: true, // Muestra flechas de navegación
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
            <Slider {...settings}>
                {carouselItems.map((item, index) => (
                    <Box key={index} sx={{ position: "relative", textAlign: "center" }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 20,
                                left: "50%",
                                transform: "translateX(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                p: 2,
                                borderRadius: 1,
                            }}>
                            <Text variant="h3" className="home-slider-carousel__title">
                                {item.title}
                            </Text>
                            <Text variant="p" className="home-slider-carousel__description">{item.description}</Text>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;