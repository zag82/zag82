import React, { useContext } from 'react';
import LangContext from '../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { lang } = useContext(LangContext);

  return (
    <footer>
      <div className='container'>
        <div className='footer-row'>
          <div className='footer-block'>
            <h5>{lang === 'en' ? 'Contacts' : 'Контакты'}</h5>
            <ul>
              <li>
                <a
                  href={
                    lang === 'en'
                      ? 'https://t.me/zag82'
                      : 'tg://resolve?domain=zag82'
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faTelegram} size='lg' /> Telegram
                </a>
              </li>
              <li>
                <a
                  href='https://vk.com/id303928'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faVk} size='lg' /> VK
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-block'>
            <h5>{lang === 'en' ? 'Work' : 'Работа'}</h5>
            <ul>
              <li>
                <a
                  href='https://github.com/zag82'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faGithub} size='lg' /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={
                    lang === 'en'
                      ? '/assets/RESUME_en.MD'
                      : '/assets/RESUME_ru.MD'
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faFile} size='lg' />{' '}
                  {lang === 'en' ? 'Resume' : 'Резюме'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          {lang === 'en' ? 'Andrey Zhdanov' : 'Андрей Жданов'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
