import { Menu, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../../data/siteData';
import ThemeToggle from '../animation/ThemeToggle';

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Tulas International School home"><span className="brand-mark">T</span><span>TULAS <em>INTERNATIONAL SCHOOL</em></span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <div className="nav-actions"><ThemeToggle theme={theme} onToggle={onToggle}/><a className="nav-cta" href="#admissions">Apply now <ArrowUpRight size={15}/></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Menu size={22}/></button></div>
    {open && <nav className="mobile-nav">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a href="#admissions" onClick={() => setOpen(false)}>Apply now <ArrowUpRight size={15}/></a></nav>}
  </header>;
}
