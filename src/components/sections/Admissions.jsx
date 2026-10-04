import { Check } from 'lucide-react';
import Reveal from '../animation/Reveal';
import Button from '../ui/Button';

export default function Admissions(){return <section className="admissions" id="admissions"><div className="admissions-inner"><Reveal><p className="eyebrow">05 / ADMISSIONS</p><h2>Ready to see<br/><i>what’s possible?</i></h2><p>Registrations are open for Classes IV–IX and XI. Take the first step toward a campus where learning has room to breathe.</p><div className="admission-points"><span><Check size={15}/> Transparent process</span><span><Check size={15}/> Residential & co-ed</span><span><Check size={15}/> CBSE curriculum</span></div><Button href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer" variant="light">Apply to TIS</Button></Reveal><div className="admission-side"><span>DEHRADUN / INDIA</span><strong>Begin<br/>here.</strong><small>Admission helpline<br/><a href="tel:+919837983791">+91 98379 83791</a></small></div></div></section>}
