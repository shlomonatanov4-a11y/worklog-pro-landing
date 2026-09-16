import React from 'react';
import {
  Clock,
  Play,
  Calendar as CalendarIcon,
  Sparkles,
  Camera,
  Plus,
  FileText,
  BarChart2,
  Settings,
} from 'lucide-react';

export const AnalyticsScreen: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-right select-none text-slate-800 font-sans">
      {/* Top Application Header Bar 1 (matching app shell) */}
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
          <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">15:29:57</span>
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

      {/* Navigation Tabs Bar with 'ניתוח וגרפים' ACTIVE */}
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

          <span className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold rounded-xl whitespace-nowrap flex items-center gap-1">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>לוח שנה</span>
          </span>

          {/* Active 'ניתוח וגרפים' Tab */}
          <span className="px-3.5 py-1.5 bg-[#2563eb] text-white font-bold rounded-xl shadow-xs flex items-center gap-1.5 whitespace-nowrap">
            <BarChart2 className="w-3.5 h-3.5 text-white" />
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

      {/* Main Analytics Content (1:1 with Screenshot 3) */}
      <div className="p-3.5 sm:p-6 space-y-4">
        {/* Top 2 Cards: Donut on Left, Daily Bars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {/* Card 1: פילוח סוגי שעות (Donut Chart) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <h4 className="font-black text-slate-900 text-base">פילוח סוגי שעות</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                חלוקת שעות רגילות לעומת שעות נוספות ומיוחדות
              </p>
            </div>

            {/* SVG Donut Chart */}
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#f1f5f9"
                    strokeWidth="16"
                    fill="transparent"
                  />
                  {/* 100% blue donut segment matching screenshot */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#0284c7"
                    strokeWidth="16"
                    fill="transparent"
                    strokeDasharray="238.76"
                    strokeDashoffset="0"
                    strokeLinecap="butt"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom Legend */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
              <span className="font-mono font-bold text-slate-800">95 ש׳</span>
              <div className="flex items-center gap-1.5 text-slate-600">
                <span>שעות רגילות (100%)</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]"></span>
              </div>
            </div>
          </div>

          {/* Card 2: התפלגות שעות עבודה יומיות (ספטמבר) (Bar Chart with Overtime) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="text-right">
              <h4 className="font-black text-slate-900 text-base">
                התפלגות שעות עבודה יומיות (ספטמבר)
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                שעות רגילות מול שעות נוספות לפי ימי החודש
              </p>
            </div>

            {/* Custom SVG Bar Chart matching Screenshot 3 */}
            <div className="w-full h-52 sm:h-56 relative pt-4">
              <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                {/* Horizontal Grid lines at 20, 40, 60, 80 */}
                <line x1="40" y1="20" x2="680" y2="20" stroke="#f1f5f9" strokeDasharray="3 3" />
                <text x="25" y="24" fill="#94a3b8" fontSize="11" textAnchor="end">80</text>

                <line x1="40" y1="60" x2="680" y2="60" stroke="#f1f5f9" strokeDasharray="3 3" />
                <text x="25" y="64" fill="#94a3b8" fontSize="11" textAnchor="end">60</text>

                <line x1="40" y1="100" x2="680" y2="100" stroke="#f1f5f9" strokeDasharray="3 3" />
                <text x="25" y="104" fill="#94a3b8" fontSize="11" textAnchor="end">40</text>

                <line x1="40" y1="140" x2="680" y2="140" stroke="#f1f5f9" strokeDasharray="3 3" />
                <text x="25" y="144" fill="#94a3b8" fontSize="11" textAnchor="end">20</text>

                <line x1="40" y1="180" x2="680" y2="180" stroke="#cbd5e1" strokeWidth="1" />
                <text x="25" y="184" fill="#94a3b8" fontSize="11" textAnchor="end">0</text>

                {/* Bars for days 1 to 30 */}
                {/* Day 1: 8h */}
                <rect x="58" y="164" width="14" height="16" fill="#0284c7" rx="1" />

                {/* Day 6: 8h */}
                <rect x="168" y="164" width="14" height="16" fill="#0284c7" rx="1" />

                {/* Day 8: 8h */}
                <rect x="212" y="164" width="14" height="16" fill="#0284c7" rx="1" />

                {/* Day 9: 8h */}
                <rect x="234" y="164" width="14" height="16" fill="#0284c7" rx="1" />

                {/* Day 10: Stacked bar (64h blue + 16h orange = 80h total) */}
                <rect x="256" y="52" width="14" height="128" fill="#0284c7" />
                <rect x="256" y="20" width="14" height="32" fill="#f59e0b" rx="2" />

                {/* X Axis Day Labels 1..30 */}
                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                  <text
                    key={day}
                    x={65 + (day - 1) * 21.2}
                    y="195"
                    fill="#64748b"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    {day}
                  </text>
                ))}
              </svg>
            </div>

            {/* Legend matching Screenshot 3 */}
            <div className="flex items-center justify-center gap-6 pt-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-3 h-3 rounded-[2px] bg-[#f59e0b]"></span>
                <span className="font-medium">שעות נוספות</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-3 h-3 rounded-[2px] bg-[#0284c7]"></span>
                <span className="font-medium">שעות רגילות</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wide Card: צבירת הכנסה לאורך ימי החודש (Area Chart) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-2xs space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="text-left font-mono">
              <span className="text-[11px] text-slate-400 block font-sans">סך הכנסה מצטברת:</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900">₪12,450.00</span>
            </div>

            <div className="text-right">
              <h4 className="font-black text-slate-900 text-base sm:text-lg">
                צבירת הכנסה לאורך ימי החודש (ספטמבר)
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                קצב הצבירה הכספי לעבר יעד ההכנסה החודשי (18,000.00 ₪)
              </p>
            </div>
          </div>

          {/* Area Chart matching Screenshot 3 */}
          <div className="w-full h-56 sm:h-64 relative pt-2">
            <svg className="w-full h-full" viewBox="0 0 800 220" preserveAspectRatio="none">
              <defs>
                <linearGradient id="incomeAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Horizontal Guides */}
              <line x1="50" y1="20" x2="780" y2="20" stroke="#f1f5f9" strokeDasharray="3 3" />
              <text x="35" y="24" fill="#94a3b8" fontSize="10" textAnchor="end">14000</text>

              <line x1="50" y1="65" x2="780" y2="65" stroke="#f1f5f9" strokeDasharray="3 3" />
              <text x="35" y="69" fill="#94a3b8" fontSize="10" textAnchor="end">10500</text>

              <line x1="50" y1="110" x2="780" y2="110" stroke="#f1f5f9" strokeDasharray="3 3" />
              <text x="35" y="114" fill="#94a3b8" fontSize="10" textAnchor="end">7000</text>

              <line x1="50" y1="155" x2="780" y2="155" stroke="#f1f5f9" strokeDasharray="3 3" />
              <text x="35" y="159" fill="#94a3b8" fontSize="10" textAnchor="end">3500</text>

              <line x1="50" y1="200" x2="780" y2="200" stroke="#cbd5e1" strokeWidth="1" />
              <text x="35" y="204" fill="#94a3b8" fontSize="10" textAnchor="end">0</text>

              {/* Area Polygon */}
              <polygon
                points="
                  50,200 
                  75,200 
                  150,200 
                  175,185 
                  225,185 
                  250,170 
                  275,155 
                  300,40 
                  780,40 
                  780,200
                "
                fill="url(#incomeAreaGrad)"
              />

              {/* Top smooth curve stroke */}
              <polyline
                points="
                  50,200 
                  75,200 
                  150,200 
                  175,185 
                  225,185 
                  250,170 
                  275,155 
                  300,40 
                  780,40
                "
                fill="none"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* X Axis Labels 1..30 */}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <text
                  key={day}
                  x={50 + (day - 1) * 25.1}
                  y="214"
                  fill="#64748b"
                  fontSize="9"
                  textAnchor="middle"
                >
                  {day}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
