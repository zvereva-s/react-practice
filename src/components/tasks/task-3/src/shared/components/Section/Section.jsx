import PropTypes from 'prop-types';
import styles from './section.module.css';

function Section({ children }) {
    return (
        <section className={styles.section}>
            {children}
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.node,
}

export default Section;