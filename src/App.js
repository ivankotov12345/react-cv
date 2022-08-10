import Main from './pages/main/Main';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Activities from './pages/activities/Activities';
import Contacts from './pages/contacts/Contacts';
import Navigation820 from './components/navigation/width820px/Navigation820';
import Navigation819 from './components/navigation/width819px/Navigation819';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import stylesApp from './AppStyles.jsx'
import Particle from './components/Particle';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

function App() {

  const [menuActive, setMenuActive] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 820px)'
  })
  const isLaptopOrMobile = useMediaQuery({
    query: '(max-width: 819px)'
  })

  const navigate = useNavigate();
  const location = useLocation();

  const linkArr = ['/', '/about', '/skills', '/activities', '/contacts']


  const goForward = () => {   

    const curr = linkArr.findIndex(item => item === location.pathname);

    if(curr === linkArr.length -1) {
      navigate(linkArr[0]);
    } else {
      navigate(linkArr[curr+1]);
    }
  }
  const goBack = () => {   

    const curr = linkArr.findIndex(item => item === location.pathname);

    if(curr === 0) {
      navigate(linkArr[linkArr.length -1]);
    } else {
      navigate(linkArr[curr-1]);
    }
  }

  return (
    <div className={css(stylesApp.App)} onClick={() => setMenuActive(false)}>
    <Particle />
      <header className={css(stylesApp.container)}>
        <div className={css(stylesApp.innerContainer)}>

          <h1 className={css(stylesApp.title)}>
            <span className={css(stylesApp.span)}>CV</span>
            CV
            <span className={css(stylesApp.span)}>CV</span>
          </h1>
          {isDesktopOrLaptop && <Navigation820 />}
          {isLaptopOrMobile && <Navigation819 active={menuActive} setActive={setMenuActive} />}
        </div>


      </header>
      <Routes>
        <Route path='/' element = {<Main />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/skills' element = {<Skills />}/>
        <Route path='/activities' element = {<Activities />}/>
        <Route path='/contacts' element = {<Contacts />}/>
      </Routes>
      
      <footer className={css(stylesApp.containerFooter)}>
        <div className={css(stylesApp.buttonContainer)}>
        <button onClick={goBack} className={css(stylesApp.buttonLeft)}>
        <span className={css(stylesApp.arrowButton, stylesApp.arrowButtonLeft)}>⮜</span>
        <span className={css(stylesApp.arrowButton, stylesApp.arrowButtonLeft)}>⮜</span>
        <span className={css(stylesApp.arrowButton, stylesApp.arrowButtonLeft)}>⮜</span>
        </button>
        <button onClick={goForward} className={css(stylesApp.buttonRight)}>
        <span className={css(stylesApp.arrowButton)}>⮞</span>
        <span className={css(stylesApp.arrowButton)}>⮞</span>
        <span className={css(stylesApp.arrowButton)}>⮞</span>
        </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
