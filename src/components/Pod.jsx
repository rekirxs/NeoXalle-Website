/**
 * A single pod: an octagon with a ring inside, echoing the mark in the logo.
 * `color` is the lit colour, `lit` toggles the glow on.
 */

// Eight points on a circle of radius r, rotated so the octagon sits flat on top.
function octagon(r, cx = 60, cy = 60) {
  return Array.from({ length: 8 }, (_, i) => {
    const angle = ((22.5 + i * 45) * Math.PI) / 180;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
}

function Pod({ color = '#b455cc', lit = false, size = 120 }) {
  const id = color.replace('#', '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {lit && <circle cx="60" cy="60" r="58" fill={`url(#glow-${id})`} />}

      {/* outer light ring */}
      <polygon
        points={octagon(50)}
        fill="none"
        stroke={lit ? color : '#32193e'}
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* body */}
      <polygon
        points={octagon(42)}
        fill={lit ? color : '#241030'}
        stroke={lit ? color : '#3d1f4a'}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* the circle inside */}
      <circle
        cx="60"
        cy="60"
        r="24"
        fill="none"
        stroke={lit ? 'rgba(255,255,255,0.7)' : '#45244f'}
        strokeWidth="2"
      />

      {/* centre sensor */}
      <circle cx="60" cy="60" r="7" fill={lit ? 'rgba(255,255,255,0.92)' : '#45244f'} />
    </svg>
  );
}

export default Pod;
