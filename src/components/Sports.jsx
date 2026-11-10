import './Sports.css';

const sports = [
  {
    name: 'Table tennis',
    text: 'Footwork patterns around the table, recovery to ready position, serve-return decisions at speed.',
    lead: true,
  },
  { name: 'Tennis & padel', text: 'Split-step timing, direction changes, recovery to centre.' },
  { name: 'Badminton & squash', text: 'Court coverage, lunge and recover, reading the cue late.' },
  { name: 'Combat sports', text: 'Reaction under fatigue, feint recognition, guard discipline.' },
  { name: 'Football & basketball', text: 'Scanning, first touch under pressure, decision speed in tight space.' },
  { name: 'Rehab & strength', text: 'Measured progress, return-to-play testing, cognitive load work.' },
];

function Sports() {
  return (
    <section className="section section-alt" id="sports">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Sports</span>
          <h2 className="section-title">Designed at a table tennis table.</h2>
          <p className="section-text">
            The drills, the pod spacing and the timing windows all come from table tennis,
            because that is the sport it was built around. Reaction and footwork are not
            unique to it, so the same hardware carries straight over.
          </p>
        </div>

        <div className="sport-grid">
          {sports.map((sport) => (
            <article className={sport.lead ? 'sport sport-lead' : 'sport'} key={sport.name}>
              {sport.lead && <span className="sport-flag">Primary</span>}
              <h3 className="sport-name">{sport.name}</h3>
              <p className="sport-text">{sport.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;
