import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../config';
import InstagramIcon from './InstagramIcon';
import Backdrop from './Backdrop';
import './CTA.css';

function CTA() {
  return (
    <section className="cta" id="follow">
      <Backdrop />
      <div className="container cta-inner">
        <h2 className="cta-title">NeoXalle is being built in the open.</h2>
        <p className="cta-text">
          Prototypes, failed boards, drill footage and the launch date. It all goes on
          Instagram first.
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-light cta-btn"
        >
          <InstagramIcon />
          Follow {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}

export default CTA;
