import { Header } from '../../components/Header'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss';
import { CartItemsProps } from '../index';

const baseURL = process.env.SERVICE_BASEURL;

export default function Cart() {

    const [cartItems, setCartItems] = useState<CartItemsProps[] | []>([]);

    useEffect(() => {
        let cartItemsList = localStorage.getItem("@PizzAppCartItems");
        setCartItems(JSON.parse(cartItemsList) || []);
    }, [])

    return (
        <>
            <Header />

            <h1 className={styles.cartTitle}>Finalizar Pedido</h1>

            {cartItems.map((data) => {
                return (
                    <>
                        <h1>name: {data.item.name}</h1>
                        <p>price: {data.item.price}</p>
                        <p>amount: {data.amount}</p>
                        <div className={styles.ItemImageBox}>
                            <img src={`${baseURL}/files/${data.item.banner}`}></img>
                        </div>
                    </>
                )
            })}

        </>
    );
}
