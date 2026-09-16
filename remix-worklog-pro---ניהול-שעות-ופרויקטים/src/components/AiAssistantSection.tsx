import React from 'react';
import { Sparkles, Bot, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AiAssistantScreen } from './screens/AiAssistantScreen';

export const AiAssistantSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200" id="ai-assistant-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            בינה מלאכותית מבית Gemini
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            עוזר עבודה אישי שחושב יחד איתכם
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            שאלו כל שאלה בשפה טבעית, רשמו שעות ללא טפסים מסורבלים, וקבלו התראות אוטומטיות על חוסרים וחריגות בדיווח.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 text-right shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-2">
              <Bot className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">שאלות ותשובות על הנתונים</h4>
            <p className="text-xs text-slate-600 mt-1">
              "כמה הרווחתי החודש?", "כמה שעות עבדתי השבוע?" — תשובות מיידיות ומחושבות בלחיצת כפתור.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 text-right shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-2">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">זיהוי טעויות וחריגות</h4>
            <p className="text-xs text-slate-600 mt-1">
              האלגוריתם מתריע על משמרות כפולות, שעות לא הגיוניות, או ימים שבהם נשכח דיווח נוכחות.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 text-right shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-2">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">רישום שעות בטקסט חופשי</h4>
            <p className="text-xs text-slate-600 mt-1">
              כתבו "עבדתי היום 5 שעות אצל משה" — והמערכת תיצור את המשמרת המדויקת עם חישוב השכר במקום.
            </p>
          </div>
        </div>

        {/* The Exact AI Assistant Screen from Screenshot 5 */}
        <div className="relative group max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-t-2xl flex items-center justify-between text-xs border border-b-0 border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-[11px] text-slate-400 font-mono mr-2 hidden sm:inline">
                WorkLog Pro • עוזר AI חכם ויועץ שעות
              </span>
            </div>
            <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span>● מסך מערכת אמיתי</span>
            </div>
          </div>
          <AiAssistantScreen />
        </div>

        <p className="text-xs text-center text-slate-500 font-medium">
          צילום מסך מתוך המערכת: עוזר ה-AI החכם עם שאלה על הכנסה חודשית, שאלות נפוצות וזיהוי חריגות
        </p>
      </div>
    </section>
  );
};
