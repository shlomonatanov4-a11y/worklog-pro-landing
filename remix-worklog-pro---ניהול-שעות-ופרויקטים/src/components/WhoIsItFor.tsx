import React from 'react';
import { UserCheck, Palette, Laptop, Building2, Clock, Check } from 'lucide-react';

export const WhoIsItFor: React.FC = () => {
  const audiences = [
    {
      emoji: '👨‍💼',
      icon: UserCheck,
      title: 'עצמאים',
      desc: 'שליטה מלאה בכל שעת עבודה, חישוב הכנסות מדויק ומעקב הוצאות נסיעה.',
      benefit: 'שקיפות פיננסית יומיומית',
    },
    {
      emoji: '🎨',
      icon: Palette,
      title: 'מעצבים וגרפיקאים',
      desc: 'ניהול לקוחות בתיקיות מסודרות, ומעבר פשוט בין תמחור שעתי למחיר פיקס גלובלי לפרויקט.',
      benefit: 'סדר בכל סקיצה ופרויקט',
    },
    {
      emoji: '💻',
      icon: Laptop,
      title: 'פרילנסרים ומפתחים',
      desc: 'מעקב מדויק אחר זמני עבודה על מספר לקוחות במקביל, כולל טיימר חי עם שניות.',
      benefit: 'חיוב מדויק על כל דקת עבודה',
    },
    {
      emoji: '🏢',
      icon: Building2,
      title: 'בעלי עסקים קטנים',
      desc: 'הפקת דוחות נוכחות רשמיים עם לוגו העסק וחתימה דיגיטלית לשליחה לרואי חשבון.',
      benefit: 'דוחות מסודרים ללא מאמץ',
    },
    {
      emoji: '⏱️',
      icon: Clock,
      title: 'עובדים לפי שעות',
      desc: 'מעקב עצמאי שמאפשר להשוות את השעות שנרשמו מול תלוש השכר בסוף החודש.',
      benefit: 'ביטחון שכל שעה משולמת במלואה',
    },
  ];

  return (
    <section id="who-is-it-for" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#2563eb] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            התאמה מושלמת
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            נבנה בשביל אנשים שעובדים לפי הזמן שלהם.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-xl mx-auto">
            בין אם אתם מתמחרים לפי שעה או לפי פרויקט, WorkLog Pro מתאים בדיוק לצורת העבודה שלכם.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs hover:border-blue-200 transition-all text-right flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{aud.emoji}</span>
                    <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {aud.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{aud.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
