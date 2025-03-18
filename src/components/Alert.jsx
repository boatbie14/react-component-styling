import React from 'react';
import { FaSadTear, FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';


function Alert({ type = 'info', children }) {
  const baseClass = 'p-4 rounded-lg font-medium flex items-center w-[550px]';
  const typeClasses = {
    error: 'bg-red-200 text-red-400 ',
    warning: 'bg-red-100 text-red-400 ',
    info: 'bg-yellow-100 text-yellow-300 ',
    success: 'bg-green-200 text-green-400 ',
  };

  const iconClasses = {
    error: <FaSadTear className="mr-5 text-lg" />, // Updated error icon
    warning: <FaExclamationTriangle className="mr-5 text-lg" />,
    info: <FaInfoCircle className="mr-5 text-lg" />,
    success: <FaCheckCircle className="mr-5 text-lg" />,
  };

  const alertClass = `${baseClass} ${typeClasses[type]}`;

  return (
    <div className={alertClass}>
      {iconClasses[type]}
      <span className="text-gray-800 font-semibold">{children}</span>
    </div>
  );
}

export default Alert;