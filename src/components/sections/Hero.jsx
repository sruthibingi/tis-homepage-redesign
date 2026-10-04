import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import Reveal from '../animation/Reveal';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-noise" />
    <div className="hero-copy">
      <Reveal><Badge>DEHRADUN · CBSE · EST. 2012</Badge></Reveal>
      <Reveal delay={0.08}><h1>Welcome to <span>Tulas</span><br/>International School.</h1></Reveal>
      <Reveal delay={0.16}><p className="hero-lead">TIS is one of India’s top boarding and day schools in Dehradun. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.</p></Reveal>
      <Reveal delay={0.24}><div className="hero-actions"><Button href="#admissions">Begin your Tulas journey</Button><a className="text-link" href="#life"><span className="play"><Play size={13} fill="currentColor"/></span> Explore campus life</a></div></Reveal>
    </div>
    <div className="hero-visual" aria-label="Tulas campus experience">
      <div className="hero-image"><div className="image-caption"><span>THE MODERN GURUKUL</span><strong>Learn. Explore. Become.</strong></div></div>
      <motion.div className="floating-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}><span>16+</span><small>sports & experiences</small></motion.div>
      <div className="vertical-label">TULAS / 01</div>
    </div>
    <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16}/></a>
  </section>;
}
