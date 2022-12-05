import { Header } from '../../components/Header'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss';
import { CartItemsProps } from '../index';

import { CartItemContainer } from "../../components/CartItemContainer"
import { Loader } from "../../components/Loader"

import Link from 'next/link'
import { useRouter } from 'next/router'

const baseURL = process.env.SERVICE_BASEURL;

export default function Cart() {
    const router = useRouter()

    const [loader, setLoader] = useState(false);
    const [cartItems, setCartItems] = useState<CartItemsProps[] | []>([]);

    useEffect(() => {
        let cartItemsList = localStorage.getItem("@PizzAppCartItems");
        setCartItems(JSON.parse(cartItemsList) || []);
    }, [])

    function getOrderTotalAmount() {
        let totalPrice = 0;
        cartItems.map((data) => {
            totalPrice += (data.item.price * data.amount);
        });

        return totalPrice;
    }

    function handleFinishOrder(e) {
        e.preventDefault();
        setLoader(true);
        setTimeout(() => {
            localStorage.setItem("@PizzAppCartItems", JSON.stringify([]));
            router.push('/finished', undefined, { shallow: true })
        }, 1500);
    }

    return (
        <>
            <Header />

            <h1 className={styles.cartTitle}>Finalizar Pedido</h1>
            <h1 className={styles.total}>Tota: R${getOrderTotalAmount()},00</h1>
            <div className={styles.resume}>
                <Link className={styles.backToHome} href="/">
                    Voltar
                </Link>
                <button className={styles.finishOrderButton} onClick={(e) => handleFinishOrder(e)}>
                    Finalizar pedido
                </button>
            </div>

            {cartItems.map((cartItem) => {
                return (
                    <CartItemContainer cartItemData={cartItem} />
                )
            })}

            <div className={styles.BlankFooter}></div>

            {loader && <Loader />}
        </>
    );
}
