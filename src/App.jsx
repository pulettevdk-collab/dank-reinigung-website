import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const Impressum = lazy(() => import('./pages/Impressum'));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#5aec8b] border-t-transparent"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
