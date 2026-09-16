import React from 'react';
import { UserPlus, Clock, FileCheck, ArrowLeft } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: UserPlus,
      title: 'יוצרים חשבון',
      desc: 'הרשמה מהירה בחינם, ללא צורך בכרטיס אשראי. מקבלים מיד 14 ימי ניסיון מלאים לכל תכונות המערכת.',
      highlight: 'ללא התחייבות',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      num: '02',
      icon: Clock,
      title: 'רושמים שעות או סורקים דף',
      desc: 'מפעילים טיימר חי בלחיצה אחת, רושמים משמרות ידנית, או פשוט מצלמים דף נוכחות פיזי במצלמה.',
      highlight: 'סורק OCR חכם',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      num: '03',
      icon: FileCheck,
      title: 'מקבלים סיכומים ודוחות',
      desc: 'צופים בחישוב השכר המדויק, מנתחים מגמות ורווחיות פרויקטים, ומפיקים דוחות PDF רשמיים לחתימה.',
      highlight: 'דוחות מוכנים לשליחה',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f1f5f9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#2563eb] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            תהליך פשוט
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            מתחילים תוך דקות
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            הקמנו את WorkLog Pro כדי שתוכלו לעבוד בשקט ולהתרכז בעבודה עצמה.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all text-right flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-300 font-mono">
                      {s.num}
                    </span>
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${s.color}`}>
                      <Icon className="w-6 h-6" />
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">{s.highlight}</span>
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
