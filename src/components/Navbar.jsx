import { useEffect, useState } from 'react';
import { INSTAGRAM_URL } from '../config';
import './Navbar.css';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#demo', label: 'Try it' },
  { href: '#inside', label: 'Inside' },
  { href: '#sports', label: 'Sports' },
  { href: '#specs', label: 'Specs' },
  { href: '#faq', label: 'FAQ' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <a className="announce" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
        Follow the build on Instagram — new drills every week
        <span className="announce-arrow" aria-hidden="true">&rarr;</span>
      </a>

      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-logo">
            <img src="/logo-mark.png" alt="" />
            <span>NeoXalle</span>
          </a>

          <nav className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm nav-cta"
          >
            Follow us
          </a>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={open ? 'bar bar-a open' : 'bar bar-a'} />
            <span className={open ? 'bar bar-b open' : 'bar bar-b'} />
          </button>
        </div>
      </header>

      {open && (
        <div className="nav-drawer">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary nav-drawer-cta"
            onClick={() => setOpen(false)}
          >
            Follow us
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
