


import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { Spotlight } from '@/components/core/spotlight';
import { ArrowRight } from 'lucide-react';

/**
 * SubscribeFooter: Newsletter CTA section
 * Styled in Warm Off-White (#F5F2EA) and Charcoal Black (#171717).
 */
export function SubscribeFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' });
  const [subscribed, setSubscribed] = useState(true);

  return (
    <footer ref={ref} className='px-3 pb-3 md:px-6 md:pb-6 bg-[#F5F2EA]'>
      <div className='relative overflow-hidden rounded-3xl bg-[#171717] text-[#F5F2EA]'>
        
        {/* Headline block */}
        <div className='mx-auto flex max-w-[1320px] flex-col items-center px-6 pb-10 pt-20 md:pt-28'>
          <TextEffect
            per='word'
            as='h2'
            preset='fade-in-blur'
            trigger={inView}
            className='display text-center text-[clamp(2.6rem,7vw,6rem)] leading-[1.05]'
          >
            JOIN THE WRAP LIST
          </TextEffect>

          <TextEffect
            per='word'
            as='h2'
            preset='fade-in-blur'
            trigger={inView}
            delay={0.3}
            className='display text-center text-[clamp(2.6rem,7vw,6rem)] leading-[1.05] text-[#F5F2EA]/40'
          >
            FOR FUTURE DROPS
          </TextEffect>

          {/* Toggle subscribe button */}
          <button
            onClick={() => setSubscribed((s) => !s)}
            aria-pressed={subscribed}
            aria-label='Toggle newsletter subscription'
            className={`relative mt-14 flex h-24 w-56 items-center overflow-hidden rounded-full px-3 transition-colors duration-500 md:mt-16 md:h-28 md:w-64 ${
              subscribed ? 'bg-[#F5F2EA]' : 'bg-[#F5F2EA]/20'
            } ${subscribed ? 'justify-start' : 'justify-end'}`}
          >
            <Spotlight className='from-white/30 via-white/10 to-transparent' size={120} />

            {/* YES / NO text */}
            <span
              className={`display absolute text-4xl transition-all duration-500 md:text-5xl ${
                subscribed
                  ? 'right-8 text-[#171717] opacity-100'
                  : 'left-8 text-[#F5F2EA]/50 opacity-70'
              }`}
            >
              {subscribed ? 'YES' : 'NO'}
            </span>

            {/* Sliding knob */}
            <motion.span
              layout
              transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
              className='relative z-10 h-[72px] w-[72px] rounded-full bg-[#171717] shadow-lg md:h-[88px] md:w-[88px]'
            />
          </button>
        </div>

        {/* Bottom info grid */}
        <div className='mx-auto grid max-w-[1320px] grid-cols-2 items-end gap-8 border-t border-[#F5F2EA]/10 px-6 py-10 text-[11px] font-semibold uppercase tracking-wide text-[#F5F2EA]/70 md:grid-cols-5 md:px-12'>
          
          <div className='space-y-1.5'>
            <a
              href='mailto:hello@wrapstudio.com'
              className='block underline underline-offset-4 transition-colors hover:text-[#F5F2EA]'
            >
              HELLO@WRAPSTUDIO.COM
            </a>
            <a
              href='tel:+6208834884923'
              className='block underline underline-offset-4 transition-colors hover:text-[#F5F2EA]'
            >
              +91-9999999999
            </a>
          </div>

          <p className='normal-case text-[#F5F2EA]/50'>
            © 2026 WRAP STUDIO. ALL RIGHTS RESERVED.
          </p>

          <a href='#' className='transition-colors hover:text-[#F5F2EA]'>
            Privacy<br />Policy
          </a>

          <div>
            <p className='text-[#F5F2EA]/50'>Social:</p>
            <div className='mt-1 flex gap-2'>
              {['TW', 'IG', 'TT'].map((s) => (
                <a key={s} href='#' className='transition-colors hover:text-[#F5F2EA]'>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2 md:justify-end'>
            <ArrowRight className='h-3.5 w-3.5' />
            <a href='#' className='transition-colors hover:text-[#F5F2EA]'>WRK</a>
            <a href='#' className='transition-colors hover:text-[#F5F2EA]'>ABT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}