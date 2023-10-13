import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import './style.css'
import logo from './../../img/logo.jpg'
import i18n from './../../i18n'
import star from './../../img/icons/star.svg'

const Navbar = ({ changeLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()
  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'
  const navRef = React.useRef(null)

  React.useEffect(() => {
    if (navRef.current) {
      const navHeight = navRef.current.offsetHeight
      const navList = document.querySelector('.nav-list')
      navList.style.top = `${navHeight}px`
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="container">
        <div className="nav-top">
          <div className="logo-div">
            <NavLink to="/" className="logo">
              <img alt="VIP" src={logo} />
            </NavLink>
          </div>
          <button
            className={`menu-button ${menuOpen ? 'menu-button--rotated' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={star} alt="Link" />
          </button>
          <button
            className="lang-buttom"
            onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
          >
            {i18n.language === 'en' ? 'Français' : 'English'}
          </button>
          <div className="right-section">
            <div className="info-bar">
              <span className="span-right">
                <a href="mailto:info@votre-image-pro.ch">
                  info@votre-image-pro.ch
                </a>
              </span>
              <span className="span-right">
                <a href="tel:+41767262835">+41 76 726 28 35</a>
              </span>
              <div className="language-switcher">
                <button
                  onClick={() =>
                    changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
                  }
                >
                  {i18n.language === 'en' ? 'Français' : 'English'}
                </button>
              </div>
            </div>
            <div className="nav-row">
              <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                <li className="nav-list__item" onClick={closeMenu}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {t('About')}
                  </NavLink>
                </li>

                <li className="nav-list__item" onClick={closeMenu}>
                  <NavLink
                    to="/image-consulting"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {t('Image_consulting')}
                  </NavLink>
                </li>
                <li className="nav-list__item" onClick={closeMenu}>
                  <NavLink
                    to="/workshops-and-conferences"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {t('Workshops_and_conferences')}
                  </NavLink>
                </li>
                <li className="nav-list__item" onClick={closeMenu}>
                  <NavLink
                    to="/good-to-know"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {t('Good_to_know')}
                  </NavLink>
                </li>
                <li className="nav-list__item" onClick={closeMenu}>
                  <NavLink
                    to="/customer-reviews"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {t('Customer_reviews')}
                  </NavLink>
                </li>
                <li className="nav-list__item" onClick={closeMenu}>
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {t('Contacts')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
