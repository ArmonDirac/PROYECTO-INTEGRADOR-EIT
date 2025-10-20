import { ButtonPrimary } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { CardActionArea, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./home-highlighted-product-card.scss";

const HomeHighlightedProductCard = (props) => {
    const {
        product,
        isLoading,
        className,
        ...restProps
    } = props;

    const navigate = useNavigate();
    const { shoppingCartContext } = useContext(AppContext);
    const { addArticle, subtractArticle } = shoppingCartContext;

    const classes = `home-highlighted-product-card ${className ?? ""}`;

    const handleEditProduct = () => {
        navigate(`/products/${product.id}`);
    };

    const handleAddArticle = () => {
        addArticle(product.id, 1);
    };

    const handleSubtractArticle = () => {
        subtractArticle(product.id, 1);
    };

    const renderActions = () => {
        if (product.promoted) {
            return (<Text variant="p">PRODUCTO DESTACADO</Text>);
        }

        return (
            <>
                <Skeleton className="home-highlighted-product-card__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary className="home-highlighted-product-card__add" size="sm" onClick={handleAddArticle}><AddShoppingCartIcon/></ButtonPrimary>
                </Skeleton>
                <Skeleton className="home-highlighted-product-card__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary className="home-highlighted-product-card__remove" size="sm" onClick={handleSubtractArticle}><RemoveShoppingCartIcon/></ButtonPrimary>
                </Skeleton>
            </>
        );
    };

    return (
        <MuiCard className={classes} {...restProps}>
            <Skeleton className="home-highlighted-product-card__image--skeleton" isLoading={isLoading}>
                <CardActionArea>
                    <img
                        className="home-highlighted-product-card__image"
                        src={`/images/products/${product.thumbnail}`}
                        alt="Imagen del producto"
                        onClick={handleEditProduct}/>
                </CardActionArea>
            </Skeleton>

            <div className="home-highlighted-product-card__content">
                <Skeleton className="home-highlighted-product-card__name--skeleton" isLoading={isLoading}>
                    <Text className="home-highlighted-product-card__name" variant="h3">{product.name}</Text>
                </Skeleton>
                <Skeleton className="home-highlighted-product-card__description--skeleton" isLoading={isLoading}>
                    <Text className="home-highlighted-product-card__description" variant="p">{product.description}</Text>
                </Skeleton>
                <Skeleton className="home-highlighted-product-card__price--skeleton" isLoading={isLoading}>
                    <Text className="home-highlighted-product-card__price" variant="span">USD {product.price.toFixed(2)}</Text>
                </Skeleton>
            </div>

            <div className="home-highlighted-product-card__actions">
                {renderActions()}
            </div>
        </MuiCard>
    );
};

HomeHighlightedProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        promoted: PropTypes.bool.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default HomeHighlightedProductCard;