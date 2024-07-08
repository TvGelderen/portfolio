import React from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '../context/AppContext'

const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();

  const router = useRouter();

  const toggleLanguage = () => {
    switch (language)
    {
      case 'en':
        localStorage.setItem("language", "nl");
        setLanguage('nl');
        router.push('/');
        break;
      case 'nl':
        localStorage.setItem("language", "en");
        setLanguage('en');
        router.push('/en/');
        break;
    }
  }

  return (
    <div className="selected-lang cursor-pointer flex justify-between mt-[3px]" onClick={toggleLanguage}>
        <img src={`/img/lang/${language ?? "en"}-flag.png`} alt='en' className="w-[24px] h-[24px] rounded-full object-cover" />
    </div>
  )
}

export default LanguageSelector
