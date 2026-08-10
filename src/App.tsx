import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Home } from '@/pages/Home';
import { Lookbook } from '@/pages/Lookbook';
import { Collections } from '@/pages/Collections';
import { About } from '@/pages/About';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-cream text-ink transition-colors duration-500 dark:bg-zinc-950 dark:text-white'>
        <Header />
        <main>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<PageTransition><Home /></PageTransition>} />
              <Route path='/lookbook' element={<PageTransition><Lookbook /></PageTransition>} />
              <Route path='/collections' element={<PageTransition><Collections /></PageTransition>} />
              <Route path='/about' element={<PageTransition><About /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
