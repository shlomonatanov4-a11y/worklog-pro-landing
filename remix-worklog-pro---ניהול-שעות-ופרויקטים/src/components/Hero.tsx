import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14">
          {/* Subtle Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span>גרסה 2.5.0 — כוללת סורק שעות OCR חכם ותקופת ניסיון כפולה</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
            ניהול שעות ופרויקטים.{' '}
            <span className="text-[#2563eb] inline-block">פשוט יותר.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            WorkLog Pro מרכז את שעות העבודה, ההכנסות, הלקוחות והדוחות שלך במקום אחד.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              id="hero-primary-cta"
              href="https://worklog-pro-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <span>התחילו עכשיו — 14 ימים בחינם</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>

            <a
              id="hero-secondary-cta"
              href="https://worklog-pro-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base rounded-xl border border-slate-200 hover:border-slate-300 shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <span>כניסה לאפליקציה</span>
            </a>
          </div>

          {/* Mini guarantees list */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 pt-2 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              14 ימי התנסות מלאים
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              ללא צורך בכרטיס אשראי
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              גיבוי ענן מאובטח 100%
            </span>
          </div>
        </div>

        {/* Large Authentic Product Mockup Container */}
        <div className="relative mx-auto max-w-5xl">
          <div className="p-1 sm:p-2 bg-gradient-to-b from-slate-200 to-slate-300/40 rounded-3xl shadow-2xl">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
