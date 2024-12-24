import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import WhyFutureMindsSection from './components/WhyFutureMinds/WhyFutureMindsSection';
import InvestmentProcessSection from './components/InvestmentProcess/InvestmentProcessSection';
import ImpactSection from './components/Impact/ImpactSection';
import DealSourcingSection from './components/DealSourcing/DealSourcingSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import InvestmentPhilosophy from './components/InvestmentPhilosophy/InvestmentPhilosophy';
import SignupCTA from './components/SignupCTA/SignupCTA';
import BlogSection from './components/Blog/BlogSection';
import Footer from './components/Footer/Footer';
import InnovatorPage from './pages/InnovatorPage';
import InvestorPage from './pages/InvestorPage';
import './styles/animations.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="bg-gradient-to-b from-white to-gray-50">
                <WhyFutureMindsSection />
                <InvestmentProcessSection />
                <ImpactSection />
                <DealSourcingSection />
                <TestimonialsSection />
                <InvestmentPhilosophy />
                <SignupCTA />
                <BlogSection />
              </main>
            </>
          } />
          <Route path="/innovate" element={<InnovatorPage />} />
          <Route path="/partner" element={<InvestorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;