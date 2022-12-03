import styles from './styles.module.scss'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'

export function Header({ cartCount }) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/logo.svg" alt="Logo" width={190} height={60} />
                </Link>

                {/* <h1>{user?.name}</h1> */}

                <nav className={styles.menuNav}>

                    {/* COLOCAR BARRA DE PESQUISA */}
                    <Link href="/cart">
                        {cartCount > 0 ? <div className={styles.notiCount}><div>{cartCount}</div></div> : <></>}
                        <MdShoppingCart color="#000" size={40} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
