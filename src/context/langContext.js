import React, { useState, useEffect, createContext } from 'react';

// context for language
const langInitialValue = 'en';
const LangContext = createContext();
export default LangContext;

// context provider
const LangProvider = (props) => {
  const [lang, setLang] = useState(langInitialValue);

  // getData from localStorage
  useEffect(() => {
    let language = localStorage.getItem('lang');
    if (language === null || (language !== 'en' && language !== 'ru')) {
      language = 'en';
      localStorage.setItem('lang', language);
    }

    setLang(language);
  }, []);

  const toggleLang = () => {
    const language = lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', language);
    setLang(language);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};
export { LangProvider };
