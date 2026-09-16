import React from 'react';
import { Camera, Sparkles, FileText, CheckCircle2, ScanLine, UploadCloud, FolderOpen } from 'lucide-react';
import { OcrScannerScreen } from './screens/OcrScannerScreen';

export const OcrSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'דף שעות פיזי',
      desc: 'דף נוכחות מודפס, מחברת שעות או טבלה כתובה בכתב יד.',
      color: 'bg-slate-100 text-slate-800 border-slate-200',
    },
    {
      step: '02',
      icon: Camera,
      title: 'צילום במצלמה',
      desc: 'מצלמים תמונה מהטלפון או מעלים קובץ תמונה/PDF ישירות למערכת.',
      color: 'bg-purple-100 text-purple-800 border-purple-200',
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'זיהוי OCR חכם',
      desc: 'הבינה המלאכותית מפענחת אוטומטית תאריכים, שעות כניסה ויציאה.',
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    },
    {
      step: '04',
      icon: CheckCircle2,
      title: 'שעות ביומן',
      desc: 'כל המשמרות מוזנות ליומן הדיגיטלי ב-WorkLog Pro ללא הקלדה.',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200" id="ocr-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            סריקה ופענוח ב-AI Vision
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            צלמו דף נייר ישן — והוא הופך לדוח דיגיטלי
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            העלו קבצי PDF, דוחות חודשיים סרוקים או תמונות מהמצלמה. מנוע ה-Vision מזהה שעות ותמחור לכל שורה בנפרד ומקשר ללקוח הנבחר.
          </p>
        </div>

        {/* 4 Step Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 text-right relative overflow-hidden group hover:border-blue-400 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black text-slate-400">{item.step}</span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* The Exact OCR Scanner Modal from Screenshot 6 */}
        <div className="relative group max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-t-2xl flex items-center justify-between text-xs border border-b-0 border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                WorkLog Pro • סורק שעות OCR ו-AI Vision
              </span>
            </div>
            <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span>● מסך מערכת אמיתי</span>
            </div>
          </div>
          <OcrScannerScreen />
        </div>

        <p className="text-xs text-center text-slate-500 font-medium">
          צילום מסך מתוך המערכת: חלון סריקת דוחות PDF ותמונות ב-AI Vision עם קישור ללקוח "משה" או "מיכל"
        </p>
      </div>
    </section>
  );
};
