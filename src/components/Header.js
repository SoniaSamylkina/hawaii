import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header({ onNavigate, onSearch }) {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { label: "Головна", href: "#", icon: "🏠" },
    { label: "Продажі", href: "#sales", icon: "🎯" },
    { label: "Культура", href: "#", icon: "🎭" },
    { label: "Їжа", href: "#food", icon: "🍽️" },
    { label: "Природа", href: "#nature", icon: "🌺" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.trim();
    if (!query) return;
    onSearch && onSearch(query);
    setSearch("");
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Логотип */}
        <div className={styles.logoSection}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🌺</span>
            <span className={styles.logoText}>Hawaii</span>
          </a>
        </div>

        {/* Навігаційні посилання */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a 
                href={l.href} 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate && onNavigate(l.href);
                }}
              >
                <span className={styles.navIcon}>{l.icon}</span>
                <span className={styles.navText}>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Пошук та дії */}
        <div className={styles.actions}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Пошук місць..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchBtn}>
                <span className={styles.searchIcon}>🔍</span>
              </button>
            </div>
          </form>

          <div className={styles.userActions}>
            <button onClick={toggleTheme} className={styles.themeBtn}>
              <span className={styles.themeIcon}>
                {theme === "dark" ? "🌙" : "☀️"}
              </span>
            </button>
            
            <div className={styles.avatar}>
              <span className={styles.avatarText}>SG</span>
              <div className={styles.avatarStatus}></div>
            </div>
          </div>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Мобільне меню */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileSearch}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Пошук місць..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.mobileSearchInput}
              />
              <button type="submit" className={styles.mobileSearchBtn}>🔍</button>
            </form>
          </div>
          
          <ul className={styles.mobileLinks}>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a 
                  href={l.href} 
                  className={styles.mobileLink}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate(l.href);
                    setMenuOpen(false);
                  }}
                >
                  <span className={styles.mobileLinkIcon}>{l.icon}</span>
                  <span className={styles.mobileLinkText}>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <button onClick={toggleTheme} className={styles.mobileThemeBtn}>
              <span>{theme === "dark" ? "🌙" : "☀️"}</span>
              <span>{theme === "dark" ? "Темна тема" : "Світла тема"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
