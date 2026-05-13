'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 68);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="logo">
            <Image src="/logo.png" alt="DMATE" width={120} height={36} priority />
          </a>
          <ul className="nav-links">
            <li><a href="#services">서비스</a></li>
            <li><a href="#about">소개</a></li>
            <li><a href="#team">팀</a></li>
            <li><a href="#contact">문의</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary">무료 상담</a>
          <button
            className="hamburger"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#services" onClick={closeMenu}>서비스</a>
        <a href="#about" onClick={closeMenu}>소개</a>
        <a href="#team" onClick={closeMenu}>팀</a>
        <a href="#contact" onClick={closeMenu}>문의</a>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>무료 상담</a>
      </div>
    </nav>
  );
}
