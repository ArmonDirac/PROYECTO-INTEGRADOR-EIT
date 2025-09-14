import AppContext from "@/contexts/AppContext";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialValues } from "./product-form.initial-value.js";
import { validationSchema } from "./product-form.validation-schema.js";

const useProductForm = (idProduct) => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const { productsContext } = useContext(AppContext);
    const { updateProduct, createProduct, fetchProducts, fetchProductById } = productsContext;
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values) => {
            try {
                if (idProduct) {
                    await updateProduct(idProduct, values);
                } else {
                    await createProduct(values);
                }
                setIsSubmitted(true);
                await fetchProducts(); // Actualiza la lista de productos
            } catch (error) {
                console.error("Error al guardar el producto:", error);
            }
        },
    });

    const isSubmitDisabled = () => {
        return (
            isSubmitted ||
      !formik.values.name ||
      formik.values.price <= 0 ||
      formik.values.stock < 0 ||
      !formik.values.thumbnail ||
      !formik.isValid
        );
    };

    const close = () => {
        formik.resetForm();
        setIsSubmitted(false);
        navigate("/products");
    };

    const cancel = () => {
        formik.resetForm();
        navigate("/products");
    };

    const loadProduct = async (idProduct) => {
        try {
            const product = await fetchProductById(idProduct);
            formik.setValues({
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock,
                thumbnail: product.thumbnail,
            });
        } catch (error) {
            console.error("Error al cargar el producto:", error);
        }
    };

    useEffect(() => {
        if (idProduct) {
            loadProduct(idProduct);
        }
    }, [idProduct]);

    return {
        formik,
        isSubmitted,
        isSubmitDisabled,
        cancel,
        close,
    };
};

export default useProductForm;