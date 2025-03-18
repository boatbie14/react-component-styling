import React from 'react'

function Button({ styleType = 'primary', children }) {
  const baseClass = 'px-20 py-5 rounded font-medium transition-colors text-white text-xl';
  const styleClasses = {
    primary: 'bg-blue-800',
    secondary: 'bg-blue-500',
  };

  const buttonClass = `${baseClass} ${styleClasses[styleType]}`;

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;