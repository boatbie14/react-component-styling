import React from 'react';
import { FaSadTear, FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';


function Alert({ type = 'info', children }) {
  const baseClass = 'p-4 rounded-lg font-medium flex items-center w-60';
  const typeClasses = {
    error: 'bg-red-400 text-red-800 ',
    warning: 'bg-yellow-400 text-yellow-800 ',
    info: 'bg-blue-400 text-blue-800 ',
    success: 'bg-green-400 text-green-800 ',
  };

  const iconClasses = {
    error: <FaSadTear className="mr-5 text-xl" />, // Updated error icon
    warning: <FaExclamationTriangle className="mr-5 text-xl" />,
    info: <FaInfoCircle className="mr-5 text-xl" />,
    success: <FaCheckCircle className="mr-5 text-xl" />,
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