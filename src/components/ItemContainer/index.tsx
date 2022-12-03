import styles from './styles.module.scss';

import { Container, Row, Col } from "react-bootstrap";

export function ItemContainer() {
    return (
        <Col lg={4} sm={6} xs={6}>
            <div className={styles.ItemContainer}>
                <p className={styles.ItemTitle}>TITULO ITEM</p>
                <div className={styles.ItemImageBox}>
                    <img src='/images/pizza1.webp'></img>
                </div>

                <div className={styles.Footer}>
                    <p className={styles.ItemPrice}>R$ 10,00</p>
                    <div className={styles.AddBtn}><p>+</p></div>
                </div>
            </div>
        </Col>
    );
}
