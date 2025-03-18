import React from 'react'

function Button({ styleType = 'primary', children }) {
  const baseClass = 'px-4 py-2 rounded font-medium transition-colors text-white ';
  const styleClasses = {
    primary: 'bg-blue-800 hover:bg-blue-600',
    secondary: 'bg-blue-500 hover:bg-gray-600',
  };

  const buttonClass = `${baseClass} ${styleClasses[styleType]}`;

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;