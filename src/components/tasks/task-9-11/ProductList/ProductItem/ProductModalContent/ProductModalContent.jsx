import styles from './productModalContent.module.css';

function ProductModalContent({ item, closeModal }) {
    const { price, description, name } = item;
    return (
        <div className={styles.box}>
            <button className={styles.btn} type='button' onClick={closeModal}></button>
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.subtitle}>Price: <span className={styles.content}>{price}</span></p>
            <p className={styles.subtitle}>Info: <span className={styles.content}>{description}</span></p>
        </div>
    )
}

export default ProductModalContent;