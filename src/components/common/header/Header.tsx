import React from 'react';
import { useTheme } from '../../../hook/theme';
import ThemeController from '../../themeController/ThemeController';
import { useLanguage } from '../../../hook/lenguage';
import LanguageController from '../../lenguageController/LenguageController';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { translations } = useLanguage();

  return (
    <header className={`flex items-center justify-between px-8 h-16 w-full ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
      <div className="flex-2">
        <h1 className={`hidden md:block ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl font-bold`}>
          {translations['header.title']}
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        <i className={`fab fa-facebook ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}></i>
        <i className={`fab fa-linkedin ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}></i>
        <i className={`fab fa-twitter ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}></i>
      </div>
      <div className="flex items-center gap-4">
        <LanguageController />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
