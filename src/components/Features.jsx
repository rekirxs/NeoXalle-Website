import './Features.css';

const features = [
  {
    key: 'light',
    title: 'Light',
    text: 'A full-colour ring on every pod. Colour carries meaning: which pod to hit, which to ignore, which one costs you a point.',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </>
    ),
  },
  {
    key: 'sound',
    title: 'Sound',
    text: 'Audio cues let you train without looking. Useful when the eyes are busy watching a ball, an opponent, or the road ahead.',
    icon: (
      <>
        <path d="M4 9v6h4l5 4V5L8 9H4z" />
        <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
      </>
    ),
  },
  {
    key: 'vibration',
    title: 'Vibration',
    text: 'Held or strapped on, the pod cues through touch. Works where light is washed out and sound is drowned by a crowd.',
    icon: (
      <>
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M3.5 9v6M6 10.5v3M20.5 9v6M18 10.5v3" />
      </>
    ),
  },
];

function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Three channels</span>
          <h2 className="section-title">Competition isn&rsquo;t silent, and it isn&rsquo;t still.</h2>
          <p className="section-text">
            Most reaction trainers only flash a light. Real sport throws everything at you at
            once, so NeoXalle does too, and lets you decide which channels are live.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((f) => (
            <article className={`feature feature-${f.key}`} key={f.key}>
              <span className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
              </span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
