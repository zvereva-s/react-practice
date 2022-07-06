import PropTypes from 'prop-types';
import styles from './logo.module.css';

function Logo({name}) {
    return (
        <p className={styles.logo}>Landie</p>
    )
}

export default Logo;
Logo.defaultProps = {
name: "Logo"
}
Logo.propTypes = {
    name: PropTypes.string.isRequired,
}