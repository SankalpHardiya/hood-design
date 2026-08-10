import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { Spotlight } from '@/components/core/spotlight';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { InView } from '@/components/core/in-view';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

/**
 * Generates random hex color (used for animated letter intro state).
 */
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Fancy stagger animation for headline characters.
 * Final visible color set to Charcoal Black (#171717).
 */
const fancyVariants = {
  container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } },
  item: {
    hidden: () => ({
      opacity: 0,
      y: Math.random() * 100 - 50,
      rotate: Math.random() * 90 - 45,
      scale: 0.3,
      color: getRandomColor(),
    }),
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      color: '#171717',
      transition: { type: 'spring' as const, damping: 12, stiffness: 200 },
    },
  },
};

/** Array of hero images that crossfade in the center slot. */
const heroRotatingImages = [
  HOODIE_IMAGES.heroMan,
  HOODIE_IMAGES.blackStudio,
  HOODIE_IMAGES.cream,
  HOODIE_IMAGES.dramatic,
  HOODIE_IMAGES.orange,
  HOODIE_IMAGES.red,
  HOODIE_IMAGES.green,
  HOODIE_IMAGES.soda,
];

/**
 * Hero Section: Main editorial landing block with smooth crossfade center image.
 * Uses AnimatePresence in "popLayout" mode so the outgoing and incoming
 * images overlap, creating a cinematic dissolve / blend effect.
 */
export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Advances to the next image every 2.5s (long enough to appreciate the blend). */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroRotatingImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative overflow-hidden border-b border-[#171717]/10 bg-[#F5F2EA] text-[#171717]'>
      <div className='mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 pb-16 pt-12 md:grid-cols-12 md:gap-6 md:px-10 md:pt-16'>

        {/* Left intro text */}
        <div className='order-2 md:order-1 md:col-span-3 md:pt-10'>
          <InView variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}>
            <p className='max-w-[150px] text-[13px] font-semibold leading-snug text-[#171717]/70'>
              Wrap Yourself In{' '}
              <span className='font-medium text-[#171717]/40'>Studio-grade Cotton</span>
            </p>
          </InView>
        </div>

        {/* Center headline + crossfading main image */}
        <div className='order-1 md:order-2 md:col-span-6'>
          <TextEffect
            per='char'
            as='h1'
            variants={fancyVariants}
            className='display text-center text-[clamp(4rem,11vw,9rem)] leading-[0.92] md:text-left'
          >
            WRAP CULTURE
          </TextEffect>

          <InView
            className='relative mx-auto mt-10 w-fit md:mt-14'
            variants={{ hidden: { opacity: 0, y: 60, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Vertical editorial tag */}
            <span className='display absolute -left-8 top-6 z-10 rounded-sm bg-[#171717] px-2 py-3 text-[11px] tracking-[0.15em] text-[#F5F2EA] [writing-mode:vertical-rl]'>
              NEW SEASON 2026
            </span>

            {/* Crossfading image container — both images overlap during transition */}
            <div className='group relative w-[280px] overflow-hidden rounded-2xl sm:w-[320px] aspect-[4/5]'>
              <AnimatePresence mode='popLayout'>
                <motion.img
                  key={currentIndex}
                  src={heroRotatingImages[currentIndex]}
                  alt='Model wearing premium heavyweight hoodie'
                  className='absolute inset-0 h-full w-full object-cover'
                  initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.97, filter: 'blur(6px)' }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </AnimatePresence>

              {/* Bottom blur on hover */}
              <ProgressiveBlur
                className='pointer-events-none absolute bottom-0 left-0 z-10 h-[30%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                blurIntensity={2}
              />
            </div>

            {/* Floating editorial card */}
            <div className='absolute -bottom-8 left-1/2 w-[240px] -translate-x-1/2 rounded-xl bg-[#171717] px-6 py-4 text-center text-[#F5F2EA] shadow-[0_16px_40px_-16px_rgba(23,23,23,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:-right-24 sm:left-auto sm:translate-x-0'>
              <p className='text-[13px] font-semibold leading-snug'>
                Hoodies Crafted For Everyday Wear
              </p>
            </div>
          </InView>
        </div>

        {/* Right column */}
        <div className='order-3 md:col-span-3'>
          <InView
            variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='flex flex-col items-start gap-3 md:items-end md:text-right'
          >
            <div className='group w-full max-w-[220px] overflow-hidden rounded-2xl md:ml-auto'>
              <img
                src={HOODIE_IMAGES.product}
                alt='Couple modeling studio hoodies'
                className='aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
            </div>

            <p className='max-w-[220px] text-[13px] font-semibold leading-snug text-[#171717]/70'>
              Studio Hoodie Pack{' '}
              <span className='font-medium text-[#171717]/40'>Limited Drop — 2026</span>
            </p>

            {/* Minimal CTA button */}
            <button className='relative overflow-hidden rounded-full bg-[#171717] px-6 py-2.5 text-[12px] font-semibold text-[#F5F2EA] transition-opacity duration-300 hover:opacity-90'>
              <Spotlight className='from-white/30 via-white/10 to-transparent' size={80} />
              <span className='relative z-10'>Shop now</span>
            </button>
          </InView>
        </div>
      </div>
    </section>
  );
}