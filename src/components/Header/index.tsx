import styles from './styles.module.scss'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'

interface HeaderProps {
    cartCount?: number;
    showCartIcon?: boolean
}

export function Header({ cartCount = 0, showCartIcon = false }) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/logo.svg" alt="Logo" width={190} height={60} />
                </Link>


                <nav className={styles.menuNav}>

                    {showCartIcon ?
                        <Link href="/cart">
                            {cartCount > 0 ? <div className={styles.notiCount}><div>{cartCount}</div></div> : <></>}
                            <MdShoppingCart color="#000" size={40} />
                        </Link> : <></>}
                </nav>
            </div>
        </header>
    );
}
