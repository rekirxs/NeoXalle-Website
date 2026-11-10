import { useEffect, useState } from 'react';
import Backdrop from './Backdrop';
import Pod from './Pod';
import './Hero.css';

const podColors = ['#b455cc', '#44d4a8', '#f2b134', '#4aa8f0'];

function Hero() {
  const [active, setActive] = useState(0);

  // One of the four lights up at a time, the way a drill runs.
  useEffect(() => {
    const id = setInterval(() => {
      setActive(Math.floor(Math.random() * podColors.length));
    }, 950);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <Backdrop />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Built for table tennis</p>

          <h1 className="hero-title">
            Train every sense.
            <br />
            Not just your eyes.
          </h1>

          <p className="hero-text">
            Four wireless pods with light, sound and vibration. Designed around the
            footwork and reaction speed table tennis demands, and open enough to work
            for any sport that asks the same of you.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="btn btn-primary">
              Try the demo
            </a>
            <a href="#how" className="btn btn-ghost">
              How it works
            </a>
          </div>

          <ul className="hero-stats">
            <li>
              <strong>4</strong>
              <span>pods per set</span>
            </li>
            <li>
              <strong>3</strong>
              <span>sensory channels</span>
            </li>
            <li>
              <strong>1</strong>
              <span>charging tower</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          {/* the four lights, behind */}
          <div className="hero-lights" aria-hidden="true">
            {podColors.map((color, i) => (
              <span className={`hero-light hero-light-${i + 1}`} key={color}>
                <Pod color={color} lit={active === i} size={104} />
              </span>
            ))}
          </div>

          {/* the pod itself, in front */}
          <img
            className="hero-render"
            src="/renders/pod.png"
            alt="A NeoXalle pod: an eight-sided black housing with a white light-diffusing top."
            width="683"
            height="536"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
