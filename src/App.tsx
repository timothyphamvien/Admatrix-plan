/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseDetailExplorer from './components/CourseDetailExplorer';
import MarketingFunnel from './components/MarketingFunnel';
import OnlineCourseStrategy from './components/OnlineCourseStrategy';
import TransformationRoadmap from './components/TransformationRoadmap';
import ServicesGrid from './components/ServicesGrid';
import StrategySection from './components/StrategySection';
import MarketingStrategy from './components/MarketingStrategy';
import PartnerProgram from './components/PartnerProgram';
import FinancialSection from './components/FinancialSection';
import TeamStructure from './components/TeamStructure';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import ImplementationUseCases from './components/ImplementationUseCases';
import FloatingDownloadButton from './components/FloatingDownloadButton';
import CookieConsent from './components/CookieConsent';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="landing-content">
        <div data-pdf-section="Hero & Overview"><Hero /></div>
        <div data-pdf-section="Marketing Funnel Architecture"><MarketingFunnel /></div>
        <div data-pdf-section="Course Portfolio Explorer"><CourseDetailExplorer /></div>
        <div data-pdf-section="Online Course Strategy"><OnlineCourseStrategy /></div>
        <div data-pdf-section="Transformation Roadmap"><TransformationRoadmap /></div>
        <div data-pdf-section="Core Services Ecosystem"><ServicesGrid /></div>
        <div data-pdf-section="Strategic AI Pillars"><StrategySection /></div>
        <div data-pdf-section="Marketing & Growth Strategy"><MarketingStrategy /></div>
        <div data-pdf-section="Live Implementation Use Cases"><ImplementationUseCases /></div>
        <div data-pdf-section="Partner Program Structure"><PartnerProgram /></div>
        <div data-pdf-section="Financial & ROI Analysis"><FinancialSection /></div>
        <div data-pdf-section="Internal Team Organization"><TeamStructure /></div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        <FloatingDownloadButton />
        <CookieConsent />
      </div>
    </Router>
  );
}
