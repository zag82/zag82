import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { projectsEn, projectsRu } from '../data/projectsData';
import LangContext from '../context/langContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  const { lang } = useContext(LangContext);

  const projects = lang === 'en' ? projectsEn : projectsRu;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { pname } = useParams();
  const projectsFound = projects.filter(
    (pro) => pro.name.toLowerCase() === pname
  );
  if (projectsFound.length === 0) {
    return <Redirect to='/' />;
  }

  const pro = projectsFound[0];

  return (
    <div className='container mt-6' id='project'>
      <h1>{pro.name}</h1>
      <div className='pro-image'>
        <a href={pro.img} target='_blank' rel='noopener noreferrer'>
          <img src={pro.img} alt={pro.name} />
        </a>
        <p>{pro.description}</p>
      </div>
      {pro.overview && (
        <>
          <h3>{lang === 'en' ? 'Overview' : 'Описание'}</h3>
          <p>{pro.overview}</p>
        </>
      )}
      {pro.features && (
        <>
          <h3>{lang === 'en' ? 'Features' : 'Характеристики'}</h3>
          <ul>
            {pro.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}
      {pro.src && (
        <>
          <h3>{lang === 'en' ? 'Sources' : 'Исходный код'}</h3>
          <p>
            <a href={pro.src} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFileCode} size='lg' />{' '}
              {lang === 'en' ? 'View sources' : 'Просмотреть исходный код'}
            </a>
          </p>
        </>
      )}
      {pro.extra && (
        <>
          <h3>{pro.extra.title}</h3>
          <p>
            <a href={pro.extra.link} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInfoCircle} size='lg' /> {pro.extra.name}
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default Project;
