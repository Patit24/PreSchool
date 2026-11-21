import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SchoolVisitModal from './components/SchoolVisitModal';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [initialProgram, setInitialProgram] = useState('');

  const handleOpenVisitModal = (prog = '') => {
    setInitialProgram(typeof prog === 'string' ? prog : '');
    setIsVisitModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />

      <div className="min-h-screen flex flex-col bg-cream-100 text-navy font-body antialiased">
        {/* Top Announcement Bar */}
        <AnnouncementBar onOpenVisitModal={() => handleOpenVisitModal()} />

        {/* Sticky Navbar */}
        <Navbar onOpenVisitModal={() => handleOpenVisitModal()} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenVisitModal={handleOpenVisitModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenVisitModal={handleOpenVisitModal} />}
            />
            <Route
              path="/programs"
              element={<ProgramsPage onOpenVisitModal={handleOpenVisitModal} />}
            />
            <Route
              path="/activities"
              element={<ActivitiesPage onOpenVisitModal={handleOpenVisitModal} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenVisitModal={handleOpenVisitModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenVisitModal={() => handleOpenVisitModal()} />

        {/* Global School Visit Modal */}
        <SchoolVisitModal
          isOpen={isVisitModalOpen}
          initialProgram={initialProgram}
          onClose={() => {
            setIsVisitModalOpen(false);
            setInitialProgram('');
          }}
        />

        {/* Floating WhatsApp Quick Action */}
        <FloatingWhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
