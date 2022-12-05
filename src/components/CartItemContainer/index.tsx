import styles from './styles.module.scss';
import { Container, Row, Col } from "react-bootstrap";
import { CartItemsProps } from '../../pages'

interface CartListItemProps {
    cartItemData: CartItemsProps;
}
const baseURL = process.env.SERVICE_BASEURL;
export function CartItemContainer({ cartItemData }: CartListItemProps) {
    return (
        <Container>
            <Row className={styles.ItemContainer}>
                <Col lg={6} sm={6} xs={6}>
                    <div className={styles.ItemImageBox}>
                        <img src={`${baseURL}/files/${cartItemData.item.banner}`}></img>
                    </div>
                </Col>
                <Col lg={6} sm={6} xs={6} className={styles.itemInfoContainer}>
                    <p className={styles.ItemTitle}>{cartItemData.item.name}</p>

                    <div className={styles.quantity}>
                        <p className={styles.ItemPrice}>Quantidade: </p>
                        <p className={styles.ItemPrice}>{cartItemData.amount}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
