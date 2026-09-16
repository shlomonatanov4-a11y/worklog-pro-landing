import React from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck, Printer, FileSpreadsheet } from 'lucide-react';
import { ReportPdfScreen } from './screens/ReportPdfScreen';

export const ReportsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200" id="reports-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            הפקת דוחות PDF רשמיים
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            דוח שעות חתום ומקצועי בלחיצה אחת
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            הפיקו דוחות שעות מעוצבים לפי לקוחות, עם פירוט פרויקטים, תמחור שעתי וגלובלי, וחישוב מע״מ 18% חוקי ומדויק.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 text-right">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">התאמה מלאה לחוק ולמע״מ</h4>
            <p className="text-xs text-slate-600 mt-1">
              פירוט סכום לפני מע״מ, תוספת מע״מ (18%) וסך הכל כולל מע״מ, מתאים להגשה לרואה חשבון או ללקוח.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 text-right">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-2">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">שילוב שעתי + פיקס גלובלי</h4>
            <p className="text-xs text-slate-600 mt-1">
              אפשרות לכלול באותו דוח גם שעות עבודה לפי תעריף וגם משימות בעלות פיקס מוסכמת (מחיר גלובלי).
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 text-right">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-2">
              <Printer className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">ייצוא מהיר והדפסה</h4>
            <p className="text-xs text-slate-600 mt-1">
              הורדת PDF מוכן להדפסה או לשליחה ישירה בווטסאפ או במייל ללקוח.
            </p>
          </div>
        </div>

        {/* The Exact PDF Report from Screenshot 4 */}
        <div className="relative group max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-t-2xl flex items-center justify-between text-xs border border-b-0 border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                WorkLog Pro • הפקת דוח שעות PDF
              </span>
            </div>
            <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span>● מסך מערכת אמיתי</span>
            </div>
          </div>
          <ReportPdfScreen />
        </div>

        <p className="text-xs text-center text-slate-500 font-medium">
          צילום מסך מתוך המערכת: דוח שעות לדוגמה עבור הלקוח "מיכל" לתקופת ספטמבר 2026 עם סיכום מע״מ
        </p>
      </div>
    </section>
  );
};
