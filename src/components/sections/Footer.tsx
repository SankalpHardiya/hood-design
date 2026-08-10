

import { motion } from 'motion/react';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons/Instagram';
import { useTheme } from '@/context/ThemeContext';

/**
 * LogoMark: Minimal brand mark styled for charcoal theme.
 */
const LogoMark = () => (
  <span className='flex h-7 w-7 items-center justify-center rounded-md bg-[#171717]'>
    <svg viewBox='0 0 16 16' className='h-3.5 w-3.5' aria-hidden='true'>
      <path
        d='M2 14V2h3l3 6 3-6h3v12h-3V8l-3 6-3-6v6z'
        fill='#F5F2EA'
      />
    </svg>
  </span>
);

const socials = [
  { label: 'Instagram', icon: InstagramIcon, href: '' },
  { label: 'WhatsApp', icon: WhatsAppIcon, href: '' },
];

/**
 * Footer: Editorial minimal footer in Warm Off-White (#F5F2EA)
 * with Charcoal Black (#171717) accents.
 */
export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className='px-3 pb-3 md:px-6 md:pb-6 bg-[#F5F2EA]'>
      <div className='relative overflow-hidden rounded-3xl bg-[#F5F2EA] text-[#171717] border border-[#171717]/10'>
        
        {/* Top marquee band */}
        <div className='overflow-hidden border-b border-[#171717]/10 py-8'>
          <motion.div
            className='display flex gap-12 whitespace-nowrap text-[clamp(2.5rem,7vw,5.5rem)] leading-none'
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className='flex items-center gap-12'>
                <span>COTTON REIGN</span>
                <span className='h-3 w-3 rounded-full bg-[#171717]' />
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main grid */}
        <div className='mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:px-12 md:py-20'>
          
          {/* Brand block */}
          <div className='md:col-span-4'>
            <a href='/' className='inline-flex items-center gap-2.5'>
              <LogoMark />
              <span className='display text-lg tracking-wide'>WRAP</span>
            </a>
            <p className='mt-6 max-w-[280px] text-[13px] leading-relaxed text-[#171717]/60'>
              Heavyweight hoodies milled in Portugal. Designed in a small studio, built to be worn every day.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex items-center gap-2 rounded-full border border-[#171717]/20 px-4 py-2.5 text-[12px] font-semibold text-[#171717]/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#171717] hover:text-[#171717]'
                >
                  <Icon className='h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110' />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className='md:col-span-2'>
            <p className='mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#171717]/40'>Shop</p>
            <ul className='space-y-3 text-[13px] font-semibold'>
              {[
                { label: 'Lookbook', href: '/lookbook' },
                { label: 'Collections', href: '/collections' },
                { label: 'About', href: '/about' },
                { label: 'Heavy Weight', href: '/collections#heavy' },
                { label: 'Limited', href: '/collections#limited' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className='inline-flex items-center gap-1.5 text-[#171717]/70 transition-colors duration-200 hover:text-[#171717]'
                  >
                    {l.label}
                    <ArrowUpRight className='h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100' />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className='md:col-span-3'>
            <p className='mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#171717]/40'>Visit the studio</p>
            <a
              href='https://maps.google.com/?q=18+Carrer+de+Val%C3%A8ncia,+Barcelona'
              target='_blank'
              rel='noreferrer'
              className='group flex items-start gap-3 text-[13px] font-semibold leading-relaxed text-[#171717]/70 transition-colors hover:text-[#171717]'
            >
              <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-[#171717]' />
              <span>
                Carrer de València 240,
                <br />
                Eixample, Barcelona
                <br />
                <span className='text-[#171717]/50 group-hover:text-[#171717]/70'>Open Mon–Sat · 11–19h</span>
              </span>
            </a>
          </div>

          {/* Contact */}
          <div className='md:col-span-3'>
            <p className='mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#171717]/40'>Get in touch</p>
            <ul className='space-y-3 text-[13px] font-semibold'>
              <li>
                <a
                  href='mailto:hello@wrapstudio.com'
                  className='group flex items-center gap-2.5 text-[#171717]/70 transition-colors hover:text-[#171717]'
                >
                  <span className='flex h-7 w-7 items-center justify-center rounded-full border border-[#171717]/20 transition-colors group-hover:border-[#171717]'>
                    <Mail className='h-3.5 w-3.5' />
                  </span>
                  hello@wrapstudio.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+91999999999'
                  className='group flex items-center gap-2.5 text-[#171717]/70 transition-colors hover:text-[#171717]'
                >
                  <span className='flex h-7 w-7 items-center justify-center rounded-full border border-[#171717]/20 transition-colors group-hover:border-[#171717]'>
                    <Phone className='h-3.5 w-3.5' />
                  </span>
                  +62 088 348 849 23
                </a>
              </li>
              <li>
                <a
                  href='https://wa.me/6208834884923'
                  target='_blank'
                  rel='noreferrer'
                  className='group flex items-center gap-2.5 text-[#171717]/70 transition-colors hover:text-[#171717]'
                >
                  <span className='flex h-7 w-7 items-center justify-center rounded-full border border-[#171717]/20 transition-colors group-hover:border-[#171717]'>
                    <WhatsAppIcon className='h-3.5 w-3.5' />
                  </span>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-[#171717]/10'>
          <div className='mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-4 px-6 py-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#171717]/50 md:flex-row md:items-center md:px-12'>
            <p>© 2026 WRAP Studio · All rights reserved</p>
            <div className='flex items-center gap-5'>
              <a href='#' className='transition-colors hover:text-[#171717]'>Privacy</a>
              <a href='#' className='transition-colors hover:text-[#171717]'>Terms</a>
              <a href='#' className='transition-colors hover:text-[#171717]'>Cookies</a>
              <span className='flex items-center gap-1.5'>
                <span className='h-1.5 w-1.5 rounded-full bg-[#171717]/60' />
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}