import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ExternalLink, X, Mail, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalType(null);
      }
    };
    if (modalType) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType]);

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          {/* Brand info */}
          <div className="space-y-3">
            <Logo variant="dark" size="md" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              מערכת חכמה לניהול שעות עבודה, פרויקטים, לקוחות, הפקת דוחות PDF וחישוב שכר.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-300">
            <a
              href="https://worklog-pro-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1 text-blue-400"
            >
              <span>כניסה לאפליקציה</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors"
            >
              מדיניות פרטיות
            </button>

            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors"
            >
              תנאי שימוש
            </button>

            <button
              type="button"
              onClick={() => setModalType('contact')}
              className="hover:text-white transition-colors"
            >
              צור קשר
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} WorkLog Pro. כל הזכויות שמורות.
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md font-mono text-[11px] text-slate-400">
              גרסה 2.5.0
            </span>
            <span>מופעל בענן מאובטח • תמיכה ב-PWA</span>
          </div>
        </div>
      </div>

      {/* Info Modals */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
        >
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-right border border-slate-200">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              aria-label="סגור חלון"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <Shield className="w-5 h-5" />
                  <span>מדיניות פרטיות</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">פרטיות ואבטחת מידע</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ב-WorkLog Pro אנו מחויבים להגנה מוחלטת על פרטיות הנתונים שלכם. שעות העבודה, פרטי הלקוחות וסיכומי השכר שלכם מוצפנים ונשמרים בצורה מאובטחת. אנו לעולם איננו משתפים או מוכרים את נתוניכם לצדדים שלישיים.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm"
                  >
                    הבנתי, תודה
                  </button>
                </div>
              </div>
            )}

            {modalType === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <FileText className="w-5 h-5" />
                  <span>תנאי שימוש</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">תנאי שימוש בשירות</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  השימוש באפליקציית WorkLog Pro כפוף לשימוש הוגן ולשמירה על פרטי ההתחברות האישיים. המערכת מספקת כלים לחישוב זמנים, שכר והפקת דוחות לשירות המשתמש. כל משתמש חדש זכאי ל-14 ימי התנסות מלאים ללא התחייבות.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm"
                  >
                    אישור
                  </button>
                </div>
              </div>
            )}

            {modalType === 'contact' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <Mail className="w-5 h-5" />
                  <span>צור קשר ותמיכה</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">נשמח לעמוד לרשותכם</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  צוות WorkLog Pro זמין עבורכם לכל שאלה, משוב על האפליקציה, או סיוע בהגדרה ראשונית.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2">
                  <div className="font-bold text-slate-900">תמיכה ישירה בתוך המערכת:</div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    ניתן לשלוח משוב ולקבל תמיכה ישירה דרך עוזר ה-AI או כפתור העזרה בתוך האפליקציה.
                  </p>
                  <a
                    href="https://worklog-pro-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl border border-blue-200 transition-colors text-xs"
                  >
                    <span>פתיחת מרכז התמיכה באפליקציה</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors"
                  >
                    סגור
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
