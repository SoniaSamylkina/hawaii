import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header({
  logo = { text: "YourBrand", href: "/" },
  navLinks = [
    { label: "Головна", href: "#" },
    { label: "Продукти", href: "#" },
    { label: "Про нас", href: "#" },
    { label: "Контакти", href: "#" },
  ],
  onSearch, // (q) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
  }

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.navbar} aria-label="Головна навігація">
        <a className={styles.logo} href={logo.href} aria-label="На головну">
          {/* невеликий SVG-логотип */}
          <svg className={styles.logoMark} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 3.2L6 8v8l6 3.2L18 16V8l-6-2.8z" />
          </svg>
          <span className={styles.logoText}>{logo.text}</span>
        </a>

        <button
          className={styles.iconButton}
          aria-label="Відкрити меню"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={styles.burger} />
        </button>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a className={styles.link} href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <form className={styles.search} role="search" onSubmit={handleSearch}>
            <label className={styles.srOnly} htmlFor="site-search">Пошук по сайту</label>
            <input
              id="site-search"
              type="search"
              placeholder="Пошук…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchBtn} aria-label="Шукати">⌕</button>
          </form>

          <button
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Увімкнути світлу тему" : "Увімкнути темну тему"}
            title="Тема"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <div className={styles.avatar} role="img" aria-label="Профіль" title="Профіль">SG</div>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ""}`}
        ref={menuRef}
      >
        <ul className={styles.mobileLinks} role="menu" aria-label="Мобільне меню">
          {navLinks.map((l) => (
            <li role="none" key={l.label}>
              <a role="menuitem" className={styles.mobileLink} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}