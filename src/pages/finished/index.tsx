import styles from './styles.module.scss';
import Link from 'next/link'

export default function Finished() {
    return (
        <div className={styles.finishedDiv}>
            <h1 className={styles.finishOrderTile}>Sucesso!</h1>
            <div style={{ width: '50%' }}>
                <h1 className={styles.finishOrderSubTile}>Seu pedido já esta sendo preparado.
                    Obrigado e bom apetite.</h1>
            </div>

            <Link href="/" className={styles.backToMenuLink}>Voltar ao menu</Link>
        </div>
    )
}
