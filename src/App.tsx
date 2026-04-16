/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Brands />
          <Services />
          <About />
          <Gallery />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
