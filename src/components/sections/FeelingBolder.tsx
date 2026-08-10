
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { Spotlight } from '@/components/core/spotlight';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { InView } from '@/components/core/in-view';
import { ArrowUpRight } from 'lucide-react';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

const redSlide = {
  container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } },
  item: {
    hidden: { opacity: 0, y: 80, rotate: 4, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)', transition: { type: 'spring' as const, damping: 16, stiffness: 160 } },
  },
};

/**
 * FeelingBolder Component: Editorial bold typography + featured cards.
 * Updated to Warm Off-White (#F5F2EA) and Charcoal Black (#171717) minimal theme.
 */
export function FeelingBolder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -160px 0px' });

  return (
    // Section with warm background and subtle charcoal divider
    <section
      ref={ref}
      className='relative overflow-hidden border-b border-[#171717]/10 bg-[#F5F2EA] text-[#171717]'
    >
      <div className='mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28'>
        <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-12'>
          
          {/* Large headline */}
          <div className='md:col-span-9'>
            <TextEffect
              per='char'
              as='h2'
              variants={redSlide}
              trigger={inView}
              className='display text-[clamp(4.5rem,15vw,13rem)] leading-[0.9] text-[#171717]'
            >
              FEELING
            </TextEffect>
          </div>

          {/* Side image + caption */}
          <div className='md:col-span-3'>
            <InView variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
              <div className='group w-[170px] overflow-hidden rounded-xl md:ml-auto'>
                <img
                  src={HOODIE_IMAGES.redSquare}
                  alt='Model in red hoodie seated'
                  className='aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>
              <p className='mt-3 text-[12px] font-semibold leading-snug md:text-right text-[#171717]/70'>
                Studio Red Drop
                <span className='block font-medium text-[#171717]/40'>Studio Capsule</span>
              </p>
            </InView>
          </div>
        </div>

        {/* Second headline */}
        <div className='mt-4 md:mt-0 md:pl-[22%]'>
          <TextEffect
            per='char'
            as='h2'
            variants={redSlide}
            trigger={inView}
            delay={0.35}
            className='display text-[clamp(4.5rem,15vw,13rem)] leading-[0.9] text-[#171717]'
          >
            WARMER
          </TextEffect>
        </div>

        {/* Bottom grid */}
        <div className='mt-16 grid grid-cols-1 items-end gap-10 md:mt-8 md:grid-cols-12'>
          
          {/* Feature card */}
          <div className='md:col-span-4'>
            <InView
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className='-mt-0 md:-mt-32'
            >
              <div className='group max-w-[300px] overflow-hidden rounded-2xl'>
                <div className='relative overflow-hidden'>
                  <img
                    src={HOODIE_IMAGES.blackStudio}
                    alt='Model in black hoodie in dark studio'
                    className='aspect-[4/4.4] w-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <ProgressiveBlur
                    className='pointer-events-none absolute bottom-0 left-0 h-[30%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                    blurIntensity={2}
                  />
                </div>

                {/* Editorial info box */}
                <div className='relative -mt-6 mr-6 overflow-hidden rounded-xl bg-[#171717] p-6 text-[#F5F2EA]'>
                  <Spotlight className='from-white/20 via-white/10 to-transparent' size={140} />
                  <div className='relative z-10'>
                    <div className='flex items-start justify-between gap-3'>
                      <h3 className='display text-2xl'>MIDNIGHT PILE</h3>
                      <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F2EA] text-[#171717] transition-transform duration-300 group-hover:rotate-45'>
                        <ArrowUpRight className='h-4 w-4' />
                      </span>
                    </div>
                    <p className='mt-3 text-[12px] leading-relaxed text-[#F5F2EA]/70'>
                      480 GSM cotton fleece with a brushed interior for the colder months
                    </p>
                  </div>
                </div>
              </div>
            </InView>
          </div>

          {/* Center image */}
          <div className='md:col-span-4'>
            <InView
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='flex justify-center'
            >
              <div className='group relative w-[220px] overflow-hidden rounded-xl'>
                <img
                  src={HOODIE_IMAGES.green}
                  alt='Hoodie editorial in green light'
                  className='aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <ProgressiveBlur
                  className='pointer-events-none absolute bottom-0 left-0 h-[45%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                  blurIntensity={2}
                />
                <p className='absolute bottom-3 left-3 text-[11px] font-semibold text-[#F5F2EA] opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                  Heavyweight — Studio Series
                </p>
              </div>
            </InView>
          </div>

          {/* Right text block */}
          <div className='md:col-span-4'>
            <InView
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className='flex max-w-[240px] items-start gap-3'>
                <p className='text-[14px] font-semibold leading-snug text-[#171717]/80'>
                  Soft, brushed, and built to keep you warm through every cold night
                </p>
                <ArrowUpRight className='mt-0.5 h-5 w-5 shrink-0 text-[#171717]' />
              </div>
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}