import { ArrowUpRight } from 'lucide-react';
import Reveal from '../animation/Reveal';
import Badge from '../ui/Badge';
import { pillars } from '../../data/siteData';

export default function About() {
 return <section className="section about" id="about"><div className="section-grid"><div><Reveal><Badge>01 / THE TULAS IDEA</Badge><h2>School should feel like an <i>opportunity.</i></h2></Reveal></div><div className="about-copy"><Reveal delay={0.1}><p className="large-copy">At TIS, learning is not a chore or a competition. It is an opportunity to explore, question, create and grow into an independent global citizen.</p></Reveal><Reveal delay={0.18}><a className="arrow-link" href="https://tis.edu.in/about-tis/why-choose-us/" target="_blank" rel="noreferrer">Why families choose Tulas <ArrowUpRight size={17}/></a></Reveal></div></div>
   <div className="pillar-grid">{pillars.map((p, i) => <Reveal key={p.number} delay={i * 0.08}><article className="pillar"><span>{p.number}</span><h3>{p.title}</h3><p>{p.text}</p></article></Reveal>)}</div>
 </section>;
}
