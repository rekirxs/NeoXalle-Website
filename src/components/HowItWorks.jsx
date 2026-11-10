import './HowItWorks.css';

const steps = [
  {
    n: '01',
    title: 'Place the pods',
    text: 'Pull four pods off the charging tower and put them wherever you train. Floor, wall, cones, posts.',
  },
  {
    n: '02',
    title: 'Pick a drill',
    text: 'Choose a preset in the app or build your own sequence: order, timing, which senses fire.',
  },
  {
    n: '03',
    title: 'React',
    text: 'Pods fire light, sound and vibration. Hit the right one before the window closes.',
  },
  {
    n: '04',
    title: 'Read the numbers',
    text: 'Reaction time and accuracy land in the app the moment the drill ends. Compare it to last week.',
  },
];

function HowItWorks() {
  return (
    <section className="section section-alt" id="how">
      <div className="container">
        <div className="section-head">
          <span className="section-label">How it works</span>
          <h2 className="section-title">Four pods. Endless drills.</h2>
          <p className="section-text">
            Out of the tower and running in under a minute.
          </p>
        </div>

        <div className="how-body">
          <figure className="how-figure">
            <img
              src="/renders/tower.png"
              alt="Four NeoXalle pods stacked on their charging tower."
              width="362"
              height="441"
              loading="lazy"
            />
            <figcaption>All four pods charge stacked on the tower.</figcaption>
          </figure>

          <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.n}>
              <span className="step-n">{step.n}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
