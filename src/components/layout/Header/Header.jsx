import { useEffect, useState } from "react";

export default function Header({ navigation, logo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img src={logo} alt="HopeBloom" />
        </a>

        <nav className="header__nav">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__link body-md"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button
          className={`header__toggle ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`header__mobile-nav ${
          menuOpen ? "is-open" : ""
        }`}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="header__mobile-link body-md-semibold"
            onClick={() => setMenuOpen(false)}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}