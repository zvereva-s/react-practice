import PropTypes from 'prop-types';
import styles from './buttons.module.css';

function Buttons({ style, type, name }) {
    return (
        <button className={`${styles[style]}`} type={type}>{name}</button>
    )
}

Buttons.defaultProps = {
    style: "dark",
    type: "button", 
}
Buttons.propTypes = {
    style: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
}
export default Buttons;