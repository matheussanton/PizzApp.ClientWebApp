import styles from './styles.module.scss';

import { Container, Row, Col } from "react-bootstrap";

import { ItemProps as ItemPropsType } from '../../pages'

interface ItemContainerProps {
    itemData: ItemPropsType;
    addItemToCart: (item: ItemPropsType) => void;
}
const baseURL = process.env.SERVICE_BASEURL;
export function ItemContainer({ addItemToCart, itemData }: ItemContainerProps) {
    return (
        <Col lg={4} sm={6} xs={6}>
            <div className={styles.ItemContainer}>
                <p className={styles.ItemTitle}>{itemData.name}</p>
                <div className={styles.ItemImageBox}>
                    <img src={`${baseURL}/files/${itemData.banner}`}></img>
                </div>

                <div className={styles.Footer}>
                    <p className={styles.ItemPrice}>R$ {itemData.price},00</p>
                    <div onClick={() => addItemToCart(itemData)}
                        className={styles.AddBtn}>
                        <p>+</p>
                    </div>
                </div>
            </div>
        </Col>
    );
}
