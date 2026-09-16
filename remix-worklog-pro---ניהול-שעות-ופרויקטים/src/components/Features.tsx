import React from 'react';
import {
  Clock,
  Camera,
  ShieldCheck,
  FolderTree,
  FileText,
  Bot,
  BarChart3,
  Smartphone,
  Check,
} from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      id: 'smart-timer',
      icon: Clock,
      title: 'טיימר חכם',
      description: 'מעקב זמן מדויק ושיוך ללקוח או לפרויקט.',
      detail: 'הפעלה ועצירה בלחיצה אחת עם סטופר חי, חישוב שכר מדויק לפי שניות והמשך עבודה אוטומטי.',
      badge: 'חיוב בזמן אמת',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 'ocr-scanner',
      icon: Camera,
      title: 'סורק שעות OCR',
      description: 'צילום או העלאה של דף שעות והמרה למשמרות דיגיטליות.',
      detail: 'צלמו דף נוכחות פיזי במצלמת הטלפון — בינה מלאכותית מזהה שעות כניסה, יציאה ותאריכים תוך שניות.',
      badge: 'מופעל AI',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 'cloud-backup',
      icon: ShieldCheck,
      title: 'גיבוי ענן',
      description: 'שמירה וגיבוי של הנתונים כדי שתוכל לגשת אליהם מכל מכשיר.',
      detail: 'סנכרון ענן אוטומטי חסין תקלות בכל יציאה מהאפליקציה עם היסטוריית גרסאות ושחזור מהיר.',
      badge: '100% מאובטח',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 'clients-projects',
      icon: FolderTree,
      title: 'לקוחות ופרויקטים',
      description: 'ניהול לקוחות ותמחור לפי שעה או מחיר קבוע.',
      detail: 'סדרו את העבודה בתיקיות מסודרות, הגדירו תעריפים מותאמים אישית או חיוב גלובלי פיקס לכל פרויקט.',
      badge: 'סדר וארגון',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      id: 'pdf-reports',
      icon: FileText,
      title: 'דוחות PDF',
      description: 'יצירת דוחות מקצועיים עם פירוט שעות, נסיעות ושעות נוספות.',
      detail: 'הפקה בלחיצת כפתור של דוח חודשי מלוטש עם לוגו העסק שלך וחתימה דיגיטלית לשליחה בוואטסאפ או במייל.',
      badge: 'ייצוא רשמי',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      id: 'smart-ai',
      icon: Bot,
      title: 'AI חכם',
      description: 'עוזר AI לניתוח נתונים, שכר ותחזיות הכנסה.',
      detail: 'שאלו שאלות בעברית על שעות העבודה שלכם, קבלו תחזיות הכנסה מדויקות וזיהוי ימי עבודה עמוסים.',
      badge: 'מופעל Gemini',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      id: 'charts-analytics',
      icon: BarChart3,
      title: 'גרפים וניתוחים',
      description: 'הבנה מהירה של שעות, הכנסות ומגמות.',
      detail: 'לוח אנליטיקה ויזואלי המציג פילוח שעות שבועי וחודשי, תובנות על לקוחות מובילים וצפי תקבולים.',
      badge: 'תובנות ברורות',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
    },
    {
      id: 'pwa-app',
      icon: Smartphone,
      title: 'PWA',
      description: 'אפשרות להתקין את WorkLog Pro כאפליקציה במחשב או בטלפון.',
      detail: 'התקנה מהירה בלחיצה ישירות מהדפדפן, גישה נוחה ממסך הבית וטעינה מהירה במיוחד גם ללא חיבור.',
      badge: 'מחשב ונייד',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      iconBg: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  return (
    <section id="features" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#2563eb] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            הכלים המובילים
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            כל מה שצריך לניהול העבודה
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-xl mx-auto">
            מערכת מקיפה שנבנתה במיוחד עבור עצמאים, פרילנסרים ועובדים שעושים סדר בזמן שלהם.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuresList.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between text-right group"
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center border transition-transform group-hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${f.badgeColor}`}
                    >
                      {f.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-semibold mb-2">
                    {f.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {f.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
