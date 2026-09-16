import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'מה זה WorkLog Pro?',
      a: 'WorkLog Pro היא אפליקציה מתקדמת ומקיפה לניהול שעות עבודה, פרויקטים, לקוחות והפקת דוחות שכר. המערכת כוללת טיימר חי, סורק שעות OCR חכם מבוסס AI, חישובי שעות נוספות ונסיעות אוטומטיים, וגיבוי ענן מאובטח.',
    },
    {
      q: 'למי המערכת מתאימה?',
      a: 'המערכת נבנתה במיוחד לעצמאים, פרילנסרים, מעצבים, מתכנתים, עובדים לפי שעות ובעלי עסקים קטנים שרוצים שליטה מלאה בזמן שלהם, תמחור מדויק של פרויקטים ומעקב רציף אחר הכנסותיהם.',
    },
    {
      q: 'האם אפשר להשתמש בטלפון?',
      a: 'בהחלט! WorkLog Pro פועלת כאפליקציית PWA (Progressive Web App) מלאה. ניתן להתקין אותה ישירות למסך הבית של הטלפון (אייפון או אנדרואיד) או למחשב, והיא מסתנכרנת באופן רציף בין כל המכשירים.',
    },
    {
      q: 'האם הנתונים נשמרים בענן?',
      a: 'כן. המערכת כוללת מנגנון גיבוי ענן כפול וחסין תקלות הפועל בכל יציאה מהאפליקציה, שינוי שעות או סגירת מסך. כל הנתונים שלכם מוצפנים ומאובטחים בענן וניתנים לשחזור מיידי מכל דפדפן.',
    },
    {
      q: 'מה כולל הניסיון החינמי?',
      a: 'תקופת הניסיון מעניקה 14 ימי התנסות מלאים ללא שום מגבלות — גישה מלאה לכל התכונות, כולל סורק ה-OCR, הפקת דוחות PDF, עוזר ה-AI וגיבוי הענן. אין צורך להזין פרטי אשראי בעת ההרשמה.',
    },
    {
      q: 'האם אפשר להפיק דוחות?',
      a: 'כן, בלחיצת כפתור אחת. ניתן להפיק דוח נוכחות חודשי רשמי בפורמט PDF מעוצב הכולל פירוט ימי עבודה, שעות רגילות ונוספות (125%, 150%), החזר נסיעות, לוגו העסק וחתימה דיגיטלית מאושרת.',
    },
    {
      q: 'האם קיימת אפשרות לסרוק דפי שעות?',
      a: 'כן! המערכת כוללת סורק שעות OCR חדשני. פשוט מצלמים דף נוכחות מודפס או כתוב בכתב יד, והבינה המלאכותית מזהה את התאריכים ושעות הכניסה והיציאה וממירה אותם למשמרות ביומן.',
    },
  ];

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f1f5f9] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#2563eb] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            מענה לכל שאלה
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            שאלות נפוצות
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            התשובות לכל מה שחשוב לדעת על WorkLog Pro
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-[#f8fafc]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
