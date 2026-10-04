import Reveal from '../animation/Reveal';

export default function SectionHeading({ number, title, description }) {
  return (
    <div className="section-heading">
      <Reveal>
        <p className="eyebrow">{number}</p>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </Reveal>
      {description && <Reveal delay={0.12}><p>{description}</p></Reveal>}
    </div>
  );
}
