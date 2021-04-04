import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsEn, projectsRu } from '../data/projectsData';
import LangContext from '../context/langContext';

import me from '../images/me.jpg';

const Home = () => {
  const { lang } = useContext(LangContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = lang === 'en' ? projectsEn : projectsRu;

  return (
    <div>
      <section id='home'>
        <h1>{lang === 'en' ? 'Andrey' : 'Андрей'} = new Developer();</h1>
      </section>
      <section id='about'>
        <div className='container'>
          <div className='about-card'>
            <div className='about-img'>
              <img src={me} alt='profile' />
              <div>
                {lang === 'en' ? 'Andrey' : 'Андрей'}
                <br />
                {lang === 'en' ? 'Zhdanov' : 'Жданов'}
              </div>
            </div>
            {lang === 'en' && (
              <div className='about-context'>
                <h3>About me</h3>
                <p>I am application developer for web and desktop.</p>
                <p>
                  I prefer healthy life full of sport activities without smoking
                  and alcohol.
                </p>
                <p>
                  My preference in life is to be honest with people and myself.
                </p>
                <p className='about-badges'>
                  <span>#coding</span> <span>#running</span>{' '}
                  <span>#cycling</span> <span>#work-with-wood</span>{' '}
                  <span>#electronics</span> <span>#gardening</span>
                </p>
              </div>
            )}
            {lang !== 'en' && (
              <div className='about-context'>
                <h3>Обо мне</h3>
                <p>Я разработчик настольных и интернет приложений.</p>
                <p>
                  Веду здоровый образ жизни, занимаюсь спортом, не приемлю
                  курение и алкоголь.
                </p>
                <p>Ценю в людях честность по отношению к окружающим и себе.</p>
                <p className='about-badges'>
                  <span>#программирование</span> <span>#бег</span>{' '}
                  <span>#велосипед</span> <span>#столярка</span>{' '}
                  <span>#электроника</span> <span>#садоводство</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id='projects' className='container'>
        <h3>{lang === 'en' ? 'My projects' : 'Мои проекты'}</h3>
        <div className='row'>
          {projects.map((pro, index) => (
            <div key={index} className='pro-item'>
              <Link to={`/project/${pro.name.toLowerCase()}`}>
                <img src={pro.img} alt={pro.name} />
              </Link>
              <Link to={`/project/${pro.name.toLowerCase()}`}>
                {pro.name} - {pro.description}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
