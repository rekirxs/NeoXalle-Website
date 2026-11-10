import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../config';
import InstagramIcon from './InstagramIcon';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            <img src="/logo-mark.png" alt="" />
            <span>NeoXalle</span>
          </a>
          <p className="footer-tag">Multisensory reaction training.</p>
        </div>

        <nav className="footer-links">
          <a href="#how">How it works</a>
          <a href="#demo">Try it</a>
          <a href="#sports">Sports</a>
          <a href="#specs">Specs</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="footer-contact">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <InstagramIcon size={20} />
            {INSTAGRAM_HANDLE}
          </a>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-mail">
              {CONTACT_EMAIL}
            </a>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} NeoXalle</span>
        <span>Built in Hamburg</span>
      </div>
    </footer>
  );
}

export default Footer;
