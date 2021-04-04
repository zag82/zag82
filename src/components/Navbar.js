import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LangContext from '../context/langContext';
import flagRu from '../images/flag-ru.png';
import flagEn from '../images/flag-us.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { lang, toggleLang } = useContext(LangContext);

  const flag = lang === 'en' ? flagEn : flagRu;

  const { pathname } = useLocation();

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-group'>
          {pathname.startsWith('/project/') && (
            <ul className='nav-group-left'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <FontAwesomeIcon icon={faArrowLeft} size='lg' />{' '}
                  {lang === 'en' ? 'Back' : 'Назад'}
                </Link>
              </li>
            </ul>
          )}
          {!pathname.startsWith('/project/') && (
            <ul className='nav-group-right'>
              <li className='nav-item'>
                <a className='nav-link' href='#home'>
                  {lang === 'en' ? 'Home' : 'Начало'}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  {lang === 'en' ? 'About' : 'Обо мне'}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#projects'>
                  {lang === 'en' ? 'Projects' : 'Проекты'}
                </a>
              </li>
            </ul>
          )}
          <ul>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#!'
                role='button'
                onClick={(e) => {
                  e.preventDefault();
                  toggleLang();
                }}
              >
                <img src={flag} alt={lang} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
