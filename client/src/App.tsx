import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import Navigation from './components/ui/Navigation';
import Footer from './components/sections/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import NotFound from './pages/not-found';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Create a proper HomePage component
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WorkAreas from './components/sections/WorkAreas';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';

const HomePage = () => (
  <div>
    <Hero />
    <About />
    <WorkAreas />
    <Testimonials />
    <Blog />
  </div>
);

// Lazy load other pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-black text-white">
            <Navigation />
            <main className="pt-16">
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/our-work" element={<OurWorkPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;