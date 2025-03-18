import React from 'react';

function Alert({ type = 'info', children }) {
  const baseClass = 'p-4 rounded-lg font-medium';
  const typeClasses = {
    error: 'bg-red-100 text-red-800 border border-red-400',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-400',
    info: 'bg-blue-100 text-blue-800 border border-blue-400',
    success: 'bg-green-100 text-green-800 border border-green-400',
  };

  const alertClass = `${baseClass} ${typeClasses[type] || typeClasses.info}`;

  return <div className={alertClass}>{children}</div>;
}

export default Alert;