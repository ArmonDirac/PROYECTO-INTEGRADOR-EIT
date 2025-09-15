import React, { useState, useContext } from "react";
import AppContext from "@/contexts/AppContext";
import "./product-search.scss";

const ProductSearch = () => {
    const { setSearchQuery } = useContext(AppContext);
    const [ inputValue, setInputValue ] = useState("");

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="product-search">
            <input
                type="text"
                className="product-search__input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Buscar productos..."/>
            <button
                className="product-search__button"
                onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
};

export default ProductSearch;