import React from 'react';
import { Clock, DollarSign, BarChart3, Cloud, Bot } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const items = [
    { icon: Clock, label: 'מעקב שעות', desc: 'טיימר מדויק וחיוב בזמן אמת', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: DollarSign, label: 'הכנסות', desc: 'חישוב שכר ותעריפי פרויקט', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: BarChart3, label: 'דוחות', desc: 'הפקת PDF עם לוגו וחתימה', color: 'text-rose-600', bg: 'bg-rose-50' },
    { icon: Cloud, label: 'גיבוי ענן', desc: 'אוטומטי ביציאה ומכל מכשיר', color: 'text-sky-600', bg: 'bg-sky-50' },
    { icon: Bot, label: 'AI חכם', desc: 'תחזיות, ניתוח וייעוץ שכר', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <section className="py-6 sm:py-8 border-y border-slate-200/80 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 flex items-center gap-3 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 border border-slate-100`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
