import { useState } from "react";
import styles from './products.module.css';

function Products({data}) {
    const [state, setState] = useState([...data]);
    const [selectedId, setId] = useState(null);

    function changeItem(index) {
        setId(state.filter((el, idx) => idx === index)[0].id);
    }

    const elements = state.map(({ name, id }, index) => <li key={id} className={id === selectedId ? styles.bold : '' } onClick={()=>changeItem(index)}>{name}</li>);
    return (
        <ul>
            {elements}
        </ul>
    )
}
export default Products;