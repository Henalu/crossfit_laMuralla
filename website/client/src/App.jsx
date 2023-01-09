import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
// Styles
import './styles/styles.css'
// Components
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Router from './router/Router';
import MobileNavbar from './components/mobile/MobileNavbar';
import MobileMenu from './components/mobile/MobileMenu';
// Responsive
import { useMediaQuery } from 'react-responsive'
// Redux
import { useSelector } from 'react-redux'

function App() {

  const mobileMenu = useSelector(state => state.mobileMenu)

  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  useEffect(() => {
    if(isMobileDevice){
      window.scrollTo(0, 0);
    }
  }, [isMobileDevice])

  useEffect(() => {
    if(isLaptop){
      window.scrollTo(0, 0);
    }
  }, [isLaptop])

  return (
    <BrowserRouter>
      {isMobileDevice &&
        (<div className='mobile'>
          <Header />
          <MobileNavbar />
          <div className='content'>
            {mobileMenu.active && <MobileMenu />}
            <Router />
          </div>
          <Footer />
        </div>)
      }

      {isLaptop &&
        (<div className='app'>
          <Header />
          <Navbar />
          <div className='content'>
            <Router />
          </div>
          <Footer />
        </div>)
      }

    </BrowserRouter>
  );
}

export default App;
