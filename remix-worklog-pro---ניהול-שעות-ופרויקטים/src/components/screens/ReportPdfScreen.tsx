import React from 'react';
import {
  Trash2,
  Edit2,
  Play,
  ShieldCheck,
  Check,
  LayoutGrid,
  Table as TableIcon,
  Sparkles,
} from 'lucide-react';

export const ReportPdfScreen: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-right select-none text-slate-800 font-sans p-4 sm:p-8 space-y-6">
      {/* Top Header of the Document (1:1 with Screenshot 4) */}
      <div className="flex flex-wrap items-start justify-between border-b border-slate-200 pb-5 gap-4">
        {/* Left Side: Business Status & Date */}
        <div className="text-left">
          <div className="font-black text-slate-900 text-sm sm:text-base">עסק עצמאי</div>
          <div className="text-xs text-slate-500 font-sans mt-0.5">הופק בתאריך: 10-09-2026</div>
        </div>

        {/* Right Side: Title & Client */}
        <div className="text-right">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            דוח שעות
          </h1>
          <div className="text-lg sm:text-2xl font-black text-[#1e3a8a] mt-1">
            שם לקוח: מיכל
          </div>
          <div className="inline-block mt-2 bg-blue-50/80 text-[#2563eb] border border-blue-200/90 px-3 py-1 rounded-full text-xs font-bold font-sans">
            תקופת דיווח: ספטמבר 2026
          </div>
        </div>
      </div>

      {/* Top Business Metadata Box (1:1 with Screenshot 4) */}
      <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-right">
        {/* Col 1 (Right): Business Owner Name */}
        <div>
          <span className="text-[11px] text-slate-400 block">שם בעל העסק / מעצב:</span>
          <span className="text-sm sm:text-base font-bold text-slate-900">shlomo</span>
        </div>

        {/* Col 2 (Center): Business ID */}
        <div className="sm:border-r sm:border-l sm:border-slate-200 sm:px-4">
          <span className="text-[11px] text-slate-400 block">מספר עוסק / מזהה:</span>
          <span className="text-sm sm:text-base font-bold text-slate-900">עוסק מורשה / פטור</span>
        </div>

        {/* Col 3 (Left): Hourly Rate */}
        <div className="sm:text-left">
          <span className="text-[11px] text-slate-400 block">תעריף שעתי לעיצוב:</span>
          <span className="text-sm sm:text-base font-bold text-slate-900 font-sans">120 ₪ / שעה</span>
        </div>
      </div>

      {/* Section Header & View Options */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-right">
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              פירוט שעות עבודה ופרויקטים
            </h3>
            <div className="text-xs text-slate-500 font-sans mt-0.5">
              סה״כ ימי עבודה: 1 • סה״כ שעות: 16:00 • סה״כ רשומות: 3
            </div>
          </div>

          {/* Action & Filter Pills matching Screenshot 4 */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Check className="w-3 h-3 text-sky-600" />
              עמודת שעה: מוצגת (לחץ למחיקה)
            </span>
            <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Check className="w-3 h-3 text-purple-600" />
              סוג מחיר מעל המחיר: מוצג (לחץ למחיקה)
            </span>
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 text-slate-600">
              <span className="px-2 py-0.5 text-[11px] font-semibold">כרטיסיות</span>
              <span className="px-2 py-0.5 text-[11px] font-semibold">טבלה</span>
              <span className="px-2 py-0.5 text-[11px] font-bold bg-white text-slate-900 rounded-lg shadow-2xs">
                אוטומטי
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Work Items Table (1:1 with Screenshot 4) */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
          <table className="w-full text-right text-xs">
            <thead className="bg-[#f8fafc] border-b border-slate-200 text-slate-600 font-bold">
              <tr>
                <th className="py-3 px-3 sm:px-4">תאריך</th>
                <th className="py-3 px-2 sm:px-3">יום</th>
                <th className="py-3 px-2 sm:px-3">זמן עבודה</th>
                <th className="py-3 px-3 sm:px-4">פרויקט / משימה</th>
                <th className="py-3 px-3 sm:px-4 text-center">סכום (לפני מע״מ)</th>
                <th className="py-3 px-3 sm:px-4 hidden sm:table-cell">פירוט עבודות ומשימות</th>
                <th className="py-3 px-3 sm:px-4 text-center">פעולות</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1: Flat Project 500.00 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-3 sm:px-4 font-mono font-medium text-slate-700">10-09-2026</td>
                <td className="py-3 px-2 sm:px-3 text-slate-600">חמישי</td>
                <td className="py-3 px-2 sm:px-3 text-slate-400 font-mono">—</td>
                <td className="py-3 px-3 sm:px-4 font-bold text-[#1e3a8a]">עיצוב לוגו ומיתוג</td>
                <td className="py-3 px-3 sm:px-4 text-center">
                  <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-md mb-0.5">
                    מחיר גלובלי
                  </span>
                  <div className="font-black text-slate-900 font-sans text-xs sm:text-sm">₪500.00</div>
                </td>
                <td className="py-3 px-3 sm:px-4 text-slate-500 hidden sm:table-cell">עבודה שוטפת</td>
                <td className="py-3 px-3 sm:px-4">
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <Trash2 className="w-3.5 h-3.5 hover:text-red-500 cursor-pointer" />
                    <Edit2 className="w-3.5 h-3.5 hover:text-blue-500 cursor-pointer" />
                    <Play className="w-3.5 h-3.5 hover:text-emerald-500 cursor-pointer fill-current" />
                  </div>
                </td>
              </tr>

              {/* Row 2: 8 Hours 960.00 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-3 sm:px-4 font-mono font-medium text-slate-700">10-09-2026</td>
                <td className="py-3 px-2 sm:px-3 text-slate-600">חמישי</td>
                <td className="py-3 px-2 sm:px-3 font-bold text-[#1e3a8a] font-mono">8:00 שעות</td>
                <td className="py-3 px-3 sm:px-4 font-bold text-[#1e3a8a]">פרויקט עיצוב ומיתוג</td>
                <td className="py-3 px-3 sm:px-4 text-center">
                  <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-md mb-0.5">
                    שעתי
                  </span>
                  <div className="font-black text-slate-900 font-sans text-xs sm:text-sm">₪960.00</div>
                </td>
                <td className="py-3 px-3 sm:px-4 text-slate-500 hidden sm:table-cell">עבודה שוטפת</td>
                <td className="py-3 px-3 sm:px-4">
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <Trash2 className="w-3.5 h-3.5 hover:text-red-500 cursor-pointer" />
                    <Edit2 className="w-3.5 h-3.5 hover:text-blue-500 cursor-pointer" />
                    <Play className="w-3.5 h-3.5 hover:text-emerald-500 cursor-pointer fill-current" />
                  </div>
                </td>
              </tr>

              {/* Row 3: 8 Hours 960.00 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-3 sm:px-4 font-mono font-medium text-slate-700">10-09-2026</td>
                <td className="py-3 px-2 sm:px-3 text-slate-600">חמישי</td>
                <td className="py-3 px-2 sm:px-3 font-bold text-[#1e3a8a] font-mono">8:00 שעות</td>
                <td className="py-3 px-3 sm:px-4 font-bold text-[#1e3a8a]">פרויקט עיצוב ומיתוג</td>
                <td className="py-3 px-3 sm:px-4 text-center">
                  <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-md mb-0.5">
                    שעתי
                  </span>
                  <div className="font-black text-slate-900 font-sans text-xs sm:text-sm">₪960.00</div>
                </td>
                <td className="py-3 px-3 sm:px-4 text-slate-500 hidden sm:table-cell">עבודה שוטפת</td>
                <td className="py-3 px-3 sm:px-4">
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <Trash2 className="w-3.5 h-3.5 hover:text-red-500 cursor-pointer" />
                    <Edit2 className="w-3.5 h-3.5 hover:text-blue-500 cursor-pointer" />
                    <Play className="w-3.5 h-3.5 hover:text-emerald-500 cursor-pointer fill-current" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Signature Dark Summary Card (1:1 with Screenshot 4) */}
      <div className="bg-[#0b132b] text-white rounded-3xl p-5 sm:p-7 shadow-xl flex flex-wrap items-center justify-between gap-6 border border-slate-800">
        {/* Left Side (in RTL): Total Amount with 18% VAT */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center min-w-[220px]">
          <span className="text-xs text-slate-400 block font-medium">סך הכל כולל מע״מ (18%)</span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-sans mt-1">
            ₪2,855.60
          </div>
          <span className="text-[11px] text-slate-500 block mt-1">(לפני מע״מ: 2,420.00 ₪)</span>
        </div>

        {/* Right Side: Detailed Breakdown */}
        <div className="space-y-2 text-right">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>סיכום חיוב פרויקטים ועבודות עיצוב</span>
          </div>
          <div className="text-xs text-slate-300">
            סך שעות עבודה: <span className="font-bold text-white font-mono">16:00 שעות</span> (1 ימי עבודה)
          </div>
          <div className="text-xs text-slate-300">
            סך לתשלום לפני מע״מ: <span className="font-bold text-white font-sans">₪2,420.00</span>
          </div>
          <div className="text-xs text-emerald-400 font-bold">
            תוספת מע״מ (18%): +₪435.60
          </div>
        </div>
      </div>
    </div>
  );
};
