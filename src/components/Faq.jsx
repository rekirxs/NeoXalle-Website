import { useState } from 'react';
import { INSTAGRAM_URL } from '../config';
import './Faq.css';

const faqs = [
  {
    q: 'Is NeoXalle on sale yet?',
    a: 'Not yet. It is a working prototype and the first production run is still being planned. Instagram is where the build updates and the launch date go first.',
  },
  {
    q: 'How is this different from a BlazePod?',
    a: 'Two things. NeoXalle fires sound and vibration alongside light, so you can train without looking at the pods. And it was designed around table tennis specifically, so the default drills match real footwork patterns instead of being generic tap tests.',
  },
  {
    q: 'Is it only for table tennis?',
    a: 'No. Table tennis is what it was built around and what the preset drills are tuned for. The pods and the app do not care which sport you play, so anything that trains reaction, footwork or decision speed works.',
  },
  {
    q: 'Do I need the app to use it?',
    a: 'Yes. The app is where drills are built, started and recorded. It talks to the pods over Bluetooth.',
  },
  {
    q: 'Can I use it alone?',
    a: 'That is the main case. Set a drill, start it, train. A partner or coach can run it from their own phone instead if you want someone calling the sequence.',
  },
  {
    q: 'How many pods do I get?',
    a: 'Four pods and one charging tower per set. The tower holds and charges all four.',
  },
  {
    q: 'Where is it made?',
    a: 'Design and assembly are in progress. The electronics are built around an ESP32 and a custom PCB.',
  },
];

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-inner">
        <div className="section-head">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Questions.</h2>
          <p className="section-text">
            Anything missing?{' '}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="faq-link">
              Ask on Instagram
            </a>
            .
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={open === i ? 'faq-item open' : 'faq-item'} key={faq.q}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-sign" aria-hidden="true" />
              </button>
              {open === i && <p className="faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
