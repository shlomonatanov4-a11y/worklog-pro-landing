import React from 'react';
import { FileEdit, Calculator, FolderX, HelpCircle, ArrowDown, CheckCircle2 } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: FileEdit,
      emoji: '📝',
      title: 'רישום ידני',
      desc: 'פתקים שנאבדים, דפי שעות מקומטים ושעות עבודה יקרות שנשכחות בסוף היום.',
    },
    {
      icon: Calculator,
      emoji: '🧮',
      title: 'חישובים ידניים',
      desc: 'טעויות חוזרות בחישוב שעות רגילות, 125%, 150%, נסיעות ותעריפים לפי לקוח.',
    },
    {
      icon: FolderX,
      emoji: '📂',
      title: 'דפים וקבצים',
      desc: 'בלאגן של קבצי אקסל במחשב, תמונות וואטסאפ מפוזרות ודוחות שלא נגישים ברגע האמת.',
    },
    {
      icon: HelpCircle,
      emoji: '❓',
      title: 'קשה לדעת כמה הרווחת',
      desc: 'חוסר ודאות מוחלט לגבי ההכנסה החודשית הצפויה עד שמגיע תלוש השכר או החשבונית.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            הבעיה המוכרת
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            עדיין מנהלים שעות על דף?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            ניהול מיושן של שעות גוזל זמן יקר, יוצר טעויות בחישוב השכר ומקשה על גבייה מלקוחות.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:border-rose-200 transition-all text-right flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{prob.emoji}</span>
                    <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{prob.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Visual Divider */}
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3 shadow-2xs">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
          <div className="bg-white border-2 border-blue-500/80 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-xs sm:text-sm mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>הפתרון השלם</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              WorkLog Pro מרכז הכול במקום אחד.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
              משמרות, פרויקטים, חישוב שכר, הפקת דוחות וסנכרון ענן חסין תקלות — בממשק עברי נקי ומהיר.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
