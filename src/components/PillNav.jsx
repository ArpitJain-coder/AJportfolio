import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Icon from '../utils/Icon';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const mobileOverlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuMetaRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  /* ── Desktop Pill Hover & Setup ── */
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navEl = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, { scale: 1, duration: 0.6, ease });
      }

      if (navEl) {
        gsap.set(navEl, { width: 0, overflow: 'hidden' });
        gsap.to(navEl, { width: 'auto', duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  /* ── Body Scroll Lock for Fullscreen Mobile Overlay & Resize Reset ── */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileOpen) {
        setIsMobileOpen(false);
        if (mobileOverlayRef.current) {
          gsap.set(mobileOverlayRef.current, { display: 'none' });
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileOpen]);

  /* ── GSAP Mobile Menu Entrance & Exit Animations ── */
  const toggleMobileMenu = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);

    const overlay = mobileOverlayRef.current;
    const itemEls = menuItemsRef.current.filter(Boolean);
    const metaEl = menuMetaRef.current;

    if (!overlay) return;

    if (nextState) {
      // Opening
      gsap.killTweensOf([overlay, ...itemEls, metaEl]);
      gsap.set(overlay, { display: 'flex', opacity: 0, y: '-100%' });
      gsap.set(itemEls, { opacity: 0, y: 50 });
      if (metaEl) gsap.set(metaEl, { opacity: 0, y: 20 });

      const tl = gsap.timeline();
      tl.to(overlay, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out'
      })
      .to(itemEls, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out'
      }, '-=0.3')
      .to(metaEl, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.2');
    } else {
      // Closing
      gsap.killTweensOf([overlay, ...itemEls]);
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
        }
      });
      tl.to(itemEls, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        stagger: 0.03,
        ease: 'power2.in'
      })
      .to(overlay, {
        y: '-100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power4.in'
      }, '-=0.1');
    }

    onMobileMenuClick?.();
  };

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const isExternalLink = href =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = href => href && !isExternalLink(href);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  };

  return (
    <>
      {/* ── Main Floating Nav Bar ── */}
      <div className="pill-nav-container">
        <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
          {/* Logo */}
          {isRouterLink(items?.[0]?.href) ? (
            <Link
              className="pill-logo"
              to={items[0].href}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              role="menuitem"
              ref={el => { logoRef.current = el; }}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </Link>
          ) : (
            <a
              className="pill-logo"
              href={items?.[0]?.href || '#'}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={el => { logoRef.current = el; }}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </a>
          )}

          {/* Desktop Menu Pills */}
          <div className="pill-nav-items desktop-only" ref={navItemsRef}>
            <ul className="pill-list" role="menubar">
              {items.map((item, i) => (
                <li key={item.href || `item-${i}`} role="none">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={el => { circleRefs.current[i] = el; }}
                      />
                      <span className="label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span className="pill-label-hover" aria-hidden="true">{item.label}</span>
                      </span>
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={el => { circleRefs.current[i] = el; }}
                      />
                      <span className="label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span className="pill-label-hover" aria-hidden="true">{item.label}</span>
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            className={`awwwards-menu-btn mobile-only ${isMobileOpen ? 'is-active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span className="btn-glow" />
            <span className="btn-label font-mono text-[10px] uppercase tracking-widest mr-1 text-white/70">
              {isMobileOpen ? 'Close' : 'Menu'}
            </span>
            <div className="burger-icon">
              <span className="line line-1" />
              <span className="line line-2" />
            </div>
          </button>
        </nav>
      </div>

      {/* ══════════════════════════════════════════════════════════
          AWWARDS-STYLE FULLSCREEN MOBILE OVERLAY MENU
          ══════════════════════════════════════════════════════════ */}
      <div
        className="awwwards-mobile-overlay"
        ref={mobileOverlayRef}
        style={{ display: 'none' }}
      >
        {/* Background Ambient Glow & Grid */}
        <div className="awwwards-overlay-bg">
          <div className="glow-orb" />
          <div className="noise-pattern" />
        </div>

        {/* Overlay Header Bar */}
        <div className="awwwards-overlay-header">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
              <span className="font-serif text-xs font-bold text-[#FF4500]">AJ</span>
            </div>
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">NAVIGATION</span>
          </div>
          <button
            className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-lg hover:bg-[#FF4500] hover:border-[#FF4500] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <Icon icon="lucide:x" />
          </button>
        </div>

        {/* Main Editorial Menu Links */}
        <div className="awwwards-overlay-content">
          <ul className="awwwards-menu-list">
            {items.map((item, i) => {
              const num = String(i + 1).padStart(2, '0');
              const isActive = activeHref === item.href;

              return (
                <li
                  key={item.href || `awwwards-${i}`}
                  ref={el => { menuItemsRef.current[i] = el; }}
                  className="awwwards-menu-item"
                >
                  {isRouterLink(item.href) ? (
                    <Link
                      to={item.href}
                      className={`awwwards-menu-link ${isActive ? 'is-active' : ''}`}
                      onClick={toggleMobileMenu}
                    >
                      <span className="item-number font-mono">{num}</span>
                      <span className="item-text font-serif">{item.label}</span>
                      {isActive && <span className="item-dot" />}
                      <Icon icon="lucide:arrow-up-right" className="item-arrow" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`awwwards-menu-link ${isActive ? 'is-active' : ''}`}
                      onClick={toggleMobileMenu}
                    >
                      <span className="item-number font-mono">{num}</span>
                      <span className="item-text font-serif">{item.label}</span>
                      {isActive && <span className="item-dot" />}
                      <Icon icon="lucide:arrow-up-right" className="item-arrow" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Overlay Bottom Footer & Meta */}
        <div className="awwwards-overlay-footer" ref={menuMetaRef}>
          <div className="footer-status font-mono">
            <span className="status-dot" />
            <span>JAIPUR, INDIA • OPEN TO INTERNSHIPS</span>
          </div>
          <div className="footer-socials font-mono">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="sep">•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="sep">•</span>
            <a href="mailto:arpitjain1402@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PillNav;
