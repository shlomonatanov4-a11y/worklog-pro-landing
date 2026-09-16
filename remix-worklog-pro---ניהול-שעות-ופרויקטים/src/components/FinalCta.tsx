import React from 'react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0f172a] text-white border-t border-slate-800 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-blue-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>מוכנים לשדרג את ניהול השעות?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          פחות התעסקות. יותר שליטה.
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          כל שעות העבודה, הלקוחות, ההכנסות והדוחות שלך — במקום אחד.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3">
          <a
            id="final-cta-primary-btn"
            href="https://worklog-pro-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
          >
            <span>התחילו עכשיו</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </a>

          <a
            id="final-cta-secondary-btn"
            href="https://worklog-pro-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-base rounded-xl border border-slate-700 transition-all flex items-center justify-center"
          >
            <span>כניסה לאפליקציה</span>
          </a>
        </div>

        {/* Micro guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 pt-3">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            14 ימי ניסיון בחינם
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            ללא כרטיס אשראי
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            סנכרון ענן מאובטח
          </span>
        </div>
      </div>
    </section>
  );
};
