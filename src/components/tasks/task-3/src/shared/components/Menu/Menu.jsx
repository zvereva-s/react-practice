import PropTypes from 'prop-types';
import styles from './menu.module.css';

function Menu({ menuList }) {
    const elements = menuList.map(({ id, name, link }) => <li key={id} className={styles.item}><a className={styles.link} href={link}>{name}</a></li>)
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}
export default Menu;
Menu.defaultProps = {
    menuList: [],
}
Menu.propTypes = {
    menuList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    )
}