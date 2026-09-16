import React from 'react';
import {
  Clock,
  Calendar,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { DashboardScreen } from './screens/DashboardScreen';
import { CalendarScreen } from './screens/CalendarScreen';
import { AnalyticsScreen } from './screens/AnalyticsScreen';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f1f5f9] border-t border-slate-200" id="product-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            חוויית מוצר מתקדמת
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            פחות נייר. יותר שליטה.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            ממשק עבודה מדויק שחוסך זמן בכל יום מחדש ומציג את התמונה המלאה ברגע — בדיוק כפי שנראה במערכת.
          </p>
        </div>

        {/* Showcase Item 1: Real Dashboard Screenshot (1:1 with Screenshot 1) */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs text-right">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>01. לוח בקרה מרכזי</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  שליטה מיידית בכל רגע נתון
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                התחילו משמרת בלחיצה, עקבו אחר הזמן בזמן אמת, וצפו בסיכומי השעות וההכנסה המצטברת לחודש הנוכחי ללא צורך בחישובים ידניים.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>טיימר פעיל ומדידת זמן</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>הכנסה יומית ₪1,020 וחודשית ₪5,990</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>עוזר AI חכם מובנה לרישום שעות</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>מד יעד חודשי (33%) ותחזית שכר</span>
              </div>
            </div>
          </div>

          {/* Screen 1 Display (Same standardized size across entire app) */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="bg-slate-900 text-white px-4 py-2 rounded-t-2xl flex items-center justify-between text-xs border border-b-0 border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                  WorkLog Pro • לוח בקרה ראשי
                </span>
              </div>
              <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                <span>● מסך מערכת אמיתי</span>
              </div>
            </div>
            <DashboardScreen />
          </div>
          <p className="text-xs text-center text-slate-500 font-medium">
            צילום מסך מתוך המערכת: לוח בקרה ראשי, יומן שעות, טיימר והכנסות (ספטמבר 2026)
          </p>
        </div>

        {/* Showcase Item 2: Real Calendar Screenshot (1:1 with Screenshot 2) */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs text-right">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>02. לוח שנה ונוכחות חודשי</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  תצוגת יומן חודשית מלאה
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                כל שעת עבודה מתועדת ומקושרת ללקוח המתאים. צפו בלוח שנה חודשי ויזואלי המציג ימי עבודה, שעות יומיות, חוסרים בדיווח וסיכומי שכר לכל תאריך.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>5 ימי עבודה שדווחו (95:00 שעות)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>התרעה אוטומטית על ימים ללא דיווח</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>הדגשת היום הנוכחי עם פירוט שכר יומי</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>סיכום הכנסה חודשית כוללת: ₪12,450</span>
              </div>
            </div>
          </div>

          {/* Screen 2 Display (Same standardized size across entire app) */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="bg-slate-900 text-white px-4 py-2 rounded-t-2xl flex items-center justify-between text-xs border border-b-0 border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                  WorkLog Pro • לוח שנה ונוכחות חודשי
                </span>
              </div>
              <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                <span>● מסך מערכת אמיתי</span>
              </div>
            </div>
            <CalendarScreen />
          </div>
          <p className="text-xs text-center text-slate-500 font-medium">
            צילום מסך מתוך המערכת: לוח שנה ונוכחות מלא לחודש ספטמבר 2026 עם מעקב חוסרי דיווח ושעות
          </p>
        </div>

        {/* Showcase Item 3: Real Analytics & Charts Screenshot (1:1 with Screenshot 3) */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs text-right">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>03. ניתוח, גרפים ותובנות</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  גרפים חכמים ופילוח שעות והכנסות
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                נתחו את חלוקת שעות העבודה הרגילות לעומת שעות נוספות, צפו בקצב צבירת ההכנסה החודשית לאורך הימים, וקבלו תמונת מצב פיננסית מדויקת.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>דונאט פילוח: 100% שעות רגילות (95 ש׳)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>התפלגות יומית של שעות רגילות ונוספות</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>גרף צבירת הכנסה חודשית עד ₪12,450</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>מעקב עמידה ביעד חודשי של 18,000 ₪</span>
              </div>
            </div>
          </div>

          {/* Screen 3 Display (Same standardized size across entire app) */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="bg-slate-900 text-white px-4 py-2 rounded-t-2xl flex items-center justify-between text-xs border border-b-0 border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                  WorkLog Pro • ניתוח וגרפים
                </span>
              </div>
              <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                <span>● מסך מערכת אמיתי</span>
              </div>
            </div>
            <AnalyticsScreen />
          </div>
          <p className="text-xs text-center text-slate-500 font-medium">
            צילום מסך מתוך המערכת: ניתוח גרפי, פילוח שעות וצבירת הכנסה חודשית
          </p>
        </div>
      </div>
    </section>
  );
};
