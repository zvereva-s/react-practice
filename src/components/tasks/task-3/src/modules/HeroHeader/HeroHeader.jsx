import styles from './heroHeader.module.css';

function HeroHeader({children}) {
    return (
        <div className={styles.heroHeader}>
            {children}
        </div>
    )
}

export default HeroHeader;