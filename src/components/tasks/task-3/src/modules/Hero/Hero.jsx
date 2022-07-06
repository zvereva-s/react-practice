import Buttons from "../../shared/components/Buttons";
import Container from "../../shared/components/Container";
import styles from './hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <Container >
            <h1 className={styles.title}>Introduce Your Product Quickly & Effectively</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <div className={styles.btns}>
                <Buttons style="dark" name="Purchase UI Kit" />
                <Buttons style="light" name="Learn More" />
            </div>
            </Container>
        </section>)
}

export default Hero;