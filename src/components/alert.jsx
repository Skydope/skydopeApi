import React, { useEffect } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { Button } from './ui/button'; // Asegúrate de que la ruta a 'Button' es correcta

const Alert = ({ type = 'info', title, message, onClose, isToast = false }) => {
  // Determinar el color de fondo basado en el tipo de alerta
  const backgroundColors = {
    success: 'bg-green-100 dark:bg-green-800',
    error: 'bg-red-100 dark:bg-red-800',
    warning: 'bg-yellow-100 dark:bg-yellow-800',
    info: 'bg-blue-100 dark:bg-blue-800',
  };

  const textColors = {
    success: 'text-green-800 dark:text-green-200',
    error: 'text-red-800 dark:text-red-200',
    warning: 'text-yellow-800 dark:text-yellow-200',
    info: 'text-blue-800 dark:text-blue-200',
  };

  useEffect(() => {
    if (isToast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Toast desaparecerá después de 5 segundos

      return () => clearTimeout(timer); // Limpia el temporizador si se desmonta el componente
    }
  }, [isToast, onClose]);

  return (
    <div
      className={`flex items-start p-4 rounded-md ${backgroundColors[type]} ${textColors[type]} ${isToast ? 'fixed top-4 right-4 shadow-lg z-50' : 'relative'}`}
    >
      <div className="flex-shrink-0">
        {/* Icono que podrías ajustar basado en el tipo de alerta */}
        {type === 'success' && <CheckCircle className="h-6 w-6" />}
        {type === 'error' && <XCircle className="h-6 w-6" />}
        {type === 'warning' && <AlertTriangle className="h-6 w-6" />}
        {type === 'info' && <Info className="h-6 w-6" />}
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="mt-2 text-sm">
          <p>{message}</p>
        </div>
      </div>
      <div className="ml-auto pl-3">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Alert;
