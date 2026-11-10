import { useCallback, useEffect, useRef, useState } from 'react';
import Pod from './Pod';
import Backdrop from './Backdrop';
import './Demo.css';

const COLORS = ['#b455cc', '#44d4a8', '#f2b134', '#4aa8f0'];
const ROUNDS = 8;

function Demo() {
  const [state, setState] = useState('idle'); // idle | waiting | live | done
  const [activePod, setActivePod] = useState(null);
  const [round, setRound] = useState(0);
  const [times, setTimes] = useState([]);
  const [misses, setMisses] = useState(0);

  const litAt = useRef(0);
  const timer = useRef(null);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const lightNext = useCallback(() => {
    setState('waiting');
    setActivePod(null);
    const delay = 700 + Math.random() * 1600;
    timer.current = setTimeout(() => {
      setActivePod(Math.floor(Math.random() * 4));
      litAt.current = performance.now();
      setState('live');
    }, delay);
  }, []);

  const start = () => {
    clearTimer();
    setTimes([]);
    setMisses(0);
    setRound(0);
    lightNext();
  };

  const reset = () => {
    clearTimer();
    setState('idle');
    setActivePod(null);
    setTimes([]);
    setMisses(0);
    setRound(0);
  };

  // `stamp` comes from the click event, which shares a time origin with
  // performance.now(). Reading it off the event keeps the handler pure.
  const hit = (index, stamp) => {
    if (state === 'waiting') {
      // Pressed before anything lit up.
      setMisses((m) => m + 1);
      return;
    }
    if (state !== 'live') return;
    if (index !== activePod) {
      setMisses((m) => m + 1);
      return;
    }

    const elapsed = Math.max(0, Math.round(stamp - litAt.current));
    const nextTimes = [...times, elapsed];
    setTimes(nextTimes);
    setActivePod(null);

    const nextRound = round + 1;
    setRound(nextRound);

    if (nextRound >= ROUNDS) {
      setState('done');
    } else {
      lightNext();
    }
  };

  useEffect(() => clearTimer, []);

  const average = times.length
    ? Math.round(times.reduce((a, b) => a + b, 0) / times.length)
    : null;
  const best = times.length ? Math.min(...times) : null;

  const prompt = {
    idle: 'Hit start, then tap each pod the moment it lights up.',
    waiting: 'Wait for it...',
    live: 'Now!',
    done: `${ROUNDS} rounds done.`,
  }[state];

  return (
    <section className="section demo" id="demo">
      <Backdrop />
      <div className="container demo-container">
        <div className="section-head section-head-center">
          <span className="section-label">Try it</span>
          <h2 className="section-title">How fast are you, actually?</h2>
          <p className="section-text">
            This is one pod lighting up at random, on a screen. The real thing adds sound
            and vibration, and the pods are on the floor, the wall, or in your hand.
          </p>
        </div>

        <div className="demo-board">
          <div className="demo-status" aria-live="polite">
            <span className={`demo-prompt demo-prompt-${state}`}>{prompt}</span>
            <span className="demo-round">
              {state === 'idle' ? '' : `Round ${Math.min(round + 1, ROUNDS)} / ${ROUNDS}`}
            </span>
          </div>

          <div className="demo-grid">
            {COLORS.map((color, i) => (
              <button
                key={color}
                className="demo-pod"
                onClick={(event) => hit(i, event.timeStamp)}
                disabled={state === 'idle' || state === 'done'}
                aria-label={`Pod ${i + 1}`}
              >
                <Pod color={color} lit={activePod === i} size={150} />
              </button>
            ))}
          </div>

          <div className="demo-controls">
            {state === 'idle' && (
              <button className="btn btn-primary" onClick={start}>
                Start drill
              </button>
            )}
            {(state === 'waiting' || state === 'live') && (
              <button className="btn btn-ghost" onClick={reset}>
                Stop
              </button>
            )}
            {state === 'done' && (
              <button className="btn btn-primary" onClick={start}>
                Go again
              </button>
            )}
          </div>

          {(times.length > 0 || misses > 0) && (
            <div className="demo-results">
              <div className="demo-stat">
                <strong>{average ?? '—'}</strong>
                <span>avg ms</span>
              </div>
              <div className="demo-stat">
                <strong>{best ?? '—'}</strong>
                <span>best ms</span>
              </div>
              <div className="demo-stat">
                <strong>{misses}</strong>
                <span>misses</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Demo;
