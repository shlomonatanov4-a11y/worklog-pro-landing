import React from 'react';
import {
  Sparkles,
  Camera,
  Bot,
  User,
  Send,
  AlertTriangle,
  Zap,
} from 'lucide-react';

export const AiAssistantScreen: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-right select-none text-slate-800 font-sans p-4 sm:p-6 space-y-4">
      {/* Top Banner (1:1 with Screenshot 5) */}
      <div className="bg-gradient-to-r from-[#1e1b4b] to-[#2e1065] text-white rounded-2xl p-5 sm:p-7 shadow-lg flex flex-wrap items-center justify-between gap-4 border border-indigo-950">
        {/* Left side button: Camera Scan */}
        <div className="flex items-center gap-2 bg-[#0284c7] hover:bg-sky-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs cursor-pointer">
          <Camera className="w-4 h-4" />
          <span>צלם / סרוק דף שעות ישן</span>
        </div>

        {/* Right side text: Title & Engine badge */}
        <div className="text-right">
          <div className="text-xs text-indigo-300 font-semibold flex items-center gap-1.5 justify-end">
            <span>Gemini AI Assistant & Analytics Engine</span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-white mt-1">
            עוזר העבודה והשכר החכם שלך
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200 mt-1 max-w-xl">
            הזן שעות בטקסט חופשי, שאל שאלות על השכר שלך, זהה חריגות וטעויות וסרוק דפי שעות מצולמים.
          </p>
        </div>
      </div>

      {/* Mode Tabs (1:1 with Screenshot 5) */}
      <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
        {/* Tab 3: זיהוי טעויות וחריגות */}
        <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-slate-700 font-medium hover:bg-slate-50 cursor-pointer">
          <span className="bg-amber-500 text-white font-mono font-bold text-[10px] px-1.5 py-0.5 rounded-full">
            14
          </span>
          <span>זיהוי טעויות וחריגות</span>
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
        </div>

        {/* Tab 2: רישום שעות בטקסט חופשי */}
        <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-slate-700 font-medium hover:bg-slate-50 cursor-pointer">
          <span>רישום שעות בטקסט חופשי</span>
          <Zap className="w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Tab 1 (Active): שאל את ה-AI על הנתונים */}
        <div className="flex items-center gap-1.5 bg-[#1e293b] text-white px-4 py-2 rounded-xl font-bold shadow-xs cursor-pointer">
          <span>שאל את ה-AI על הנתונים</span>
          <Bot className="w-3.5 h-3.5 text-blue-400" />
        </div>
      </div>

      {/* Quick Questions Pills */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4">
        <div className="space-y-2">
          <span className="text-xs text-slate-500 font-medium block">שאלות נפוצות בלחיצה אחת:</span>
          <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
            <span className="px-3 py-1.5 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 rounded-full font-medium text-slate-700 cursor-pointer shadow-2xs">
              האם יש לי ימים ללא דיווח השבוע?
            </span>
            <span className="px-3 py-1.5 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 rounded-full font-medium text-slate-700 cursor-pointer shadow-2xs">
              כמה כסף חסר לי להגיע ליעד החודשי?
            </span>
            <span className="px-3 py-1.5 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 rounded-full font-medium text-slate-700 cursor-pointer shadow-2xs">
              כמה אני צפוי להרוויח עד סוף החודש?
            </span>
            <span className="px-3 py-1.5 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 rounded-full font-medium text-slate-700 cursor-pointer shadow-2xs">
              כמה שעות עבדתי השבוע?
            </span>
            <span className="px-3 py-1.5 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 rounded-full font-medium text-slate-700 cursor-pointer shadow-2xs border-blue-500 text-blue-600">
              כמה הרווחתי החודש?
            </span>
          </div>
        </div>

        {/* Chat Thread Container (1:1 with Screenshot 5) */}
        <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-slate-50/50 space-y-4 min-h-[260px]">
          {/* AI Initial Greeting */}
          <div className="flex items-start gap-3 justify-start max-w-2xl">
            <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-700 leading-relaxed shadow-2xs text-right">
              <p>
                שלום shlomo! אני ה-AI של WorkLog Pro. אני יכול לענות לך על שעות, הכנסות, תחזית שכר, לזהות טעויות ולרשום משמרות מטקסט חופשי. מה תרצה לבדוק?
              </p>
              <span className="text-[10px] text-slate-400 block mt-1 font-mono">15:32</span>
            </div>
          </div>

          {/* User Asked Question */}
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#1e3a8a] text-white rounded-2xl p-3 text-xs leading-relaxed shadow-xs text-right max-w-md">
              <p className="font-medium">כמה הרווחתי החודש?</p>
              <span className="text-[10px] text-blue-200 block mt-1 font-mono">15:32</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-xs">
              <User className="w-4 h-4" />
            </div>
          </div>

          {/* AI Calculating indicator */}
          <div className="flex items-center gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-xs text-slate-500 flex items-center gap-2 shadow-2xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span className="font-medium">ה-AI מחשב ומנתח נתונים...</span>
            </div>
          </div>
        </div>

        {/* Chat Input Bar (1:1 with Screenshot 5) */}
        <div className="flex items-center gap-2 pt-2">
          <div className="bg-[#7c8ba1] hover:bg-[#64748b] text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs">
            <Send className="w-3.5 h-3.5 rotate-180" />
            <span>שאל</span>
          </div>
          <input
            type="text"
            readOnly
            value=""
            placeholder="שאל כל שאלה על שעות העבודה, השכר, שעות נוספות, צפי לסוף החודש..."
            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-right text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
