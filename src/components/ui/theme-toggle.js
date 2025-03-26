'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    // Get saved theme from localStorage or use default
    const savedTheme = localStorage.getItem('theme') || 'default';
    setCurrentTheme(savedTheme);

    // Apply the theme to the document
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = e => {
    const newTheme = e.target.value;

    setCurrentTheme(newTheme);

    document.documentElement.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="dropdown z-[999]">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
            checked={currentTheme === 'default'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            checked={currentTheme === 'retro'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            checked={currentTheme === 'cyberpunk'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            checked={currentTheme === 'valentine'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            checked={currentTheme === 'aqua'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            checked={currentTheme === 'light'}
            onChange={handleThemeChange}
          />
        </li>
      </ul>
    </div>
  );
}
