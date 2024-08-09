import React, { useState } from 'react';

export default function NightWatch() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-night-dark text-black dark:text-white">
        <h1 className="text-4xl font-bold">Night Watch Theme</h1>
        <p className="mt-4">Toggle to switch between Light and Dark modes.</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 px-4 py-2 rounded bg-night-light text-white hover:bg-night"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
