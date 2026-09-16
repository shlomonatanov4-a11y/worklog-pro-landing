import React, { useState } from 'react';
import { ZoomIn, CheckCircle } from 'lucide-react';

interface ScreenshotFrameProps {
  id?: string;
  src: string;
  alt: string;
  fallback?: React.ReactNode;
  className?: string;
  caption?: string;
  badge?: string;
}

export const ScreenshotFrame: React.FC<ScreenshotFrameProps> = ({
  id,
  src,
  alt,
  fallback,
  className = '',
  caption,
  badge = 'צילום מסך מתוך המערכת',
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // If there's no fallback provided or image loaded successfully
  return (
    <div id={id} className={`relative group w-full ${className}`}>
      {/* Real Screenshot Image Container */}
      {!imageError ? (
        <div
          className={`relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-xl transition-all duration-300 ${
            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {/* Top subtle bar simulating browser/app frame */}
          <div className="bg-slate-900/90 backdrop-blur-xs px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                WorkLog Pro App
              </span>
            </div>
            {badge && (
              <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                <CheckCircle className="w-3 h-3" />
                <span>{badge}</span>
              </div>
            )}
          </div>

          <div className="relative overflow-hidden bg-slate-100 flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              referrerPolicy="no-referrer"
              className={`w-full h-auto object-cover sm:object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-105' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />

            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 min-h-[300px]">
                <div className="flex flex-col items-center gap-2 text-slate-400 text-xs">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>טוען צילום מסך...</span>
                </div>
              </div>
            )}

            {/* Hover overlay hint */}
            <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-[11px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'לחץ להקטנה' : 'לחץ להגדלה'}</span>
            </div>
          </div>
        </div>
      ) : (
        /* Fallback to custom pixel-perfect rendered UI */
        fallback || (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center text-slate-500">
            {alt}
          </div>
        )
      )}

      {caption && (
        <p className="mt-2 text-xs text-center text-slate-500 font-medium">
          {caption}
        </p>
      )}
    </div>
  );
};
