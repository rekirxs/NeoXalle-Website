import './SportBackdrop.css';

/**
 * Faint sport line-art drifting behind a section. Purely decorative:
 * everything here is aria-hidden and ignores pointer events.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Paddle() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <ellipse cx="46" cy="40" rx="30" ry="33" />
      <ellipse cx="46" cy="40" rx="24" ry="27" />
      <path d="M57 70l14 23a6 6 0 0 1-10 6L47 77" />
      <circle cx="84" cy="22" r="9" />
    </svg>
  );
}

function Football() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <circle cx="50" cy="50" r="40" />
      <path d="M50 26l16 12-6 19H40l-6-19z" />
      <path d="M50 26V10M66 38l15-5M60 57l10 14M40 57L30 71M34 38l-15-5" />
      <path d="M26 73l8-2M74 73l-8-2M50 90v-8" />
    </svg>
  );
}

function Shuttlecock() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <path d="M38 62h24l12 26a4 4 0 0 1-4 6H30a4 4 0 0 1-4-6z" />
      <path d="M50 62V94M38 64l-6 30M62 64l6 30" />
      <path d="M38 62a12 12 0 0 1 24 0" />
      <circle cx="50" cy="50" r="12" />
    </svg>
  );
}

function TennisBall() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <circle cx="50" cy="50" r="38" />
      <path d="M18 30a38 38 0 0 1 0 40" />
      <path d="M82 30a38 38 0 0 0 0 40" />
    </svg>
  );
}

function Target() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <circle cx="50" cy="50" r="38" />
      <circle cx="50" cy="50" r="24" />
      <circle cx="50" cy="50" r="10" />
      <path d="M50 2v16M50 82v16M2 50h16M82 50h16" />
    </svg>
  );
}

const shapes = [
  { Shape: Paddle, cls: 'bd-1' },
  { Shape: Football, cls: 'bd-2' },
  { Shape: Shuttlecock, cls: 'bd-3' },
  { Shape: TennisBall, cls: 'bd-4' },
  { Shape: Target, cls: 'bd-5' },
];

function SportBackdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      {shapes.map(({ Shape, cls }) => (
        <span className={`bd ${cls}`} key={cls}>
          <Shape />
        </span>
      ))}
    </div>
  );
}

export default SportBackdrop;
