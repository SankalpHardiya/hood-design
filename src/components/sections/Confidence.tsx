// import { useRef } from 'react';
// import { useInView } from 'motion/react';
// import { TextEffect } from '@/components/core/text-effect';
// import { InView } from '@/components/core/in-view';
// import { ProgressiveBlur } from '@/components/core/progressive-blur';
// import { HOODIE_IMAGES } from '@/data/hoodieImages';

// export function Confidence() {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: '0px 0px -160px 0px' });

//   return (
//     <section ref={ref} className='grid-guides relative overflow-hidden'>
//       <div className='mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28'>
//         <div className='display grid grid-cols-1 gap-2 text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[1] sm:grid-cols-3 dark:text-white'>
//           <div>
//             <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView}>TOTAL</TextEffect>
//             <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.5} className='whitespace-nowrap'>COMFORT</TextEffect>
//           </div>
//           <div className='sm:text-center'>
//             <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.2}>BUILT</TextEffect>
//           </div>
//           <div className='sm:text-right'>
//             <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.35}>HEAVY</TextEffect>
//             <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.65}>FLEECE</TextEffect>
//           </div>
//         </div>

//         <div className='mt-14 flex items-center justify-between gap-6 md:mt-20'>
//           <span className='display select-none text-[clamp(4rem,10vw,9rem)] font-normal leading-none text-ink dark:text-white'>[</span>
//           <InView variants={{ hidden: { opacity: 0, scale: 0.9, y: 40 }, visible: { opacity: 1, scale: 1, y: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
//             <div className='group relative w-[240px] overflow-hidden rounded-2xl sm:w-[300px]'>
//               <img src={HOODIE_IMAGES.cream} alt='Model in hoodie seated against backdrop' className='aspect-[4/4.2] w-full object-cover transition-transform duration-700 group-hover:scale-105' />
//               <ProgressiveBlur className='pointer-events-none absolute bottom-0 left-0 h-[35%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100' blurIntensity={2} />
//             </div>
//           </InView>
//           <span className='display select-none text-[clamp(4rem,10vw,9rem)] font-normal leading-none text-ink dark:text-white'>]</span>
//         </div>

//         <InView variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className='mt-16 md:mt-20'>
//           <p className='max-w-4xl text-[14px] font-medium leading-relaxed text-ink/80 md:text-[15px] dark:text-white/70'>
//             Step into a hoodie that earns its place in your rotation. Cut from heavyweight cotton, finished with a brushed fleece interior, and built to soften with every wash. Whether you wear it solo or layered under a coat, this is the kind of piece that becomes the first thing you reach for.
//           </p>
//         </InView>
//       </div>
//     </section>
//   );
// }
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { InView } from '@/components/core/in-view';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

/**
 * Confidence Component: Displays branding text and a featured product image.
 * Updated to a minimal editorial theme using Warm Off-White (#F5F2EA) and Charcoal Black (#171717).
 */
export function Confidence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -160px 0px' });

  return (
    // Set background to Warm Off-White and text to Charcoal Black for a premium look
    <section ref={ref} className='grid-guides relative overflow-hidden bg-[#F5F2EA] text-[#171717]'>
      <div className='mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28'>
        {/* Main typography section using Charcoal Black */}
        <div className='display grid grid-cols-1 gap-2 text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[1] sm:grid-cols-3 text-[#171717]'>
          <div>
            <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView}>TOTAL</TextEffect>
            <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.5} className='whitespace-nowrap'>COMFORT</TextEffect>
          </div>
          <div className='sm:text-center'>
            <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.2}>BUILT</TextEffect>
          </div>
          <div className='sm:text-right'>
            <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.35}>HEAVY</TextEffect>
            <TextEffect per='char' as='h2' preset='fade-in-blur' trigger={inView} delay={0.65}>FLEECE</TextEffect>
          </div>
        </div>

        {/* Center image display bracketed by Charcoal Black accents */}
        <div className='mt-14 flex items-center justify-between gap-6 md:mt-20'>
          <span className='display select-none text-[clamp(4rem,10vw,9rem)] font-normal leading-none text-[#171717]'>[</span>
          <InView variants={{ hidden: { opacity: 0, scale: 0.9, y: 40 }, visible: { opacity: 1, scale: 1, y: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className='group relative w-[240px] overflow-hidden rounded-2xl sm:w-[300px]'>
              <img src={HOODIE_IMAGES.cream} alt='Model in hoodie seated against backdrop' className='aspect-[4/4.2] w-full object-cover transition-transform duration-700 group-hover:scale-105' />
              <ProgressiveBlur className='pointer-events-none absolute bottom-0 left-0 h-[35%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100' blurIntensity={2} />
            </div>
          </InView>
          <span className='display select-none text-[clamp(4rem,10vw,9rem)] font-normal leading-none text-[#171717]'>]</span>
        </div>

        {/* Editorial description text in Charcoal Black with slight opacity for hierarchy */}
        <InView variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className='mt-16 md:mt-20'>
          <p className='max-w-4xl text-[14px] font-medium leading-relaxed text-[#171717]/80 md:text-[15px]'>
            Step into a hoodie that earns its place in your rotation. Cut from heavyweight cotton, finished with a brushed fleece interior, and built to soften with every wash. Whether you wear it solo or layered under a coat, this is the kind of piece that becomes the first thing you reach for.
          </p>
        </InView>
      </div>
    </section>
  );
}