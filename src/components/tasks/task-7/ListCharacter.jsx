import { useState } from 'react';
import styles from './listCharacter.module.css';

function ListCharacter({ boys }) {
    
    const [items, setItems] = useState([...boys]);

    function removeItem(id) {
        setItems([...items.filter(el=> el.id !== id)]
        )
    }

    const elements = items.map(({ id, name }) => <li key={id} className={styles.item}><p>{name}</p><button className={styles.btn} type="button" onClick={()=>removeItem(id)}>x</button></li>)
   
    return (
        <ul className={styles.list}>
          {elements}
        </ul>
    )
}
export default ListCharacter;