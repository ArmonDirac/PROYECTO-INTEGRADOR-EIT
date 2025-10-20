import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import visionImage from "@/../public/images/about/vision.jpg";
import { useContext } from "react";
import "./vision.scss";

const Vision = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Visión</Text>
            <div>
                <img className="vision__image" src={visionImage} alt="Imagen de la visión de la empresa"/>
                <Text className="vision__description" variant="p">{institution.about.vision}</Text>
            </div>
        </section>
    );
};

export default Vision;