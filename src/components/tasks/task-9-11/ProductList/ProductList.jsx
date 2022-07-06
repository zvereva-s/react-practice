import { useState, useEffect } from 'react';
import { getProducts, getProductsById } from '../../../shared/services/API/products';

import ProductItem from './ProductItem';
import ProductModalContent from './ProductItem/ProductModalContent';
import Modal from '../../../shared/Modal';

import styles from './productList.module.css';

function ProductList() {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const [page, setPage] = useState(1);
    const [stateModal, setStateModal] = useState({
        showModal: false, 
        contentModal: [],
    });

    useEffect(() => {
        async function fetchProductList() {
 
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: false,
            }))
            try {
                const data = await getProducts(page);
                setState(prevState => ({
                    ...prevState,
                    items: [...prevState.items, ...data],
                    loading: false,
                }))
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error: true,
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }
        fetchProductList();
    }, [page])

    function handleClick() {
        setPage(page+1);
    }
    
    function openInfo(id) {
        const { items } = state;
        const content = items.filter(el => el.id === id);

        setStateModal(prevState => (
            {
            showModal: true,
            contentModal:content[0],
        }))
    }

    function closeModal() {
        setStateModal(prevState => ({
            ...prevState,
            showModal: false,
        }))
    }
    const { items, error, loading } = state;
    const elements = items.map(({ id, price, description, name }) => <ProductItem key={id} price={price} description={description} name={name} openInfo={()=>openInfo(id)} />)

    return (

        <div className={styles.container}>
            {stateModal.showModal && <Modal closeModal={closeModal}><ProductModalContent item={stateModal.contentModal} closeModal={closeModal} /></Modal>}
            {error && <div className={styles.box}><p>Посты не загрузились...</p></div>}
            <ul className={styles.list}>{elements}</ul>
            {loading && <div className={styles.box}><p>Идёт загрузка...</p></div>}
            {!loading && items.length >= 10 && (<div className={styles.box}>
                <button className={styles.btn} type="button" onClick={handleClick}>See more...</button>
            </div>)}
        </div>
        
    )
}

export default ProductList;




/* 
useEffect(callback, deps) принимает два аргумента:

callback - функция, внутри которой выполняется вся логика эффекта. Например, запросы на сервер, задание обработчиков событий на документ и т.п.

зависимости - массив переменных, при изменении любой из которых, будет запускаться эффект и выполняеться callback. Это может быть состояние, пропсы или любое локальное значение внутри компонента.
*/