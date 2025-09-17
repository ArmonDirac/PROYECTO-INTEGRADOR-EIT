import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import "./shopping-cart.scss";
import { ButtonPrimary } from "@/components/buttons";

const ShoppingCart = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart, purchaseCart, clearCart } = shoppingCartContext;

    const handlePurchase = async () => {
        const result = await purchaseCart();
        alert(result.message);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>

            <Table>
                <TableHead>
                    <TableRow className="table__head">
                        <TableCell align="left">Producto</TableCell>
                        <TableCell align="right">Cant.</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Importe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart.articles?.map((article) => (
                        <TableRow key={article.id} className="table__body">
                            <TableCell align="left">{article.name}</TableCell>
                            <TableCell align="right">{article.quantity}</TableCell>
                            <TableCell align="right">${article.price?.toFixed(2)}</TableCell>
                            <TableCell align="right">${article.amount?.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="table__footer">
                <Text className="table__total" variant="p">
                    Total: ${shoppingCart.totalAmount?.toFixed(2)}
                </Text>
            </div>

            <div className="shopping-cart__actions">
                <ButtonPrimary size="md" onClick={handlePurchase}>
                    Comprar
                </ButtonPrimary>
                <ButtonPrimary size="md" onClick={handleClearCart}>
                    Vaciar Carrito
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default ShoppingCart;