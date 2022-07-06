import PropTypes from 'prop-types';
import styles from './container.module.css';

function Container({ type, children }) {
    
    return (
        <div className={`${styles.container} ${styles[type]}`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node, 
}

export default Container;