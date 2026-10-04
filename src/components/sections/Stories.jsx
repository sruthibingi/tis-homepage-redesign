import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../animation/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/siteData';

export default function Stories(){return <section className="section stories" id="stories"><SectionHeading number="04 / STORIES" title="More than a <i>school.</i>" description="Because the best measure of a school is what its students carry with them when they leave." /><div className="story-grid">{testimonials.map((t,i)=><Reveal key={t.name} delay={i*.1}><motion.article className="story-card" whileHover={{ y: -6 }} transition={{ duration: .2 }}><Quote size={28}/><p>“{t.quote}”</p><div><strong>{t.name}</strong><span>{t.role}</span></div></motion.article></Reveal>)}</div></section>}
