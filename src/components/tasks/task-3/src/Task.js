import './shared/styles/style.css';
import Header from './modules/Header/Header';
import Hero from './modules/Hero/Hero.jsx';
import HeroHeader from './modules/HeroHeader/HeroHeader.jsx';

// import Container from './shared/components/Container';
// import Section from './shared/components/Section';
// import Logo from './shared/components/Logo';
// import Buttons from './shared/components/Buttons';


function Task() {
  return (
    <>
      <HeroHeader>
         <Header />
      <Hero />
    </HeroHeader>
     
    </>
  );
}

export default Task;
