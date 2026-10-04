import { ArrowUpRight, Brain, FlaskConical, Globe2 } from 'lucide-react';
import Reveal from '../animation/Reveal';
import SectionHeading from '../ui/SectionHeading';

const cards = [
 { icon: Brain, title: 'Reasoning over rote', text: 'A CBSE curriculum shaped around analytical thinking, curiosity and skill-based learning.' },
 { icon: FlaskConical, title: 'Learning by doing', text: 'Project-based and art-integrated experiences turn concepts into practical understanding.' },
 { icon: Globe2, title: 'Ready for the world', text: 'Technology, leadership and global-minded experiences prepare students for what comes next.' },
];

export default function Academics(){return <section className="section academics" id="academics"><SectionHeading number="02 / ACADEMICS" title="Built for <i>bright minds.</i>" description="From digital classrooms to experiential learning, TIS blends strong foundations with room to think independently." /><div className="academic-grid">{cards.map((c,i)=>{const Icon=c.icon;return <Reveal key={c.title} delay={i*.08}><article className="academic-card"><div className="card-icon"><Icon size={20}/></div><span>0{i+1}</span><h3>{c.title}</h3><p>{c.text}</p><a href="https://tis.edu.in/academics/affilation/" target="_blank" rel="noreferrer" aria-label={`Read about ${c.title}`}><ArrowUpRight size={17}/></a></article></Reveal>})}</div></section>}
