import './Specs.css';

// TODO: replace every [ ] with the real number once the prototype is measured.
const specs = [
  ['Pods per set', '4'],
  ['Pod diameter', '[ø mm]'],
  ['Pod weight', '[g]'],
  ['Light', 'RGB ring, full colour'],
  ['Sound', 'Built-in buzzer, [dB]'],
  ['Vibration', 'Haptic motor'],
  ['Connectivity', 'Bluetooth Low Energy'],
  ['Range from phone', '[m]'],
  ['Battery life', '[h] active use'],
  ['Charging', '4-pod tower, USB-C'],
  ['Full charge', '[h]'],
  ['Water resistance', '[IP rating]'],
  ['App', 'iOS and Android'],
  ['Mounting', 'Floor, wall strap, handheld'],
];

function Specs() {
  return (
    <section className="section" id="specs">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Specs</span>
          <h2 className="section-title">The hardware.</h2>
          <p className="section-text">
            Prototype figures. Anything in brackets is still being measured and will be
            final before the first production run.
          </p>
        </div>

        <dl className="spec-list">
          {specs.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Specs;
