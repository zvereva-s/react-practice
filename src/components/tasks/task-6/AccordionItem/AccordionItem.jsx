import styles from './accordionItem.module.css';

function AccordionItem({ title, text, onClick, isOpen}) {
    return (
        <div className={styles[`accordion-item`]}>
            <p className={styles.title} onClick={onClick}>{title}</p>
            {isOpen  && (<p>{text}</p> )}
        </div>
    )
}

export default AccordionItem;