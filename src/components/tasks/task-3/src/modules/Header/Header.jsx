import Container from '../../shared/components/Container/Container';
import Logo from '../../shared/components/Logo/Logo';
import Buttons from '../../shared/components/Buttons/Buttons';
import Menu from '../../shared/components/Menu/Menu';




import styles from "./header.module.css";
import menuList from '../../data/shared/components/Menu/menuList.json';

function Header({ children }) {
  return (
    <header className={styles.header}>
        <Container type="header">
            <nav>
              <Menu menuList={menuList} />
            </nav>
            <Logo name="Landie" />
        <Buttons style="dark" type="button" name="Buy Now" />
        </Container>
      {children}
    </header>
  );
}

export default Header;
