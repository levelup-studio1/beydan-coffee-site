import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MapPin, Menu, X } from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const SPRING = 'cubic-bezier(0.32,0.72,0,1)'

const IMG = {
  hero:     '/images/beydan image 2.png',
  cap:      '/images/beydan image 3.png',
  products: '/images/beydan image 4.png',
  carrier:  '/images/beydan image1.png',
  model1:   '/images/beydan model 1.png',
  model2:   '/images/beydan model 2.png',
  img5:     '/images/beydan image 5.png',
  img6:     '/images/beydan image 6.png',
  img7:     '/images/beydan image 7.png',
  img8:     '/images/beydan image 8.png',
  img9:     '/images/beydan image 9.png',
  logo:     '/images/beydan new logo.png',
}

/* ── CAFÉ ILLUSTRATION PATTERN ── */
function CafePattern({ opacity = 1 }) {
  const S = '#ffffff'
  const O = 0.18
  const w = 1.5
  const item = (x, y, rot, children) => (
    <g key={`${x}-${y}`} transform={`translate(${x},${y}) rotate(${rot})`}>{children}</g>
  )

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cafe-bg" x="0" y="0" width="480" height="480" patternUnits="userSpaceOnUse">
            {/* ── Coffee Cup 1 ── */}
            {item(70, 90, -12, <>
              <path d="M-15,-16 L-17,14 L17,14 L15,-16 Z" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15,-5 C28,-5 28,5 15,5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
              <ellipse cx="0" cy="18" rx="21" ry="4" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M-6,-22 Q-9,-29 -6,-36" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
              <path d="M4,-22 Q7,-29 4,-36" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
            </>)}

            {/* ── Espresso Bean 1 ── */}
            {item(215, 48, 22, <>
              <ellipse cx="0" cy="0" rx="7" ry="12" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M0,-12 C4,-6 4,6 0,12" fill="none" stroke={S} strokeWidth={1} strokeOpacity={O}/>
            </>)}

            {/* ── Croissant ── */}
            {item(368, 105, -8, <>
              <path d="M-24,6 C-20,-18 -6,-22 0,-10 C6,-22 20,-18 24,6 C16,16 6,10 0,8 C-6,10 -16,16 -24,6 Z" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinejoin="round"/>
            </>)}

            {/* ── Pancake Stack ── */}
            {item(125, 268, 10, <>
              <ellipse cx="0" cy="12" rx="22" ry="5.5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <ellipse cx="0" cy="4" rx="19" ry="5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <ellipse cx="0" cy="-4" rx="16" ry="4.5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M-10,-9 C-13,-15 -11,-20 -8,-22" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
            </>)}

            {/* ── Coffee Bag ── */}
            {item(302, 198, -14, <>
              <path d="M-14,-22 L-16,-8 L-16,22 Q-16,26 -12,26 L12,26 Q16,26 16,22 L16,-8 Z" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinejoin="round"/>
              <path d="M-14,-22 L-10,-30 L10,-30 L14,-22" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinejoin="round"/>
              <line x1="-16" y1="-8" x2="16" y2="-8" stroke={S} strokeWidth={1} strokeOpacity={O}/>
              <circle cx="0" cy="8" r="5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <circle cx="0" cy="8" r="1.5" fill={S} fillOpacity={O}/>
            </>)}

            {/* ── Sandwich ── */}
            {item(428, 298, 6, <>
              <path d="M-22,-14 C-22,-26 22,-26 22,-14" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <line x1="-22" y1="-14" x2="22" y2="-14" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M-20,-14 L-20,-8 L20,-8 L20,-14" fill="none" stroke={S} strokeWidth={1} strokeOpacity={O * 0.7}/>
              <line x1="-20" y1="-2" x2="20" y2="-2" stroke={S} strokeWidth={1} strokeOpacity={O}/>
              <line x1="-20" y1="5" x2="20" y2="5" stroke={S} strokeWidth={1} strokeOpacity={O}/>
              <line x1="-22" y1="12" x2="22" y2="12" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M-22,12 C-22,20 22,20 22,12" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
            </>)}

            {/* ── V60 Dripper ── */}
            {item(55, 395, -6, <>
              <path d="M-20,-24 L0,18 L20,-24" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="-20" y1="-24" x2="20" y2="-24" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
              <line x1="-8" y1="-16" x2="-2" y2="4" stroke={S} strokeWidth={1} strokeOpacity={O * 0.6}/>
              <line x1="0" y1="-18" x2="0" y2="6" stroke={S} strokeWidth={1} strokeOpacity={O * 0.6}/>
              <line x1="8" y1="-16" x2="2" y2="4" stroke={S} strokeWidth={1} strokeOpacity={O * 0.6}/>
              <line x1="0" y1="18" x2="0" y2="26" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
              <rect x="-24" y="26" width="48" height="20" rx="5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
            </>)}

            {/* ── Steam Swirls ── */}
            {item(368, 398, 0, <>
              <path d="M-8,14 C-12,8 -12,2 -8,-4 C-4,-10 4,-10 8,-16 C12,-22 12,-30 8,-36" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
              <path d="M8,14 C4,8 4,2 8,-4 C12,-10 12,-16 8,-22 C4,-28 4,-34 8,-38" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
            </>)}

            {/* ── Bean 2 ── */}
            {item(455, 155, -22, <>
              <ellipse cx="0" cy="0" rx="7" ry="12" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M0,-12 C4,-6 4,6 0,12" fill="none" stroke={S} strokeWidth={1} strokeOpacity={O}/>
            </>)}

            {/* ── Coffee Cup 2 (bottom center) ── */}
            {item(244, 415, 14, <>
              <path d="M-14,-14 L-16,12 L16,12 L14,-14 Z" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14,-4 C26,-4 26,4 14,4" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
              <ellipse cx="0" cy="16" rx="20" ry="3.5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M-5,-18 Q-8,-24 -5,-30" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinecap="round"/>
            </>)}

            {/* ── Bean 3 ── */}
            {item(460, 420, 30, <>
              <ellipse cx="0" cy="0" rx="7" ry="12" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <path d="M0,-12 C4,-6 4,6 0,12" fill="none" stroke={S} strokeWidth={1} strokeOpacity={O}/>
            </>)}

            {/* ── Mini croissant top-left area ── */}
            {item(10, 10, 20, <>
              <path d="M-18,5 C-14,-14 -4,-17 0,-7 C4,-17 14,-14 18,5 C12,12 4,8 0,6 C-4,8 -12,12 -18,5 Z" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O} strokeLinejoin="round"/>
            </>)}

            {/* ── Pancake 2 (right-bottom) ── */}
            {item(445, 58, -18, <>
              <ellipse cx="0" cy="8" rx="18" ry="4.5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <ellipse cx="0" cy="2" rx="15" ry="4" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
              <ellipse cx="0" cy="-4" rx="12" ry="3.5" fill="none" stroke={S} strokeWidth={w} strokeOpacity={O}/>
            </>)}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cafe-bg)"/>
      </svg>
    </div>
  )
}

/* ── NAVBAR ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const links = ['Menu', 'Craft', 'Story', 'Find Us']

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 80,
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    })
    return () => st.kill()
  }, [])

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-5 px-4 py-2.5 rounded-full ${scrolled ? 'bg-[#0d0f11]/90 shadow-[0_8px_40px_rgba(0,0,0,0.5)]' : 'bg-white/8'}`}
        style={{ backdropFilter: 'blur(24px)', transition: `all 700ms ${SPRING}` }}>
        <img
          src={IMG.logo}
          alt="Beydan Coffee"
          style={{ width: '2.2rem', height: '2.2rem', objectFit: 'contain', borderRadius: '50%' }}
        />
        <div className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              className={`font-sans text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors duration-300 ${scrolled ? 'text-white/65 hover:text-white' : 'text-white/75 hover:text-white'}`}>
              {l}
            </a>
          ))}
        </div>
        <a href="#menu"
          className="hidden md:flex items-center gap-2 bg-[#A61F2E] text-white font-black text-xs px-4 py-2 rounded-full group active:scale-[0.97]"
          style={{ transition: `transform 200ms ${SPRING}` }}>
          <span>Order Now</span>
          <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-px group-hover:-translate-y-px group-hover:scale-110"
            style={{ transition: `transform 500ms ${SPRING}` }}>
            <ArrowRight size={10} />
          </span>
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden relative w-6 h-5 flex flex-col justify-between">
          <span className="block h-0.5 w-full bg-white origin-center"
            style={{ transition: `transform 450ms ${SPRING}`, transform: open ? 'rotate(45deg) translateY(10px)' : 'none' }} />
          <span className="block h-0.5 w-full bg-white"
            style={{ transition: `opacity 250ms ease, transform 450ms ${SPRING}`, opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'scaleX(1)' }} />
          <span className="block h-0.5 w-full bg-white origin-center"
            style={{ transition: `transform 450ms ${SPRING}`, transform: open ? 'rotate(-45deg) translateY(-10px)' : 'none' }} />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1 pointer-events-none"
        style={{ background: 'rgba(10,10,12,0.96)', backdropFilter: 'blur(40px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: `opacity 600ms ${SPRING}` }}>
        {links.map((l, i) => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}
            className="font-sans font-black text-5xl text-white hover:text-[#EBB012] px-8 py-3"
            style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 600ms ${SPRING} ${80 + i * 70}ms, transform 600ms ${SPRING} ${80 + i * 70}ms, color 300ms ease` }}>
            {l}
          </a>
        ))}
        <a href="#menu" onClick={() => setOpen(false)}
          className="mt-8 flex items-center gap-3 bg-[#A61F2E] text-white font-black px-8 py-4 rounded-full text-xl group"
          style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 600ms ${SPRING} 380ms, transform 600ms ${SPRING} 380ms` }}>
          Order Now
          <span className="w-9 h-9 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-px group-hover:-translate-y-px"
            style={{ transition: `transform 400ms ${SPRING}` }}>
            <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </>
  )
}

/* ── HERO ── */
function Hero() {
  const ref = useRef(null)
  const [badgeSpinning, setBadgeSpinning] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.h-eyebrow', { y: 16, opacity: 0, duration: 0.8, delay: 0.35 })
        .from('.h-line', { y: 80, opacity: 0, duration: 1.2, stagger: 0.1 }, '-=0.45')
        .from('.h-sub', { y: 28, opacity: 0, duration: 0.9 }, '-=0.55')
        .from('.h-cta', { y: 28, opacity: 0, duration: 0.9 }, '-=0.5')
        .from('.h-badge', { scale: 0.65, opacity: 0, duration: 1, ease: 'back.out(1.7)' }, '-=0.4')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-32 px-6 md:px-20 overflow-hidden">
      <img src={IMG.hero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#111417]/58 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/55 to-transparent" />
      <div className="absolute top-0 right-0 w-1 h-full bg-[#A61F2E]" style={{ opacity: 0.75 }} />

      <div className="relative z-10 max-w-5xl">
        <div className="h-eyebrow inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-10 bg-white/6"
          style={{ backdropFilter: 'blur(12px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#EBB012]" />
          <span className="font-mono text-[10px] text-white/55 uppercase tracking-[0.28em]">ready</span>
        </div>
        <div className="mb-10">
          <span className="h-line flex items-center flex-wrap gap-x-4 font-sans font-black text-white tracking-tight leading-[0.88] uppercase pb-1"
            style={{ fontSize: 'clamp(3rem, 10.5vw, 9rem)' }}>
            Best
            <span
              className="inline-block align-middle flex-shrink-0 overflow-hidden"
              style={{
                width: 'clamp(3.5rem, 7vw, 7.5rem)',
                height: 'clamp(3.5rem, 7vw, 7.5rem)',
                borderRadius: '999px',
                verticalAlign: 'middle',
                boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                position: 'relative',
                top: '0.05em',
              }}
            >
              <img src={IMG.logo} alt="" className="w-full h-full object-cover" />
            </span>
            Coffee
          </span>
          <span className="h-line block font-sans font-black tracking-tight leading-[0.88] uppercase pb-2"
            style={{ fontSize: 'clamp(3rem, 10.5vw, 9rem)', color: 'white' }}>
            In The <span className="font-serif italic text-[#EBB012]">Town.</span>
          </span>
        </div>
        <p className="h-sub font-sans text-white/45 text-sm md:text-base max-w-[30ch] mb-12 leading-relaxed">
          Born in Somalia. Loved across Africa.<br />Your daily ritual — elevated.
        </p>
        <div className="h-cta flex flex-wrap gap-3">
          <a href="#menu"
            className="inline-flex items-center gap-3 bg-[#A61F2E] text-white font-black text-sm px-6 py-3.5 rounded-full group active:scale-[0.97]"
            style={{ transition: `transform 200ms ${SPRING}` }}>
            <span>Explore Menu</span>
            <span className="w-7 h-7 rounded-full bg-black/22 flex items-center justify-center group-hover:translate-x-px group-hover:-translate-y-px group-hover:scale-110"
              style={{ transition: `transform 500ms ${SPRING}` }}>
              <ArrowRight size={13} />
            </span>
          </a>
          <a href="#find-us"
            className="inline-flex items-center gap-3 text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-white/7 bg-white/5"
            style={{ backdropFilter: 'blur(12px)', transition: `all 500ms ${SPRING}` }}>
            <MapPin size={13} className="opacity-55" />
            <span>Find Us</span>
          </a>
        </div>
      </div>
      <div
        className="h-badge absolute bottom-12 right-6 md:right-20 rounded-full bg-[#EBB012] flex flex-col items-center justify-center font-mono font-black text-[9px] text-[#111417] text-center leading-snug cursor-pointer select-none"
        onMouseEnter={() => setBadgeSpinning(true)}
        onMouseLeave={() => setBadgeSpinning(false)}
        style={{
          width: badgeSpinning ? '7rem' : '5rem',
          height: badgeSpinning ? '7rem' : '5rem',
          animation: badgeSpinning ? 'cd-spin 1.8s linear infinite' : 'none',
          transform: !badgeSpinning ? 'rotate(12deg)' : undefined,
          transition: 'width 350ms cubic-bezier(0.34,1.56,0.64,1), height 350ms cubic-bezier(0.34,1.56,0.64,1), transform 600ms ease',
        }}
      >
        OPEN<br />DAILY<br />7–22
      </div>
    </section>
  )
}

/* ── TAPE RIBBON ── */
function TapeRibbon() {
  const words = ['Beydan Coffee', 'Specialty Brews', 'Somalia Born', 'East Africa\'s Finest', 'Since 2018', 'Good Coffee Good Vibes', 'Design. Craft. Culture.', '11 Locations']
  const doubled = [...words, ...words]
  return (
    <div className="overflow-hidden bg-[#EBB012] py-3.5" style={{ transform: 'rotate(1.5deg)', margin: '-0.7rem 0', position: 'relative', zIndex: 10 }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'tape-scroll 22s linear infinite' }}>
        {doubled.map((w, i) => (
          <span key={i} className="font-sans font-black text-[#111417] uppercase tracking-widest text-xs px-6 whitespace-nowrap">✦ {w}</span>
        ))}
      </div>
    </div>
  )
}

/* ── STORY ── */
function Story() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stext', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
      gsap.from('.simg', { y: 40, opacity: 0, duration: 1.2, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="story" className="relative bg-[#111417] py-28 md:py-40 px-6 md:px-20 overflow-hidden">
      <CafePattern opacity={0.9} />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

        {/* Left — tall image */}
        <div className="simg rounded-[2rem] overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[580px] relative">
          <img src={IMG.model2} alt="Beydan lifestyle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/60 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <div className="bg-[#EBB012] rounded-2xl px-4 py-1.5">
              <span className="font-mono font-black text-[#111417] text-[10px] uppercase tracking-widest">11 Locations</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateRows: 'auto auto auto' }}>
          {/* Red manifesto card */}
          <div className="stext bg-[#A61F2E] rounded-[2rem] overflow-hidden relative" style={{ minHeight: '320px' }}>
            {/* subtle diagonal stripe */}
            <div className="absolute inset-0 stripe-bg opacity-[0.07]" />
            <div className="relative z-10 flex h-full">
              {/* LEFT — text */}
              <div className="flex flex-col justify-between p-8 md:p-10" style={{ flex: '1 1 0' }}>
                <span className="font-mono text-[9px] text-white/35 uppercase tracking-[0.26em] block">Est. Somalia, 2018</span>
                <div>
                  <h2 className="font-sans font-black text-white leading-[1.0]" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3rem)' }}>
                    Not just<br />coffee.
                  </h2>
                  <p className="font-serif italic mt-1 leading-none" style={{ fontSize: 'clamp(2rem, 3.4vw, 3.2rem)', color: '#EBB012' }}>
                    A culture.
                  </p>
                  <p className="font-sans text-white/55 text-sm mt-5 leading-relaxed" style={{ maxWidth: '26ch' }}>
                    We didn't open a café. We built a third place. Where Somalia's creative class gathers, creates, and connects over the finest brews on the continent.
                  </p>
                </div>
                <div className="w-8 h-px rounded-full bg-white/20 mt-6" />
              </div>

              {/* RIGHT — image flush to card edge */}
              <div className="flex-shrink-0 relative" style={{ width: 'clamp(130px, 34%, 200px)' }}>
                {/* vignette fade from left */}
                <div className="absolute inset-y-0 left-0 w-12 z-10"
                  style={{ background: 'linear-gradient(to right, #A61F2E, transparent)' }} />
                <img
                  src={IMG.img7}
                  alt="Beydan cup"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>

          {/* Cap image */}
          <div className="simg rounded-[2rem] overflow-hidden" style={{ minHeight: '190px' }}>
            <img src={IMG.cap} alt="Beydan style" className="w-full h-full object-cover" />
          </div>

          {/* Stats */}
          <div className="stext bg-[#F5F0E8] rounded-[2rem] p-7 grid grid-cols-3 gap-4">
            {[
              { num: '11+', label: 'Locations' },
              { num: '7', label: 'Brew Methods' },
              { num: '2018', label: 'Est. Year' }
            ].map(({ num, label }) => (
              <div key={label}>
                <span className="font-mono font-black text-[#A61F2E] text-2xl md:text-3xl leading-none">{num}</span>
                <span className="font-sans text-[#111417]/45 text-[10px] mt-1.5 uppercase tracking-widest block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fh', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.fh', start: 'top 85%' } })
      gsap.from('.fm-img', { y: 60, opacity: 0, duration: 1.3, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
      gsap.from('.fm-text > *', { y: 36, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="craft" className="relative py-28 md:py-40 px-6 md:px-20 bg-[#F5F0E8] overflow-hidden">
      <CafePattern opacity={0.8} />
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Morning Meal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* 1:1 image */}
          <div className="fm-img aspect-square rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <img src={IMG.img9} alt="Beydan morning meal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/25 to-transparent" />
          </div>

          {/* Text + wedge badges */}
          <div className="fm-text flex flex-col gap-7">
            <div>
              <span className="font-mono text-[10px] text-[#A61F2E] uppercase tracking-[0.28em] mb-4 block">Morning at Beydan</span>
              <h3 className="font-sans font-black leading-[0.88] tracking-tight mb-5" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                Start Your Morning<br />
                <span className="font-serif italic text-[#A61F2E]">The Right Way.</span>
              </h3>
              <p className="font-sans text-[#111417]/55 text-base leading-relaxed max-w-[36ch]">
                Our breakfast menu is built for slow mornings. Freshly baked croissants straight from the oven, paired with your first specialty pour — every detail crafted to make the day begin beautifully.
              </p>
            </div>

            {/* Wedge badges */}
            <div className="flex flex-wrap gap-3">

              {/* Coffee wedge */}
              <div className="flex items-center gap-3 bg-[#111417] text-white rounded-2xl px-5 py-3.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EBB012" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
                <div>
                  <p className="font-sans font-black text-xs text-white leading-tight">Specialty Coffee</p>
                  <p className="font-mono text-[9px] text-white/38 uppercase tracking-widest mt-0.5">Sourced &amp; Roasted</p>
                </div>
              </div>

              {/* Croissant wedge */}
              <div className="flex items-center gap-3 bg-[#EBB012] text-[#111417] rounded-2xl px-5 py-3.5">
                <svg width="26" height="18" viewBox="0 0 52 36" fill="none" stroke="#111417" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6,28 C2,18 7,5 16,2 C21,-0.5 24,5 26,11 C28,5 31,-0.5 36,2 C45,5 50,18 46,28 C40,36 30,31 26,28 C22,31 12,36 6,28 Z"/>
                  <path d="M16,12 C19,17 22,23 26,26"/>
                  <path d="M36,12 C33,17 30,23 26,26"/>
                </svg>
                <div>
                  <p className="font-sans font-black text-xs text-[#111417] leading-tight">Fresh Croissants</p>
                  <p className="font-mono text-[9px] text-[#111417]/45 uppercase tracking-widest mt-0.5">Baked Daily</p>
                </div>
              </div>

              {/* Hours wedge */}
              <div className="flex items-center gap-3 bg-[#A61F2E]/10 border border-[#A61F2E]/20 rounded-2xl px-5 py-3.5">
                <span className="font-mono font-black text-sm text-[#A61F2E]">07:00</span>
                <div className="w-px h-6 bg-[#A61F2E]/25" />
                <div>
                  <p className="font-sans font-black text-xs text-[#A61F2E] leading-tight">Breakfast Served</p>
                  <p className="font-mono text-[9px] text-[#A61F2E]/55 uppercase tracking-widest mt-0.5">Every Morning</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PROTOCOL (sticky-stack) ── */
function Protocol() {
  const ref = useRef(null)
  const [vsHovered, setVsHovered] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.pcard')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        ScrollTrigger.create({ trigger: card, start: 'top top', endTrigger: cards[cards.length - 1], end: 'top top', pin: true, pinSpacing: false })
        gsap.to(card, { scale: 0.92, opacity: 0.38, ease: 'none',
          scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top top', scrub: true } })
      })
      // Scale 0.82 → 1.0 entrance on protocol images
      gsap.utils.toArray('.pcard-img').forEach(img => {
        gsap.fromTo(img,
          { scale: 0.82 },
          { scale: 1, ease: 'power2.out',
            scrollTrigger: { trigger: img, start: 'top 90%', end: 'top 30%', scrub: 0.8 } }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref}>

      {/* ── 01 SOURCE — Ice Coffee vs Matcha ── */}
      <div className="pcard min-h-[100dvh] flex items-center justify-center px-6 md:px-20 relative overflow-hidden" style={{ background: '#111417', zIndex: 1 }}>
        <CafePattern opacity={1} />
        <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h2 className="font-sans font-black leading-[0.88] tracking-tight mb-6" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>
              <span className="text-white">Ice Coffee</span><br />
              <span className="font-serif italic text-[#EBB012]">vs </span>
              <span style={{ color: '#6DBF8A' }}>Matcha</span>
            </h2>
            <p className="font-sans text-white/48 text-base md:text-lg leading-relaxed max-w-[36ch]">
              Two icons of specialty culture. One chilled with intensity: single origin espresso over ice, cold-pressed and unapologetic. The other, ceremonial grade matcha whisked to a perfect froth. At Beydan, you get both, done right.
            </p>
          </div>

          {/* Asymmetric editorial collage */}
          <div className="relative flex-shrink-0" style={{ width: 'clamp(300px, 44vw, 580px)', height: 'clamp(400px, 55vw, 700px)' }}>

            {/* img8 — Ice Coffee: back layer, top-left anchor, 3:4 portrait */}
            <div className="absolute top-0 left-0 rounded-[2rem] overflow-hidden"
              style={{
                width: '63%', aspectRatio: '3/4',
                transform: 'rotate(-2.2deg)',
                animation: 'float-img 4.4s ease-in-out infinite 0.3s',
                boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)',
              }}>
              <img src={IMG.img8} alt="Ice Coffee" className="pcard-img w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11]/55 via-transparent to-transparent" />
              {/* frosted glass label */}
              <div className="absolute bottom-4 left-4 rounded-xl px-3 py-1.5"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid rgba(255,255,255,0.14)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)' }}>
                <span className="font-mono font-black text-[9px] text-white/90 uppercase tracking-widest">Ice Coffee</span>
              </div>
            </div>

            {/* img9 — Matcha: DOMINANT, front layer, bottom-right, bigger portrait */}
            <div className="absolute bottom-0 right-0 rounded-[2rem] overflow-hidden"
              style={{
                width: '74%', aspectRatio: '4/5',
                transform: 'rotate(2.8deg)',
                animation: 'float-img 5.4s ease-in-out infinite 1.7s',
                zIndex: 10,
                boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.45)',
              }}>
              <img src={IMG.img9} alt="Matcha" className="pcard-img w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11]/50 via-transparent to-transparent" />
              {/* frosted green label */}
              <div className="absolute bottom-4 right-4 rounded-xl px-3 py-1.5"
                style={{ background: 'rgba(109,191,138,0.12)', backdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(109,191,138,0.22)', boxShadow: 'inset 0 1px 0 rgba(109,191,138,0.18)' }}>
                <span className="font-mono font-black text-[9px] uppercase tracking-widest" style={{ color: '#6DBF8A' }}>Matcha</span>
              </div>
            </div>

            {/* VS badge — centered between the two images, spins on hover */}
            <div
              className="absolute z-20 rounded-full bg-[#EBB012] flex items-center justify-center font-mono font-black text-[#111417] cursor-pointer select-none"
              onMouseEnter={() => setVsHovered(true)}
              onMouseLeave={() => setVsHovered(false)}
              style={{
                width: vsHovered ? '72px' : '50px',
                height: vsHovered ? '72px' : '50px',
                fontSize: vsHovered ? '13px' : '10px',
                top: '65%', left: '40%',
                transform: 'translate(-50%, -50%)',
                animation: vsHovered ? 'cd-spin 1.6s linear infinite' : 'none',
                boxShadow: vsHovered
                  ? '0 0 0 6px rgba(235,176,18,0.15), 0 12px 40px rgba(235,176,18,0.55), 0 4px 12px rgba(0,0,0,0.5)'
                  : '0 8px 32px rgba(235,176,18,0.5), 0 2px 8px rgba(0,0,0,0.5)',
                transition: 'width 380ms cubic-bezier(0.34,1.56,0.64,1), height 380ms cubic-bezier(0.34,1.56,0.64,1), font-size 380ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 300ms ease',
              }}>
              VS
            </div>

          </div>
        </div>
      </div>

      {/* ── 02 CRAFT — Precision. Passion. Pour. ── */}
      <div className="pcard min-h-[100dvh] flex items-center justify-center px-6 md:px-14 py-10 relative overflow-hidden" style={{ background: '#0d0f11', zIndex: 2 }}>
        <div className="relative z-10 w-full max-w-6xl mx-auto">

          {/* 4:3 editorial split frame */}
          <div className="relative w-full rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '4/3' }}>

            {/* Right half — photo, breathing freely */}
            <img src={IMG.img7} alt="Craft" className="pcard-img absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center center' }} />

            {/* Photo right-edge vignette for depth */}
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0d0f11]/30 to-transparent" />

            {/* LEFT PANEL — solid red, full height */}
            <div className="absolute inset-y-0 left-0 flex flex-col justify-between px-10 md:px-14 py-10 md:py-12"
              style={{ width: '50%', background: '#A61F2E' }}>

              {/* Top: eyebrow */}
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.28em]">Beydan Coffee</span>

              {/* Middle: headline + body */}
              <div>
                <h2 className="font-sans font-black leading-[0.85] tracking-tight mb-5 text-white"
                  style={{ fontSize: 'clamp(2rem, 3.8vw, 4.4rem)' }}>
                  Precision.<br />
                  <span className="font-serif italic text-[#EBB012]">Passion.</span><br />
                  Pour.
                </h2>
                <div className="w-6 h-px mb-5 rounded-full bg-white/20" />
                <p className="font-sans text-white/55 leading-relaxed"
                  style={{ fontSize: 'clamp(0.75rem, 1vw, 0.95rem)', maxWidth: '27ch' }}>
                  Every extraction is a deliberate act. Calibrated grinders, dialed-in temps, baristas who treat each shot as a signature. No shortcuts.
                </p>
              </div>

              {/* Bottom: craft stats */}
              <div className="flex gap-5 md:gap-7">
                {[
                  { val: '93°', label: 'Brew Temp' },
                  { val: '27s', label: 'Extract' },
                  { val: '7', label: 'Methods' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <span className="font-mono font-black text-[#EBB012] block"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', lineHeight: 1 }}>{val}</span>
                    <span className="font-mono text-[8px] text-white/28 uppercase tracking-widest mt-1 block">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thin separator line between panels */}
            <div className="absolute inset-y-0 w-px bg-white/8" style={{ left: '50%' }} />

          </div>
        </div>
      </div>

      {/* ── 03 CULTURE — Built for Mogadishu ── */}
      <div className="pcard min-h-[100dvh] flex items-center justify-center px-6 md:px-20 relative overflow-hidden" style={{ background: '#F5F0E8', zIndex: 3 }}>
        <CafePattern opacity={0.85} />
        <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7 bg-[#A61F2E]/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A61F2E]">Beydan Coffee</span>
            </div>
            <h2 className="font-sans font-black leading-[0.88] tracking-tight mb-6 text-[#111417]" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>
              Built for<br />
              <span className="font-serif italic text-[#A61F2E]">Somalia.</span>
            </h2>
            <p className="font-sans text-[#111417]/55 text-base md:text-lg leading-relaxed max-w-[38ch]">
              Beydan isn't just a coffee brand. It's a movement. Across 11 locations in three cities, our spaces are built for creators, thinkers, and dreamers. We host art shows, live sets, and brew workshops. Every location is a living room for the next generation.
            </p>
          </div>
          <div className="rounded-[2rem] overflow-hidden flex-shrink-0" style={{ width: 'clamp(220px, 28vw, 360px)', aspectRatio: '3/4' }}>
            <img src={IMG.model1} alt="Beydan culture" className="pcard-img w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </section>
  )
}

/* ── TESTIMONIALS BLOCK ── */
const TESTIMONIALS = [
  {
    name: 'Faadumo Hassan',
    designation: 'Regular — Taleh Branch',
    quote: 'Every visit feels like the first. The Qaxwo Somali is the most authentic cup I have had outside of home. Beydan is not just a café, it is our living room.',
  },
  {
    name: 'Abdirahman Warsame',
    designation: 'Food Blogger — Mogadishu',
    quote: 'The Signature Frappe lineup is unmatched in the city. Beydan pulls off specialty coffee with a Somali soul — something I have never seen done this well.',
  },
  {
    name: 'Sahra Idle',
    designation: 'Architect — Hargeisa',
    quote: 'The Wadaadiid Mall branch is the most beautifully designed café space in Hargeisa. I come here to work and always leave inspired. The Lotus Tres Leches is dangerous.',
  },
]

function TestimonialsBlock() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  function go(next) {
    setActive(next)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => tick(), 5000)
  }
  function tick() {
    setDir(1)
    setActive(p => (p + 1) % TESTIMONIALS.length)
  }
  useEffect(() => {
    timerRef.current = setInterval(tick, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="mt-24 pt-16 border-t border-white/8 flex flex-col md:flex-row items-start gap-10 md:gap-16">

      {/* LEFT — big headline */}
      <div className="flex-shrink-0 md:w-[38%]">
        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.22em] block mb-5">What Guests Say</span>
        <h2 className="font-sans font-black text-white leading-[0.88] tracking-tight" style={{ fontSize: 'clamp(3.2rem, 6vw, 6.5rem)' }}>
          What<br />
          they<br />
          <span className="font-serif italic" style={{ color: '#EBB012', fontSize: '1.12em' }}>say.</span>
        </h2>
        {/* nav dots */}
        <div className="flex gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? '2rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '999px',
                background: i === active ? '#EBB012' : 'rgba(255,255,255,0.18)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 400ms cubic-bezier(0.34,1.56,0.64,1), background 300ms ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — quote card */}
      <div className="flex-1 relative" style={{ minHeight: 'clamp(14rem, 30vh, 22rem)' }}>
        {TESTIMONIALS.map((item, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity: i === active ? 1 : 0,
              transform: i === active ? 'translateY(0px)' : `translateY(${i < active ? '-24px' : '24px'})`,
              transition: 'opacity 550ms ease, transform 550ms cubic-bezier(0.32,0.72,0,1)',
              pointerEvents: i === active ? 'auto' : 'none',
            }}
          >
            <div
              className="h-full rounded-[2rem] flex flex-col justify-between p-8 md:p-10"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* open-quote glyph */}
              <span className="font-serif text-[5rem] leading-none text-white/8 select-none" aria-hidden>&#8220;</span>

              <p
                className="font-sans text-white/80 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', marginTop: '-1.5rem' }}
              >
                {item.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-white/15 rounded-full" />
                <div>
                  <p className="font-sans font-bold text-white text-sm">{item.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest mt-0.5" style={{ color: '#EBB012' }}>{item.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

/* ── MENU ── */
function MenuSection() {
  const items = [
    { img: IMG.products, name: 'Signature Frappes', sub: '5 flavours, all original', tag: 'BESTSELLER', price: 'From $3.50' },
    { img: IMG.model1, name: 'Mango Refresh', sub: 'Tropical, cold, addictive', tag: 'TRENDING', price: '$4.00' },
    { img: IMG.img5, name: 'Qaxwo Somali', sub: 'Our heritage in a cup', tag: 'SIGNATURE', price: '$3.50' },
    { img: IMG.img6, name: 'Lotus Tres Leches', sub: 'The one you come back for', tag: 'NEW', price: '$5.00' },
  ]
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mi', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
      // Image scale 0.8 → 1.0 on scroll entrance, fade on exit
      gsap.utils.toArray('.mi-img').forEach(img => {
        gsap.fromTo(img,
          { scale: 0.82, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out',
            scrollTrigger: { trigger: img, start: 'top 88%', end: 'top 40%', scrub: 0.6 } }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} id="menu" className="relative py-28 md:py-40 px-6 md:px-20 bg-[#111417] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 bg-white/5">
              <span className="font-mono text-[10px] text-white/38 uppercase tracking-[0.22em]">What We Serve</span>
            </div>
            <h2 className="font-sans font-black text-5xl md:text-6xl text-white leading-[0.9] tracking-tight">
              The<br /><span className="font-serif italic text-[#EBB012]">Menu.</span>
            </h2>
            <p className="font-sans text-white/40 text-sm mt-4 max-w-[36ch] leading-relaxed">
              From Somali-style Qaxwo to cold specialty frappes. Every item crafted for the culture.
            </p>
          </div>
          <a href="https://beydancoffee.com/menu/" target="_blank" rel="noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-3 text-white font-semibold text-sm px-5 py-3 rounded-full group hover:bg-white/6 bg-white/5"
            style={{ transition: `all 500ms ${SPRING}` }}>
            <span>Full Menu</span>
            <span className="w-6 h-6 rounded-full bg-white/8 flex items-center justify-center group-hover:translate-x-px group-hover:-translate-y-px"
              style={{ transition: `transform 500ms ${SPRING}` }}>
              <ArrowRight size={12} />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="mi group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] relative">
                <img src={item.img} alt={item.name} className="mi-img w-full h-full object-cover group-hover:scale-105"
                  style={{ transition: `transform 700ms ${SPRING}` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/92 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[9px] font-bold bg-[#EBB012] text-[#111417] px-3 py-1 rounded-full uppercase tracking-widest block">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans font-black text-white text-sm">{item.name}</p>
                  <p className="font-sans text-white/45 text-xs mt-0.5">{item.sub}</p>
                  <p className="font-mono text-[#EBB012] text-xs mt-1.5">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── TESTIMONIALS ── */}
        <TestimonialsBlock />
      </div>
    </section>
  )
}

/* ── CTA BAND ── */
function CTABand() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ct', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
      // Scrubbing word-by-word opacity reveal
      const words = gsap.utils.toArray('.ct-word')
      if (words.length) {
        gsap.fromTo(words,
          { opacity: 0.08 },
          { opacity: 1, stagger: 0.4, ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top 60%', end: 'center 30%', scrub: 1 } }
        )
      }
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="relative py-28 md:py-40 px-6 md:px-20 bg-[#A61F2E] overflow-hidden">
      <div className="absolute inset-0 stripe-bg opacity-10" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="ct inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10 bg-white/8">
          <span className="font-mono text-[10px] text-white/45 uppercase tracking-[0.22em]">Come Find Us</span>
        </div>
        <h2 className="ct font-sans font-black text-5xl md:text-7xl text-white leading-[0.9] tracking-tight mb-3">
          <span className="ct-word inline-block">Your</span>{' '}
          <span className="ct-word inline-block">table</span><br />
          <span className="ct-word font-serif italic inline-block">awaits.</span>
        </h2>
        <p className="ct font-sans text-white/55 text-base max-w-[28ch] mx-auto mb-6 leading-relaxed">
          Step inside. Order something bold. Stay longer than you planned.
        </p>
        <p className="ct font-mono text-[10px] text-white/35 uppercase tracking-[0.3em] mb-12">
          Open daily · 07:00 – 22:00 · Mogadishu · Hargeisa · Garowe
        </p>
        <a href="#find-us"
          className="ct inline-flex items-center gap-3 bg-[#EBB012] text-[#111417] font-black text-base px-8 py-4 rounded-full group active:scale-[0.97]"
          style={{ transition: `transform 200ms ${SPRING}` }}>
          <MapPin size={16} />
          <span>Find a Store</span>
          <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-px group-hover:-translate-y-px group-hover:scale-110"
            style={{ transition: `transform 500ms ${SPRING}` }}>
            <ArrowRight size={14} />
          </span>
        </a>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer id="find-us" className="relative bg-[#111417] rounded-t-[3rem] pt-16 pb-10 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="md:col-span-2">
            <img src={IMG.logo} alt="Beydan Coffee" style={{ width: '8rem', height: '8rem', objectFit: 'contain', borderRadius: '50%', marginBottom: '1rem' }} />
            <p className="font-sans text-white/32 text-sm leading-relaxed max-w-xs mb-3">
              Africa's Modern Coffeehouse.<br />Founded in Somalia, 2018.
            </p>
            <p className="font-sans text-white/22 text-xs leading-relaxed max-w-xs mb-7">
              11 locations across Mogadishu, Hargeisa & Garowe. Growing every year. Every cup tells the story of where we come from.
            </p>
            <div className="flex gap-3">
              {[{
                href: 'https://www.instagram.com/beydancoffee/', icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>)
              }, {
                href: 'https://x.com/beydancoffee', icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Z" />
                  </svg>)
              }].map(({ href, icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/38 hover:text-[#EBB012] hover:bg-white/10 hover:-translate-y-0.5"
                  style={{ transition: `all 500ms ${SPRING}` }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-white/22 uppercase tracking-widest mb-6">Navigate</h4>
            {['Menu', 'Craft', 'Story', 'Find Us'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="block font-sans text-sm text-white/45 hover:text-[#EBB012] mb-3 hover:-translate-y-0.5"
                style={{ transition: `all 350ms ${SPRING}` }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-white/22 uppercase tracking-widest mb-6">Our Cities</h4>
            <div className="flex flex-col gap-3 mb-5">
              {[
                { city: 'Mogadishu', detail: 'Taleh · Jubba · Banaadir Mall · Hamar Weyne · Laba Dhagah · Aleen Square', flag: '🇸🇴' },
                { city: 'Hargeisa', detail: 'Wadaadiid Mall, Jigjiga Yar — Somaliland', flag: '🇸🇴' },
                { city: 'Garowe', detail: 'Tamam Park — Puntland', flag: '🇸🇴' },
              ].map(({ city, detail, flag }) => (
                <div key={city}>
                  <p className="font-sans font-bold text-xs text-white/70 mb-0.5">{flag} {city}</p>
                  <p className="font-sans text-[10px] text-white/30 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-white/22 uppercase tracking-widest mb-3">Open daily 07:00 – 22:00</p>
            <p className="font-mono text-xs text-[#EBB012] mb-1">@beydancoffee</p>
            <p className="font-sans text-xs text-white/28">info@beydancoffee.com</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="font-mono text-[10px] text-white/22 uppercase tracking-widest">System Operational</span>
          </div>
          <p className="font-mono text-[10px] text-white/14">© 2026 Beydan Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <TapeRibbon />
      <Story />
      <Features />
      <Protocol />
      <MenuSection />
      <CTABand />
      <Footer />
    </div>
  )
}
