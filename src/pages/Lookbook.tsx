

import { useRef } from 'react';
import { useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { InView } from '@/components/core/in-view';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { Spotlight } from '@/components/core/spotlight';
import { ArrowUpRight } from 'lucide-react';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

const looks = [
  { id: 'l01', title: 'Midnight Studio', subtitle: 'Heavyweight · Charcoal', tag: 'Look 01', price: '$148', img: HOODIE_IMAGES.blackStudio, span: 'md:col-span-7 md:row-span-2', aspect: 'aspect-[4/5]' },
  { id: 'l02', title: 'Off-White Pill', subtitle: '480 GSM · Brushed', tag: 'Look 02', price: '$138', img: HOODIE_IMAGES.cream, span: 'md:col-span-5', aspect: 'aspect-[5/4]' },
  { id: 'l03', title: 'Burnt Field', subtitle: 'Cotton Fleece · Orange', tag: 'Look 03', price: '$152', img: HOODIE_IMAGES.orange, span: 'md:col-span-5', aspect: 'aspect-[5/4]' },
  { id: 'l04', title: 'Studio Red', subtitle: 'Pullover · Cardinal', tag: 'Look 04', price: '$148', img: HOODIE_IMAGES.redSquare, span: 'md:col-span-4', aspect: 'aspect-[4/5]' },
  { id: 'l05', title: 'Seated Quiet', subtitle: 'Heavyweight · Onyx', tag: 'Look 05', price: '$156', img: HOODIE_IMAGES.dramatic, span: 'md:col-span-4', aspect: 'aspect-[4/5]' },
  { id: 'l06', title: 'Soda Run', subtitle: 'Cropped · Bone', tag: 'Look 06', price: '$128', img: HOODIE_IMAGES.soda, span: 'md:col-span-4', aspect: 'aspect-[4/5]' },
];

function LookCard({ look, index }: { look: typeof looks[0]; index: number }) {
  return (
    <InView
      className={`group relative overflow-hidden rounded-2xl ${look.span}`}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Product image with hover zoom */}
      <div className={`relative w-full overflow-hidden ${look.aspect}`}>
        <img
          src={look.img}
          alt={look.title}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <ProgressiveBlur
          className='pointer-events-none absolute bottom-0 left-0 h-[50%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
          blurIntensity={1.5}
        />
      </div>

      {/* Charcoal overlay improves text contrast */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-[#171717]/0 to-[#171717]/0 opacity-70 transition-opacity duration-500 group-hover:opacity-95' />

      {/* Look label */}
      <div className='absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#F5F2EA]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#171717]'>
        {look.tag}
      </div>

      {/* Look details */}
      <div className='absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-[#F5F2EA]'>
        <div>
          <p className='text-[10px] font-bold uppercase tracking-widest text-[#F5F2EA]/60'>
            {look.subtitle}
          </p>
          <h3 className='display mt-1 text-2xl'>{look.title}</h3>
        </div>

        <div className='flex items-center gap-3'>
          <span className='text-sm font-semibold'>{look.price}</span>
          <button className='flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F2EA] text-[#171717] transition-all duration-300 group-hover:rotate-45'>
            <Spotlight className='from-white/30 via-white/10 to-transparent' size={50} />
            <ArrowUpRight className='relative h-4 w-4' />
          </button>
        </div>
      </div>
    </InView>
  );
}

/**
 * Lookbook: Displays six editorial hoodie looks in a responsive bento grid.
 */
export function Lookbook() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' });

  return (
    <div ref={ref} className='bg-[#F5F2EA] text-[#171717]'>

      {/* Hero */}
      <section className='relative overflow-hidden border-b border-[#171717]/10 pb-12 pt-14 md:pb-20 md:pt-20'>
        <div className='mx-auto max-w-[1400px] px-5 md:px-10'>
          <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#171717]/50'>
            Lookbook · Autumn 2024
          </p>

          <TextEffect
            per='char'
            as='h1'
            preset='fade-in-blur'
            trigger={inView}
            className='display mt-4 text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] text-[#171717]'
          >
            SIX WAYS
          </TextEffect>

          <TextEffect
            per='char'
            as='h1'
            preset='fade-in-blur'
            trigger={inView}
            delay={0.3}
            className='display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] text-[#171717]/40'
          >
            TO WRAP
          </TextEffect>

          <p className='mt-6 max-w-xl text-[15px] leading-relaxed text-[#171717]/65'>
            Six heavyweight looks, shot in a single Barcelona afternoon. Each one styled to be the first thing you reach for on a cold morning.
          </p>
        </div>
      </section>

      {/* Bento grid */}
      <section className='mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20'>
        <div className='mb-8 flex items-center justify-between'>
          <p className='text-[11px] font-bold uppercase tracking-[0.18em] text-[#171717]/50'>
            06 looks · 06 capsules
          </p>

          <a
            href='/collections'
            className='group flex items-center gap-1.5 text-[12px] font-bold tracking-wide text-[#171717] transition-opacity hover:opacity-60'
          >
            SHOP THE COLLECTION
            <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </a>
        </div>

        <div className='grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-12 md:gap-5'>
          {looks.map((look, i) => (
            <LookCard key={look.id} look={look} index={i} />
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className='border-t border-[#171717]/10'>
        <div className='mx-auto max-w-[1100px] px-5 py-20 text-center md:py-28'>
          <TextEffect
            per='word'
            as='p'
            preset='fade-in-blur'
            trigger={inView}
            className='display text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.3] text-[#171717]'
          >
            "A great hoodie disappears into your rotation — until you try to live without it."
          </TextEffect>

          <p className='mt-6 text-[12px] font-bold uppercase tracking-[0.18em] text-[#171717]/50'>
            — WRAP Studio Notes · Vol. 04
          </p>
        </div>
      </section>
    </div>
  );
}
