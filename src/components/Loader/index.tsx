import styles from './styles.module.scss';

export function Loader() {
    return (
        <div className={styles.divLoader}>
            <div className={styles.chaoticOrbit}></div>
        </div>
    )
}
