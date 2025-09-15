import { missionTmp } from "./data/mission.tmp.js";
import { valuesTmp } from "./data/values.tmp.js";
import { visionTmp } from "./data/vision.tmp.js";

const KEY_INSTITUTION = "institution";

const initialize = () => {
    const initialData = {
        name: "Armon Dirac SBI (Sociedad de Blockchain Inter-planetaria)",
        address: "Domicilio: Av. Isaac Asimov Sección 31 #44, Nueva Argentina,Continente Norte, Planeta Marte",
        phone: "ID de Teletransporte: PMCNNA 42355 marca 26",
        email: "ventas@mercado-robotico#marte.com.ind",
        about: {
            mission: missionTmp,
            vision: visionTmp,
            values: valuesTmp,
        },
    };

    localStorage.setItem(KEY_INSTITUTION, JSON.stringify(initialData));

    return initialData;
};

const getInstitutionFromLocalStorage = () => {
    const data = localStorage.getItem(KEY_INSTITUTION);
    return JSON.parse(data) || initialize();
};

const fetchInstitution = () => {
    return new Promise((resolve) => {
        resolve(getInstitutionFromLocalStorage());
    });
};

export default {
    fetchInstitution,
};