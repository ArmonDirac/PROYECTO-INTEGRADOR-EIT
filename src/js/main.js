const articleSample = document.querySelector("#normalCard");
const articlesUnderPromotion = document.querySelector("#promotedCard");

import { products } from "./product-page.js";


    products.forEach((product) => {
        if (product.productPromoted && articlesUnderPromotion) {
        articlesUnderPromotion.innerHTML += 'Hola';
        }
        if (articleSample) {
        articleSample.innerHTML += 'Chau';
        }
    })

    //document.createElement
