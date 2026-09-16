import React from 'react';
import {
  Clock,
  Play,
  Calendar as CalendarIcon,
  Sparkles,
  Camera,
  Plus,
  FileText,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Trash2,
  BarChart2,
  Settings,
  PenSquare,
  Lightbulb,
  Bot,
} from 'lucide-react';

export const DashboardScreen: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-right select-none text-slate-800 font-sans">
      {/* Top Application Header Bar (Exact 1:1 with Screenshot: WorkLogPro on RIGHT, Actions on LEFT) */}
      <div className="bg-white px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-200 flex items-center justify-between gap-2">
        {/* Right side in RTL: Brand Logo + Name */}
        <div className="flex items-center gap-2.5">
          <img
            src="/app-logo.png"
            alt="WorkLogPro"
            className="w-8 h-8 rounded-lg object-contain bg-slate-950 p-1 shadow-xs"
          />
          <div className="text-right">
            <div className="font-black text-sm sm:text-base leading-tight tracking-tight">
              <span className="text-slate-900 font-extrabold">WorkLog</span>
              <span className="text-[#2563eb] font-extrabold">Pro</span>
            </div>
            <div className="text-[10px] text-slate-500 font-normal">ניהול שעות ופרויקטים</div>
          </div>
        </div>

        {/* Center: Live Date & Clock Pill (Exact screenshot: יום רביעי, 16 בספטמבר 18:18:27) */}
        <div className="hidden md:flex items-center gap-2 bg-[#f8fafc] border border-slate-200 px-3.5 py-1.5 rounded-full text-xs text-slate-600 font-medium">
          <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
            <Clock className="w-3 h-3 text-blue-600" />
          </div>
          <span>יום רביעי, 16 בספטמבר</span>
          <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">18:18:27</span>
        </div>

        {/* Left side in RTL: Action Buttons & User Status */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Blue 'Start Work' Button */}
          <div className="flex items-center gap-1.5 bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-xs transition-colors">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xs:inline">התחל עבודה</span>
          </div>

          {/* 'Scan Document' Button */}
          <div className="hidden sm:flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 font-semibold text-xs px-2.5 py-1.5 rounded-xl hover:bg-slate-50">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>סריקת דף</span>
          </div>

          {/* 'Add Hours' Button */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#1e293b] text-white font-bold text-xs px-2.5 py-1.5 rounded-xl">
            <Plus className="w-3.5 h-3.5" />
            <span>הוסף שעות</span>
          </div>

          {/* User Profile Pill */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-xs">
            <div className="relative">
              <span className="w-5 h-5 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[10px]">
                S
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white"></span>
            </div>
            <div className="hidden sm:block text-right">
              <span className="font-bold text-slate-900 text-xs block leading-none">שלום, shlomo 👋</span>
              <span className="text-[9px] text-emerald-600 font-semibold leading-none">מנוי פעיל</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Nav Bar: Navigation Tabs (Right to Left: לוח בקרה, יומן שעות, לוח שנה, ניתוח, PDF, AI, הגדרות) */}
      <div className="bg-white px-3 sm:px-6 py-2 border-b border-slate-200 flex items-center justify-between text-xs overflow-x-auto scrollbar-none gap-2">
        <div className="flex items-center gap-1.5 flex-nowrap">
          {/* Active 'לוח בקרה' on the RIGHT */}
          <span className="px-3.5 py-1.5 bg-[#2563eb] text-white font-bold rounded-xl shadow-xs flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5">
              <span className="bg-white rounded-[1px]"></span>
              <span className="bg-white rounded-[1px]"></span>
              <span className="bg-white rounded-[1px]"></span>
              <span className="bg-white rounded-[1px]"></span>
            </span>
            <span>לוח בקרה</span>
          </span>

          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>יומן שעות</span>
          </span>

          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap flex items-center gap-1">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>לוח שנה</span>
          </span>

          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap hidden sm:flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
            <span>ניתוח וגרפים</span>
          </span>

          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap hidden md:flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>הפקת דוח PDF</span>
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 bg-indigo-50/80 text-indigo-700 border border-indigo-200/80 px-2.5 py-1 rounded-xl text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>עוזר AI חכם</span>
            <Sparkles className="w-3 h-3 text-indigo-600" />
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-500 hover:text-slate-800 text-xs px-2 py-1">
            <Settings className="w-3.5 h-3.5" />
            <span>הגדרות</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout (Exact 1:1 with Screenshot: Metrics & Timer on RIGHT, Calendar & AI on LEFT) */}
      <div className="p-3.5 sm:p-5 bg-[#f8fafc]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start">
          {/* =========================================================================
              RIGHT AREA (lg:col-span-8): FIRST child in DOM so it sits on the RIGHT in RTL
              Includes: 3 Metric Cards + Monthly Target Progress + Timer & Forecast
              ========================================================================= */}
          <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
            {/* Top 3 Metric Cards: שעות היום (Right), הכנסה היום (Middle), הכנסה חודשית (Left) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Card 1 (Right): שעות היום */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs text-center">
                <span className="text-xs text-slate-500 font-medium block mb-1">שעות היום</span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tabular-nums">
                  8:30
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  12:45 ש׳ מהממוצע
                </div>
              </div>

              {/* Card 2 (Middle): הכנסה היום (Signature Dark Blue Card from Screenshot) */}
              <div className="bg-[#1e3a8a] text-white rounded-2xl p-4 shadow-md text-center border border-blue-900">
                <span className="text-xs text-blue-200 font-medium block mb-1">הכנסה היום</span>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans tabular-nums">
                  ₪1,020.00
                </div>
                <div className="text-[11px] text-blue-200 font-medium mt-1">
                  לפי תעריף 120 ₪/שעה
                </div>
              </div>

              {/* Card 3 (Left): הכנסה חודשית */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs text-center">
                <span className="text-xs text-slate-500 font-medium block mb-1">הכנסה חודשית</span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tabular-nums">
                  ₪5,990.00
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  12 ימי עבודה מתוך 22
                </div>
              </div>
            </div>

            {/* Monthly Target Progress Card (33% matching exact screenshot) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2.5">
                <div className="text-right">
                  <span className="text-sm sm:text-base font-black text-slate-900 block">התקדמות יעד חודשי</span>
                  <span className="text-slate-500 font-normal text-xs">
                    נותרו עוד 12,010.00 ₪ ליעד של 18,000.00 ₪
                  </span>
                </div>
                <span className="text-[#2563eb] font-black text-2xl sm:text-3xl font-sans">33%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-[#2563eb] h-full rounded-full w-[33%] transition-all duration-500 shadow-xs"></div>
              </div>
            </div>

            {/* Bottom Row: Timer (Right in RTL) & Forecast (Left in RTL) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Right Card in RTL: דיווחי נוכחות ומדידת זמן (Circular Timer + Button) */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col items-center justify-between text-center space-y-3">
                <div className="w-full flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 text-sm">דיווחי נוכחות ומדידת זמן</span>
                  <span className="text-slate-400 text-xs">ממתין להתחלה</span>
                </div>

                {/* Circular Gauge matching Screenshot: Light mint ring, READY, 00:00:00 */}
                <div className="relative w-32 h-32 flex flex-col items-center justify-center rounded-full border-4 border-emerald-300 bg-emerald-50/50 my-2 shadow-inner">
                  <span className="text-[11px] font-black text-slate-400 tracking-wider">READY</span>
                  <span className="font-mono text-xl sm:text-2xl font-black text-slate-900">00:00:00</span>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>התחל עבודה</span>
                </button>
              </div>

              {/* Left Card in RTL: תחזית חודשית (AI Analysis & PDF button) */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-slate-900">תחזית חודשית</h4>
                    <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold tracking-wide">
                      AI ANALYSIS
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-500">צפי הכנסה סוף חודש</span>
                      <span className="font-bold text-slate-900 font-sans text-sm">₪10,981.67</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-500">שעות עבודה נותרות</span>
                      <span className="font-bold text-slate-900 font-mono">85:00 ש׳</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-500">סטטוס יעד</span>
                      <span className="font-bold text-[#2563eb]">בקצב (33%)</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 bg-blue-50/70 hover:bg-blue-100/70 text-[#2563eb] border border-blue-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border-dashed mt-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>הפק דוח חודשי ל-PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              LEFT AREA (lg:col-span-4): SECOND child in DOM so it sits on the LEFT in RTL
              Includes: Mini Calendar + Dark AI Chat Assistant Widget
              ========================================================================= */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            {/* 1. Mini Calendar (September 2026: Day 10 light-green, Day 16 blue) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs">
              <div className="flex items-center justify-between mb-3 text-xs">
                {/* Right side in RTL: Title */}
                <span className="font-bold text-slate-900 text-sm">ספטמבר 2026</span>
                {/* Left side in RTL: Nav buttons */}
                <div className="flex items-center gap-1">
                  <button type="button" aria-label="חודש קודם" className="w-6 h-6 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-50">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" aria-label="חודש הבא" className="w-6 h-6 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-50">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Days of week headers (Right to Left: א, ב, ג, ד, ה, ו, ש) */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-slate-400 font-semibold mb-1">
                <span>א</span>
                <span>ב</span>
                <span>ג</span>
                <span>ד</span>
                <span>ה</span>
                <span>ו</span>
                <span>ש</span>
              </div>

              {/* Day numbers grid matching exact screenshot */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {/* Row 1 */}
                <span className="py-1"></span>
                <span className="py-1"></span>
                <span className="py-1 text-slate-700">1</span>
                <span className="py-1 text-slate-700">2</span>
                <span className="py-1 text-slate-700">3</span>
                <span className="py-1 text-slate-400">4</span>
                <span className="py-1 text-slate-400">5</span>

                {/* Row 2 */}
                <span className="py-1 text-slate-700">6</span>
                <span className="py-1 text-slate-700">7</span>
                <span className="py-1 text-slate-700">8</span>
                <span className="py-1 text-slate-700">9</span>
                {/* Day 10 with light green circle badge */}
                <div className="py-1 flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                    10
                  </span>
                </div>
                <span className="py-1 text-slate-400">11</span>
                <span className="py-1 text-slate-400">12</span>

                {/* Row 3 */}
                <span className="py-1 text-slate-700">13</span>
                <span className="py-1 text-slate-700">14</span>
                <span className="py-1 text-slate-700">15</span>
                {/* Day 16 highlighted in solid blue circle (today in screenshot) */}
                <div className="py-1 flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full bg-[#2563eb] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                    16
                  </span>
                </div>
                <span className="py-1 text-slate-700">17</span>
                <span className="py-1 text-slate-400">18</span>
                <span className="py-1 text-slate-400">19</span>

                {/* Row 4 */}
                <span className="py-1 text-slate-700">20</span>
                <span className="py-1 text-slate-700">21</span>
                <span className="py-1 text-slate-700">22</span>
                <span className="py-1 text-slate-700">23</span>
                <span className="py-1 text-slate-700">24</span>
                <span className="py-1 text-slate-400">25</span>
                <span className="py-1 text-slate-400">26</span>

                {/* Row 5 */}
                <span className="py-1 text-slate-700">27</span>
                <span className="py-1 text-slate-700">28</span>
                <span className="py-1 text-slate-700">29</span>
                <span className="py-1 text-slate-700">30</span>
              </div>
            </div>

            {/* 2. Mini AI Assistant Widget (Dark Theme matching exact screenshot) */}
            <div className="bg-[#0b132b] text-white rounded-2xl p-3.5 sm:p-4 shadow-lg border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                {/* Right side in RTL: Title & pulsing indicator */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-bold text-xs text-white">עוזר AI חכם ויועץ</span>
                  <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                </div>
                {/* Left side in RTL: Window Controls */}
                <div className="flex items-center gap-2 text-slate-400">
                  <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Trash2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                זיהוי מהיר בין שאלה, התייעצות ורישום שעות
              </p>

              {/* Mode Buttons Row matching exact screenshot */}
              <div className="flex flex-wrap items-center gap-1 text-[11px] font-semibold">
                <span className="text-slate-400 ml-1 text-[10px]">מצב:</span>
                <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[10px] flex items-center gap-1">
                  <PenSquare className="w-2.5 h-2.5" />
                  <span>כתיבה חופשית</span>
                </span>
                <span className="px-2 py-0.5 bg-[#2563eb] text-white rounded-md text-[10px] font-bold flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>זיהוי חכם</span>
                </span>
                <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[10px] flex items-center gap-1">
                  <Lightbulb className="w-2.5 h-2.5 text-amber-400" />
                  <span>התייעצות</span>
                </span>
                <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[10px] flex items-center gap-1">
                  <Bot className="w-2.5 h-2.5 text-purple-400" />
                  <span>שעות ללקוח</span>
                </span>
              </div>

              {/* Chat Message Bubble */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 text-xs space-y-1">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-blue-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    עוזר אישי חכם
                  </span>
                  <span>13:16</span>
                </div>
                <p className="text-slate-200 text-[11px] leading-relaxed">
                  שלום! אני Shlomo העוזר והיועץ החכם שלך. תוכל לבקש ממני:
                </p>
                <div className="text-[10px] text-indigo-300 font-medium bg-slate-800/60 p-1.5 rounded-lg border border-slate-700/60">
                  🟣 להוסיף שעות ללקוח (למשל: "הוסף 4 שעות...")
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
