import { useState, useEffect } from 'react';
import { getProducts, addProduct, deleteProduct } from '../../shared/services/API/products';
import Form from './Form';
import List from './List';

import styles from './goodsList.module.css';

function GoodsList() {
    const [state, setState] = useState([]);

    function addGood(item) {
        setState(prevState => ([...prevState, item]))
    }

    return (<div>
        <Form onSubmit={addGood} />
        <List />
    </div>)
}

export default GoodsList;
