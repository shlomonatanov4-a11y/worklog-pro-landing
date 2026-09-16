import React from 'react';
import {
  Camera,
  UploadCloud,
  FolderOpen,
  X,
  ChevronDown,
  Building,
} from 'lucide-react';

export const OcrScannerScreen: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden text-right select-none text-slate-800 font-sans p-6 sm:p-8 space-y-6">
      {/* Modal Top Header (1:1 with Screenshot 6) */}
      <div className="flex items-start justify-between border-b border-slate-100 pb-4">
        {/* Close Button on left */}
        <button
          type="button"
          className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title and Camera Icon on right */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              סריקה ופענוח דוחות PDF ותמונות ב-AI Vision
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              גרור קובץ או בחר מסמך. זיהוי אוטומטי חכם של שעות ותמחור (שעתי או גלובלי) לכל שורה בנפרד
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-md">
            <Camera className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Client Link Selector Row (1:1 with Screenshot 6) */}
      <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="bg-sky-100 text-sky-800 font-bold px-2.5 py-1 rounded-lg">
            מקושר ל: משה
          </span>
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <span>לאיזה לקוח לקשר את שעות העבודה שייסרקו?</span>
            <Building className="w-4 h-4 text-sky-600" />
          </div>
        </div>

        {/* Dropdown & Quick Client Pills */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-[#0284c7] text-white font-bold text-xs rounded-xl shadow-2xs">
              משה
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 font-medium text-xs rounded-xl hover:bg-slate-50 cursor-pointer">
              מיכל
            </span>
          </div>

          <div className="flex-1 max-w-xs bg-white border border-slate-300 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs text-slate-800 font-medium">
            <ChevronDown className="w-4 h-4 text-slate-400" />
            <span>משה</span>
          </div>
        </div>
      </div>

      {/* Drag & Drop Zone (1:1 with Screenshot 6) */}
      <div className="border-2 border-dashed border-sky-200 bg-sky-50/20 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4">
        {/* Upload Icon */}
        <div className="w-16 h-16 rounded-2xl bg-sky-100 text-[#0284c7] flex items-center justify-center shadow-xs">
          <UploadCloud className="w-8 h-8" />
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-black text-slate-900">
            גרור ושחרר קובץ PDF או תמונה לכאן
          </h4>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            תומך בקבצי PDF, דוחות שעות חודשיים, הצעות מחיר, צילומי מסך וטבלאות עבודה
          </p>
        </div>

        {/* Buttons: Choose File & Camera */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <div className="flex items-center gap-2 bg-sky-100 text-[#0284c7] font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-sky-200 cursor-pointer transition-colors">
            <Camera className="w-4 h-4" />
            <span>פתח מצלמה</span>
          </div>

          <div className="flex items-center gap-2 bg-[#1e293b] hover:bg-slate-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs cursor-pointer transition-colors">
            <FolderOpen className="w-4 h-4" />
            <span>בחר קובץ מהמכשיר</span>
          </div>
        </div>
      </div>
    </div>
  );
};
