import Link from 'next/link';

import { useRef, useEffect } from 'react';

import {
  App,
  Exit,
  Logo,
  Package,
  React as ReactIcon,
  Shapes,
} from '@/icons/index';

import { NavbarContainer } from '@/components/Navbar/style';

const Nobvar = () => {
  const navMenuRef = useRef(null);
  const navLinkRef = useRef([]);

  const handleToggleClick = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.add('show-menu');
    }
  };

  const handleCloseClick = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove('show-menu');
    }
  };

  useEffect(() => {
    const linkAction = () => {
      if (navMenuRef.current) {
        navMenuRef.current.classList.remove('show-menu');
      }
    };

    navLinkRef.current.forEach((n) => {
      n.addEventListener('click', linkAction);
    });

    return () => {
      navLinkRef.current.forEach((n) => {
        n.removeEventListener('click', linkAction);
      });
    };
  }, []);

  useEffect(() => {
    navLinkRef.current = Array.from(document.querySelectorAll('.nav__link'));
  }, []);

  return (
    <NavbarContainer>
      <div className="navbar" id="navbar">
        <nav className="nav container">
          <Link href="/" className="nav__logo">
            <Logo fill={'rgba(252, 41, 74, 0.99)'} size={25} />
            AWS Icon
          </Link>

          <div className="nav__menu" ref={navMenuRef} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/" className="nav__link">
                  <i className="nav__icon">
                    <Package />
                  </i>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/icons" className="nav__link">
                  <i className="nav__icon">
                    <Shapes />
                  </i>
                  Icons
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/react" className="nav__link">
                  <i className="nav__icon">
                    <ReactIcon />
                  </i>
                  React Icons
                </Link>
              </li>
            </ul>
            <button
              className="nav__close"
              onClick={handleCloseClick}
              id="nav-close"
            >
              <i className="">
                <Exit fill="rgba(252, 41, 74, 0.99)" size={25} />
              </i>
            </button>
          </div>

          <div className="nav__btns">
            <button
              className="nav__toggle"
              onClick={handleToggleClick}
              id="nav-toggle"
            >
              <i className="">
                <App />
              </i>
            </button>
          </div>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Nobvar;
