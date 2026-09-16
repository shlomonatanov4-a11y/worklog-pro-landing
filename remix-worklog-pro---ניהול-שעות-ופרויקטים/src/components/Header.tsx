import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from '../types';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { id: 'how-it-works', label: 'איך זה עובד', href: '#how-it-works' },
    { id: 'features', label: 'יכולות', href: '#features' },
    { id: 'who-is-it-for', label: 'למי זה מתאים', href: '#who-is-it-for' },
    { id: 'pricing', label: 'מחיר', href: '#pricing' },
    { id: 'faq', label: 'שאלות נפוצות', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="header-nav"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#f8fafc]/95 backdrop-blur-md shadow-xs border-b border-slate-200'
          : 'bg-[#f8fafc]/80 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Right: Brand Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2" aria-label="WorkLog Pro דף בית">
              <Logo size="md" />
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563eb] hover:bg-slate-100/80 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Left: Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-login-btn"
              href="https://worklog-pro-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-700 hover:text-slate-950 px-3.5 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <span>כניסה לאפליקציה</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              id="header-cta-btn"
              href="https://worklog-pro-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563eb] hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all inline-flex items-center gap-1.5"
            >
              <span>התחילו עכשיו</span>
              <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="https://worklog-pro-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563eb] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              התחילו עכשיו
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="פתח תפריט ניווט"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-slate-950/40 backdrop-blur-xs z-40 sm:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="sm:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl relative z-50 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#2563eb] rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://worklog-pro-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-[#2563eb] text-white font-bold rounded-xl shadow-xs hover:bg-blue-700 transition-colors"
              >
                התחילו עכשיו — 14 ימים חינם
              </a>
              <a
                href="https://worklog-pro-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-slate-700 font-semibold bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
              >
                כניסה לאפליקציה
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
