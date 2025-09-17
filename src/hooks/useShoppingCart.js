import { useEffect, useState } from "react";
import { useProduct } from "./useProduct";

const KEY_SHOPPING_CART = "shopping-cart";
const KEY_PRODUCTS = "products";

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState({});
    const { fetchProductById } = useProduct();

    const createShoppingCartSchema = (articles = []) => {
        return {
            articles,
            totalQuantity: articles.reduce((acc, item) => acc + item.quantity, 0),
            totalAmount: articles.reduce((acc, item) => acc + item.amount, 0),
        };
    };

    const createArticleSchema = (id, name, quantity, stock, price) => {
        if (quantity > stock) {
            quantity = stock;
        }

        return {
            id,
            name,
            quantity,
            price,
            amount: quantity * price,
        };
    };

    const getShoppingCart = () => {
        let data = JSON.parse(localStorage.getItem(KEY_SHOPPING_CART));

        if (!data) {
            data = createShoppingCartSchema();
            localStorage.setItem(KEY_SHOPPING_CART, JSON.stringify(data));
        }

        setShoppingCart(data);
    };

    const addArticle = async (idProduct, quantity) => {
        const product = await fetchProductById(idProduct);

        const articles = shoppingCart.articles || [];
        const index = articles.findIndex((item) => item.id === product.id);

        if (index >= 0) {
            const article = articles[index];
            quantity = article.quantity + quantity;
            articles[index] = createArticleSchema(product.id, product.name, quantity, product.stock, product.price);
        } else {
            articles.push(createArticleSchema(product.id, product.name, quantity, product.stock, product.price));
        }

        const data = createShoppingCartSchema(articles);
        localStorage.setItem(KEY_SHOPPING_CART, JSON.stringify(data));
        setShoppingCart(data);
    };

    const subtractArticle = async (idProduct, quantity) => {
        const product = await fetchProductById(idProduct);

        const articles = shoppingCart.articles || [];
        const index = articles.findIndex((item) => item.id === product.id);

        if (index >= 0) {
            const article = articles[index];
            quantity = article.quantity - quantity;
            articles[index] = createArticleSchema(product.id, product.name, quantity, product.stock, product.price);

            if (quantity <= 0) {
                articles.splice(index, 1);
            }

            const data = createShoppingCartSchema(articles);
            localStorage.setItem(KEY_SHOPPING_CART, JSON.stringify(data));
            setShoppingCart(data);
        }
    };

    const purchaseCart = async () => {
        const products = JSON.parse(localStorage.getItem(KEY_PRODUCTS)) || [];
        const articles = shoppingCart.articles || [];

        for (const article of articles) {
            const product = products.find((p) => p.id === article.id);
            if (!product || product.stock < article.quantity) {
                return {
                    success: false,
                    message: "Hay productos con stock insuficiente",
                };
            }
        }

        const updatedProducts = products.map((product) => {
            const article = articles.find((a) => a.id === product.id);
            if (article) {
                return { ...product, stock: product.stock - article.quantity };
            }
            return product;
        });

        localStorage.setItem(KEY_PRODUCTS, JSON.stringify(updatedProducts));

        const emptyCart = createShoppingCartSchema([]);
        localStorage.setItem(KEY_SHOPPING_CART, JSON.stringify(emptyCart));
        setShoppingCart(emptyCart);

        return {
            success: true,
            message: "¡Compra realizada con éxito!",
        };
    };

    const clearCart = () => {
        const emptyCart = createShoppingCartSchema([]);
        localStorage.setItem(KEY_SHOPPING_CART, JSON.stringify(emptyCart));
        setShoppingCart(emptyCart);
    };

    useEffect(() => {
        getShoppingCart();
    }, []);

    return {
        shoppingCart,
        addArticle,
        subtractArticle,
        purchaseCart,
        clearCart,
    };
};