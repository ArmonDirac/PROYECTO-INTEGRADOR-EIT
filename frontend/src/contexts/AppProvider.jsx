import { useState } from "react";
import { useInstitution } from "@/hooks/useInstitution";
import { useProduct } from "@/hooks/useProduct";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

const AppProvider = (props) => {
    const { children } = props;

    const institutionContext = useInstitution();
    const productsContext = useProduct();
    const shoppingCartContext = useShoppingCart();
    const [ searchQuery, setSearchQuery ] = useState("");

    return (
        <AppContext.Provider
            value={{
                institutionContext,
                productsContext,
                shoppingCartContext,
                searchQuery,
                setSearchQuery,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;