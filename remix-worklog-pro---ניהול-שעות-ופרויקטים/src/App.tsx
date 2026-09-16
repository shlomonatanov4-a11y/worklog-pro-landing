/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { OcrSection } from './components/OcrSection';
import { AiAssistantSection } from './components/AiAssistantSection';
import { ReportsSection } from './components/ReportsSection';
import { HowItWorks } from './components/HowItWorks';
import { WhoIsItFor } from './components/WhoIsItFor';
import { BeforeAfter } from './components/BeforeAfter';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0f172a] font-sans antialiased selection:bg-[#2563eb] selection:text-white flex flex-col overflow-x-hidden">
      {/* 1. Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust / Value Strip */}
        <ValueStrip />

        {/* 4. Problem -> Solution */}
        <ProblemSolution />

        {/* 5. Features Grid */}
        <Features />

        {/* 6. Product Showcase */}
        <ProductShowcase />

        {/* 7. Smart OCR */}
        <OcrSection />

        {/* 8. AI Assistant */}
        <AiAssistantSection />

        {/* 9. Reports */}
        <ReportsSection />

        {/* 10. How It Works */}
        <HowItWorks />

        {/* 11. Who Is It For */}
        <WhoIsItFor />

        {/* 12. Before / After */}
        <BeforeAfter />

        {/* 13. Pricing */}
        <Pricing />

        {/* 14. FAQ */}
        <FaqSection />

        {/* 15. Final CTA */}
        <FinalCta />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
