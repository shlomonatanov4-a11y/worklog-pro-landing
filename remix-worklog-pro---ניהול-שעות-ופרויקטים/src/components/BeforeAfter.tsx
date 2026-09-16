import React from 'react';
import { XCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const beforeItems = [
    { emoji: '📝', title: 'דפים', desc: 'דפי נוכחות מקומטים, פתקים מפוזרים ושעות שנשכחות' },
    { emoji: '🧮', title: 'מחשבון', desc: 'חישובים ידניים מסורבלים של 125%, 150% ותעריפי נסיעות' },
    { emoji: '📂', title: 'קבצים', desc: 'אקסלים מבולגנים שלא מסונכרנים בין המחשב לנייד' },
    { emoji: '⏳', title: 'זמן מבוזבז', desc: 'שעות רבות של התעסקות בירוקרטית בסוף כל חודש' },
  ];

  const afterItems = [
    { emoji: '📱', title: 'מערכת אחת', desc: 'כל המשמרות, הלקוחות והפרויקטים מרוכזים באפליקציה נגישה' },
    { emoji: '⚡', title: 'חישובים אוטומטיים', desc: 'השכר, התוספות והתעריפים מחושבים אוטומטית עד השקל האחרון' },
    { emoji: '📊', title: 'נתונים ברורים', desc: 'דוחות PDF מוכנים לחתימה וגרפים המראים את תמונת המצב המלאה' },
    { emoji: '☁️', title: 'גיבוי בענן', desc: 'סנכרון רציף וחסין תקלות ביציאה — הנתונים תמיד שמורים ובטוחים' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f1f5f9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
            השוואה ברורה
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            ההבדל שמורגש מהיום הראשון
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            איך נראה ניהול שעות לפני ואחרי המעבר ל-WorkLog Pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* "Before" Column (Red/Neutral tone) */}
          <div className="bg-white border-2 border-rose-100 rounded-3xl p-6 sm:p-8 shadow-2xs text-right relative overflow-hidden">
            <div className="flex items-center justify-between pb-5 border-b border-rose-100 mb-6">
              <div>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  הדרך הישנה
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">לפני WorkLog Pro</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* "After" Column (Emerald/Blue vibrant tone) */}
          <div className="bg-white border-2 border-blue-500/80 rounded-3xl p-6 sm:p-8 shadow-md text-right relative overflow-hidden">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  הפתרון החכם
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">עם WorkLog Pro</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4">
              {afterItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/40 border border-blue-100">
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
