import './Inside.css';

const parts = [
  {
    n: '01',
    title: 'Diffuser cap',
    text: 'The whole eight-sided top face lights up, so the cue is visible from any angle and from across a hall.',
  },
  {
    n: '02',
    title: 'LED ring',
    text: 'A ring of LEDs sits under the cap and washes it evenly, instead of a single point you have to look straight at.',
  },
  {
    n: '03',
    title: 'Main board',
    text: 'Custom PCB carrying the microcontroller, the radio, the sensor and the haptic driver on one board.',
  },
  {
    n: '04',
    title: 'Housing',
    text: 'Eight-sided shell with cut-away legs, so it sits flat on a floor or clips to the edge of a table.',
  },
];

function Inside() {
  return (
    <section className="section inside" id="inside">
      <div className="container inside-inner">
        <figure className="inside-figure">
          <img
            src="/renders/exploded.png"
            alt="Exploded view of a NeoXalle pod: diffuser cap, LED ring, main circuit board and housing."
            width="473"
            height="574"
            loading="lazy"
          />
        </figure>

        <div className="inside-copy">
          <div className="section-head">
            <span className="section-label">Inside the pod</span>
            <h2 className="section-title">Four parts, one job.</h2>
            <p className="section-text">
              Every pod is the same stack: light it evenly, sense the hit, tell the phone,
              buzz when it has to.
            </p>
          </div>

          <ol className="part-list">
            {parts.map((part) => (
              <li className="part" key={part.n}>
                <span className="part-n">{part.n}</span>
                <div>
                  <h3 className="part-title">{part.title}</h3>
                  <p className="part-text">{part.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Inside;
