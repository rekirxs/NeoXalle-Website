import './Backdrop.css';

/**
 * Faint octagon geometry drifting behind a section — the same eight-sided
 * shape as the pods. Purely decorative: aria-hidden, ignores pointer events.
 */

// Eight points on a circle of radius r, rotated so the octagon sits flat on top.
function octagon(r, cx = 50, cy = 50) {
  return Array.from({ length: 8 }, (_, i) => {
    const angle = ((22.5 + i * 45) * Math.PI) / 180;
    return `${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`;
  }).join(' ');
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinejoin: 'round',
};

// A set of nested octagons — like the rings on a pod, seen flat.
function Rings() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <polygon points={octagon(48)} />
      <polygon points={octagon(36)} />
      <polygon points={octagon(24)} />
      <circle cx="50" cy="50" r="11" />
    </svg>
  );
}

// A single octagon with a crosshair through it.
function Marker() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <polygon points={octagon(44)} />
      <circle cx="50" cy="50" r="16" />
      <path d="M50 0v18M50 82v18M0 50h18M82 50h18" strokeLinecap="round" />
    </svg>
  );
}

// Plain outline, used large and very faint.
function Outline() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <polygon points={octagon(49)} />
    </svg>
  );
}

// Octagon with the corner facets picked out.
function Facets() {
  return (
    <svg viewBox="0 0 100 100" {...stroke}>
      <polygon points={octagon(46)} />
      <polygon points={octagon(30)} />
      <path d="M50 4v18M82 18L70 30M96 50H78M82 82L70 70M50 96V78M18 82l12-12M4 50h18M18 18l12 12" />
    </svg>
  );
}

const shapes = [
  { Shape: Rings, cls: 'bd-1' },
  { Shape: Outline, cls: 'bd-2' },
  { Shape: Marker, cls: 'bd-3' },
  { Shape: Facets, cls: 'bd-4' },
  { Shape: Outline, cls: 'bd-5' },
];

function Backdrop() {
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

export default Backdrop;
