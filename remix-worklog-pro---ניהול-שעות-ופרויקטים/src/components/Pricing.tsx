import React from 'react';
import { Check, ShieldCheck, Sparkles, ArrowLeft, Clock } from 'lucide-react';

/**
 * Easily adjustable pricing configuration for WorkLog Pro
 */
export const PRICING_CONFIG = {
  trialDays: 14,
  // Monthly price configuration placeholder - update when official subscription tiers are announced
  monthlyPriceNis: null as number | null,
  currency: '₪',
  trialGuarantee: '14 ימי ניסיון מלאים ללא התחייבות • ללא כרטיס אשראי',
  postTrialNote: 'מסלולים גמישים ומותאמים אישית בסיום תקופת הניסיון',
  appUrl: 'https://worklog-pro-six.vercel.app/',
};

export const Pricing: React.FC = () => {
  const planFeatures = [
    'טיימר חכם וחיוב מדויק בזמן אמת',
    'סורק שעות OCR חכם ממצלמה או קובץ',
    'גיבוי ענן אוטומטי כפול וביציאה',
    'תיקיות לקוחות ותמחור לפי פרויקט (גלובלי או שעתי)',
    'דוחות חודשיים והפקת PDF מעוצב עם חתימה דיגיטלית',
    'עוזר AI חכם (מופעל Gemini) לניתוח וייעוץ שכר',
    'התקנת PWA ישירות לנייד ולמחשב',
    'ללא הגבלת משמרות או שעות עבודה',
  ];

  return (
    <section id="pricing" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            התנסות ללא סיכון
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            14 ימים מלאים. בחינם.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5">
            התנסו בכל התכונות המובילות של WorkLog Pro ללא שום התחייבות וללא צורך בכרטיס אשראי.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white border-2 border-blue-500 rounded-3xl p-6 sm:p-10 shadow-lg text-right relative overflow-hidden">
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold px-5 py-1.5 rounded-bl-2xl">
              גרסה 2.5.0 — ניסיון מורחב
            </div>

            <div className="mb-6 pt-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                תוכנית Pro המלאה
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                גישה בלתי מוגבלת לכל הכלים
              </h3>
            </div>

            {/* Price block */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-baseline justify-between mb-8">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
                    100% חינם
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 mr-2 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    למשך {PRICING_CONFIG.trialDays} ימי ניסיון
                  </span>
                </div>
                <div className="text-xs text-slate-600 mt-2 font-medium">
                  {PRICING_CONFIG.trialGuarantee}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {PRICING_CONFIG.monthlyPriceNis
                    ? `לאחר מכן: ${PRICING_CONFIG.currency}${PRICING_CONFIG.monthlyPriceNis} לחודש`
                    : PRICING_CONFIG.postTrialNote}
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Value checklist */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-bold text-slate-900 block pb-1 border-b border-slate-100">
                החבילה כוללת:
              </span>
              {planFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Bottom 3 guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-4 mb-6 border-y border-slate-100 text-center text-xs text-slate-600">
              <div className="font-semibold text-slate-800">✓ כל יכולות המערכת</div>
              <div className="font-semibold text-slate-800">✓ ללא התחייבות</div>
              <div className="font-semibold text-slate-800">✓ מעבר פשוט</div>
            </div>

            {/* CTA Button */}
            <a
              id="pricing-cta-btn"
              href={PRICING_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 group"
            >
              <span>התחילו את תקופת הניסיון</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>

            <p className="text-center text-[11px] text-slate-400 mt-3">
              פתיחת חשבון מיידית • ללא צורך בהזנת כרטיס אשראי
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
