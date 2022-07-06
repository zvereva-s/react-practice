import styles from './productItem.module.css';

function ProductItem({price, description, name, id, openInfo}) {
    return (
        <li className={styles.item} onClick={()=>openInfo(id)}>
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.subtitle}>Price: <span className={styles.content}>{price}</span></p>
            <p className={styles.subtitle}>Info: <span className={styles.content}>{description}</span></p>
        </li>
    )
}

export default ProductItem;