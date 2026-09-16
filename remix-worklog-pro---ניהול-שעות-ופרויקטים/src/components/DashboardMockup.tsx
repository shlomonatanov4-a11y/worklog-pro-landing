import React from 'react';
import { DashboardScreen } from './screens/DashboardScreen';

export const DashboardMockup: React.FC<{ compact?: boolean }> = () => {
  return (
    <div id="hero-dashboard-mockup" className="w-full relative group">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-sky-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Frame Header with badge */}
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

      {/* The Exact Dashboard Screen from Screenshot 1 */}
      <div className="rounded-b-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
        <DashboardScreen />
      </div>

      <p className="mt-2 text-xs text-center text-slate-500 font-medium">
        תצוגת מסך אמיתית מתוך WorkLog Pro: לוח בקרה עם טיימר פעיל, יעד חודשי 33%, עוזר AI ותחזית שכר
      </p>
    </div>
  );
};
