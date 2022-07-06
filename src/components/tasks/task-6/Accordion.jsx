import { useState } from 'react';
import AccordionItem from './AccordionItem/AccordionItem';
import styles from './accordion.module.css';
import { func } from 'prop-types';


function Accordion({items}) {
    const [state, setState] = useState({
        isOpen: false,
        openList: [],
    });

    function toggleAnswers(newValue) {
        const allId = items.map(el => el.id);
        setState(prevState => ({
        ...prevState,
        openList: newValue ? allId : [],
        }))
    }
    function toggleAnswer(id) {
        setState(prevState => {
            const { openList } = prevState;
            const isPresent = openList.includes(id);
            if (isPresent) {
                return { ...prevState, openList: openList.filter(el => el !== id) };
            }
            return { ...prevState, openList: [...openList, id] };
        });
    }

    const { isOpen, openList } = state;
    const elements = items.map(el => <AccordionItem key={el.id} title={el.title} text={el.text} isOpen={openList.includes(el.id)}  onClick={()=>toggleAnswer(el.id)} />);

    return (
        <div className={styles.container}>
            <div className={styles.accordion}>
                <h1>FAQ</h1>
            <button type="button" className={styles.btn} id="expand-all"  onClick={()=>toggleAnswers(true)}>Expand All</button>
            <button type="button" className={styles.btn} id="collapse-all" onClick={()=>toggleAnswers(false)}>Collapse All</button>
            {elements}
            </div>
        </div>
        
    )
}


export default Accordion;

/*
 - expand all  - открываем все. Все items имеют isOpen: true --> state
 - collapse all - закрываем все. Все items имеют isOpen: false --> state

 - isOpen - props передаем в Item Component рисуем через условие <p>

 - есть еще состояние отфильтрованных id. Через клик передаем элемент и его состояние делаем isOpenAnswer true

 */