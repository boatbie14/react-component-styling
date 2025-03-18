import React from 'react';
import { FaExclamationCircle, FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

function Alert({ type = 'info', children }) {
  const baseClass = 'p-4 rounded-lg font-medium flex items-center w-60';
  const typeClasses = {
    error: 'bg-red-400 text-red-800 ',
    warning: 'bg-yellow-400 text-yellow-800 ',
    info: 'bg-blue-400 text-blue-800 ',
    success: 'bg-green-400 text-green-800 ',
  };

  const iconClasses = {
    error: <FaExclamationCircle className="mr-2" />,
    warning: <FaExclamationTriangle className="mr-2" />,
    info: <FaInfoCircle className="mr-2" />,
    success: <FaCheckCircle className="mr-2" />,
  };

  const alertClass = `${baseClass} ${typeClasses[type]}`;

  return (
    <div className={alertClass}>
      {iconClasses[type]}
      <span className="text-white font-semibold">{children}</span>
    </div>
  );
}

export default Alert;