import './Hero.css';

function Hero() {
  return (
    <section className="hero">
        <div className="container hero-inner">
            <p className="hero-eyebrow">Multisensory reaction training</p>

            <h1 className="hero-title">
            Excel with NeoXalle
            </h1>

            <p className="hero-text">
            Four pods with light, sound and vibration. NeoXalle turns any space
             into a training ground that reacts the way real competition does.
            </p>

            <div className="hero-actions">
                <a href="#demo" className="btn btn-primary">Watch the demo</a>
                <a href="#contact" className="btn btn-ghost">Contact us</a>

            </div>
        </div>
     </section>
  );
}

export default Hero;