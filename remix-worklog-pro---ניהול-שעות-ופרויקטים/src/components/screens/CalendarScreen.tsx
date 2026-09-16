import React from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Camera,
  Plus,
  BarChart2,
  FileText,
  Sparkles,
  Settings,
  AlertCircle,
} from 'lucide-react';

export const CalendarScreen: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-right select-none text-slate-800 font-sans">
      {/* Top Application Header Bar 1 (matching Screenshot 2: 15:27:45) */}
      <div className="bg-white px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-200 flex items-center justify-between gap-2">
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

        <div className="hidden md:flex items-center gap-2 bg-[#f8fafc] border border-slate-200 px-3.5 py-1.5 rounded-full text-xs text-slate-600 font-medium">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>יום חמישי, 10 בספטמבר</span>
          <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">15:27:45</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 bg-[#2563eb] text-white font-bold text-xs px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-xs">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xs:inline">התחל עבודה</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 font-semibold text-xs px-2.5 py-1.5 rounded-xl">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>סריקת דף</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 bg-[#1e293b] text-white font-bold text-xs px-2.5 py-1.5 rounded-xl">
            <Plus className="w-3.5 h-3.5" />
            <span>הוסף שעות</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-xs">
            <span className="w-5 h-5 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold text-[10px]">
              S
            </span>
            <div className="hidden sm:block text-right">
              <span className="font-bold text-slate-900 text-xs block leading-none">שלום, shlomo</span>
              <span className="text-[9px] text-emerald-600 font-semibold leading-none">מנוי פעיל</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar with 'לוח שנה' ACTIVE */}
      <div className="bg-white px-3 sm:px-6 py-2 border-b border-slate-200 flex items-center justify-between text-xs overflow-x-auto scrollbar-none gap-2">
        <div className="flex items-center gap-1.5 flex-nowrap">
          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap flex items-center gap-1">
            <span className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5 opacity-60">
              <span className="bg-slate-600 rounded-[1px]"></span>
              <span className="bg-slate-600 rounded-[1px]"></span>
              <span className="bg-slate-600 rounded-[1px]"></span>
              <span className="bg-slate-600 rounded-[1px]"></span>
            </span>
            <span>לוח בקרה</span>
          </span>

          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>יומן שעות</span>
          </span>

          {/* Active 'לוח שנה' Tab */}
          <span className="px-3.5 py-1.5 bg-[#2563eb] text-white font-bold rounded-xl shadow-xs flex items-center gap-1.5 whitespace-nowrap">
            <CalendarIcon className="w-3.5 h-3.5 text-white" />
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
            <Sparkles className="w-3 h-3 text-indigo-600" />
            <span>עוזר AI חכם</span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-500 hover:text-slate-800 text-xs px-2 py-1">
            <Settings className="w-3.5 h-3.5" />
            <span>הגדרות</span>
          </div>
        </div>
      </div>

      {/* Main Calendar View Body matching Screenshot 2 */}
      <div className="p-3.5 sm:p-6 space-y-4">
        {/* Title Header with Month Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563eb] border border-blue-200 flex items-center justify-center">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                לוח שנה ונוכחות - ספטמבר 2026
              </h3>
              <p className="text-xs text-slate-500">
                מעקב חזותי אחר ימי עבודה, היעדרויות, חופשות וחוסרים בדיווח
              </p>
            </div>
          </div>

          {/* Month Navigator */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center bg-white border border-slate-200 rounded-xl px-2 py-1 gap-2 shadow-2xs">
              <button type="button" className="p-1 hover:bg-slate-100 rounded">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              </button>
              <span className="font-mono font-bold text-slate-800 px-1">2026 / 09</span>
              <button type="button" className="p-1 hover:bg-slate-100 rounded">
                <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
              </button>
            </div>
            <button
              type="button"
              className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-bold text-slate-700 hover:bg-slate-50 shadow-2xs"
            >
              היום
            </button>
          </div>
        </div>

        {/* 4 Summary Stat Cards Row (1:1 with Screenshot 2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {/* Card 1: ימי עבודה שדווחו */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">ימי עבודה שדווחו</span>
              <div className="text-sm sm:text-base font-black text-slate-900 font-mono mt-0.5">
                5 ימים <span className="text-xs text-slate-600 font-normal">(95:00 ש׳)</span>
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></span>
          </div>

          {/* Card 2: ימים ללא דיווח */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">ימים ללא דיווח</span>
              <div className="text-sm sm:text-base font-black text-amber-600 font-mono mt-0.5">
                3 ימים
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-amber-400 ring-4 ring-amber-50"></span>
          </div>

          {/* Card 3: חופשה / מחלה */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">חופשה / מחלה</span>
              <div className="text-sm sm:text-base font-black text-blue-600 font-mono mt-0.5">
                0 ימים
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-[#2563eb] ring-4 ring-blue-50"></span>
          </div>

          {/* Card 4: סך הכנסה החודש */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-3.5 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">סך הכנסה החודש</span>
              <div className="text-sm sm:text-base font-black text-slate-900 font-sans mt-0.5">
                ₪12,450.00
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-slate-300 ring-4 ring-slate-100"></span>
          </div>
        </div>

        {/* Large Monthly Calendar Table (matching Screenshot 2 structure exactly) */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
          {/* Calendar Table Header Days (ראשון through שבת) */}
          <div className="grid grid-cols-7 border-b border-slate-200 text-center text-xs font-bold text-slate-700 bg-slate-50 py-2.5">
            <span>ראשון</span>
            <span>שני</span>
            <span>שלישי</span>
            <span>רביעי</span>
            <span>חמישי</span>
            <span>שישי</span>
            <span>שבת</span>
          </div>

          {/* Calendar Grid Cells */}
          <div className="grid grid-cols-7 border-collapse text-xs divide-x divide-y divide-slate-100">
            {/* Row 1: Days 1-5 */}
            {/* Empty slots for Sun, Mon */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-slate-50/40"></div>
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-slate-50/40"></div>

            {/* Day 1 (Tuesday): 8:00 hours, 960.00 */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-emerald-50/20 border-r border-slate-100">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-slate-900 text-xs">1</span>
              </div>
              <div className="mt-2 text-right">
                <span className="block font-bold text-slate-800 text-[11px]">8:00 שעות</span>
                <span className="text-[10px] text-slate-500 font-sans">₪960.00</span>
              </div>
            </div>

            {/* Day 2 (Wednesday): Missing report */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-amber-50/20 border-r border-slate-100">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-bold text-slate-900 text-xs">2</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] text-amber-700 font-semibold flex items-center gap-0.5">
                  <AlertCircle className="w-2.5 h-2.5" />
                  חסר דיווח
                </span>
              </div>
            </div>

            {/* Day 3 (Thursday): Missing report */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-amber-50/20 border-r border-slate-100">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-bold text-slate-900 text-xs">3</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] text-amber-700 font-semibold flex items-center gap-0.5">
                  <AlertCircle className="w-2.5 h-2.5" />
                  חסר דיווח
                </span>
              </div>
            </div>

            {/* Day 4 (Friday): Weekend */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-slate-50/60 border-r border-slate-100 text-slate-400">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="font-bold text-xs">4</span>
              </div>
              <div className="mt-2 text-right text-[10px]">סופ״ש</div>
            </div>

            {/* Day 5 (Saturday): Weekend */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-slate-50/60 border-r border-slate-100 text-slate-400">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span className="font-bold text-xs">5</span>
              </div>
              <div className="mt-2 text-right text-[10px]">סופ״ש</div>
            </div>

            {/* Row 2: Days 6-12 */}
            {/* Day 6 (Sunday): 8:00 hours, 960.00 */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-emerald-50/20">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-slate-900 text-xs">6</span>
              </div>
              <div className="mt-2 text-right">
                <span className="block font-bold text-slate-800 text-[11px]">8:00 שעות</span>
                <span className="text-[10px] text-slate-500">₪960.00</span>
              </div>
            </div>

            {/* Day 7 (Monday): Missing report */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-amber-50/20">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-bold text-slate-900 text-xs">7</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] text-amber-700 font-semibold flex items-center gap-0.5">
                  <AlertCircle className="w-2.5 h-2.5" />
                  חסר דיווח
                </span>
              </div>
            </div>

            {/* Day 8 (Tuesday): 8:00 hours */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-emerald-50/20">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-slate-900 text-xs">8</span>
              </div>
              <div className="mt-2 text-right">
                <span className="block font-bold text-slate-800 text-[11px]">8:00 שעות</span>
                <span className="text-[10px] text-slate-500">₪960.00</span>
              </div>
            </div>

            {/* Day 9 (Wednesday): 8:00 hours */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-emerald-50/20">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-slate-900 text-xs">9</span>
              </div>
              <div className="mt-2 text-right">
                <span className="block font-bold text-slate-800 text-[11px]">8:00 שעות</span>
                <span className="text-[10px] text-slate-500">₪960.00</span>
              </div>
            </div>

            {/* Day 10 (Thursday) - ACTIVE TODAY IN SCREENSHOT 2 */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-blue-50/60 border-2 border-[#2563eb] rounded-lg shadow-inner">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="bg-[#2563eb] text-white px-2 py-0.5 rounded-full font-bold text-[10px] shadow-2xs">
                  10 היום
                </span>
              </div>
              <div className="mt-2 text-right">
                <span className="block font-black text-slate-900 text-xs">63:00 שעות</span>
                <span className="text-[10px] text-slate-700 font-bold font-sans">₪8,610.00</span>
              </div>
            </div>

            {/* Day 11 (Friday) */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-slate-50/40 text-slate-400">
              <div className="flex items-center justify-end">
                <span className="font-bold text-xs">11</span>
              </div>
            </div>

            {/* Day 12 (Saturday) */}
            <div className="min-h-[72px] sm:min-h-[85px] p-2 bg-slate-50/40 text-slate-400">
              <div className="flex items-center justify-end">
                <span className="font-bold text-xs">12</span>
              </div>
            </div>

            {/* Row 3: Days 13-19 */}
            {[13, 14, 15, 16, 17, 18, 19].map((day) => (
              <div key={day} className="min-h-[60px] p-2 text-slate-400">
                <div className="flex items-center justify-end">
                  <span className="font-bold text-xs">{day}</span>
                </div>
              </div>
            ))}

            {/* Row 4: Days 20-26 */}
            {[20, 21, 22, 23, 24, 25, 26].map((day) => (
              <div key={day} className="min-h-[60px] p-2 text-slate-400">
                <div className="flex items-center justify-end">
                  <span className="font-bold text-xs">{day}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
