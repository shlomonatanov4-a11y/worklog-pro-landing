import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const iconSizes = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Brand Icon */}
      <div
        className={`${iconSizes[size]} overflow-hidden border ${
          isDark ? 'border-slate-700 bg-slate-900 shadow-md' : 'border-slate-200/90 bg-slate-900 shadow-xs'
        } flex-shrink-0 flex items-center justify-center relative transition-transform hover:scale-105`}
      >
        {!imgError ? (
          <img
            src="/app-logo.png"
            alt="WorkLog Pro Logo"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-950 p-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-blue-400"
            >
              <circle cx="12" cy="12" r="10" stroke="#3b82f6" />
              <polyline points="12 6 12 12 16 14" stroke="#00d294" />
            </svg>
          </div>
        )}
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-right leading-none">
        <div className={`${titleSizes[size]} font-black tracking-tight flex items-baseline gap-0.5`}>
          <span className={isDark ? 'text-white' : 'text-[#1e3a8a]'}>WorkLog</span>
          <span className="text-[#3b82f6]">Pro</span>
        </div>
        <span
          className={`text-[10px] sm:text-xs font-semibold ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          } mt-0.5`}
        >
          ניהול שעות ופרויקטים
        </span>
      </div>
    </div>
  );
};
