import React from "react";
import "./home-highlighted-paragraph.scss";
import { Text } from "@/components/texts";

const HomeHighlightedParagraph = () => {
    return (
        <div className="home-highlighted-paragraph">
            <p className="home-highlighted-paragraph__list">
                <Text variant="h3">Un robot no hará daño a un ser humano, ni por inacción permitirá que un ser humano sufra daño.</Text>
                <Text variant="h3">Un robot debe cumplir las órdenes dadas por los seres humanos, a excepción de aquellas que entren en conflicto con la primera ley.</Text>
                <Text variant="h3">Un robot debe proteger su propia existencia en la medida en que esta protección no entre en conflicto con la primera o con la segunda ley.</Text>
                <Text variant="h3">ISAAC ASIMOV</Text>
            </p>
        </div>
    );
};

export default HomeHighlightedParagraph;