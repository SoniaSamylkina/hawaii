import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { label: "Головна", href: "#" },
    { label: "Подорож", href: "#" },
    { label: "Культура", href: "#" },
    { label: "Їжа", href: "#" },
    { label: "Природа", href: "#" }
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    // Тут можна додати логіку пошуку
    alert(`Пошук: ${search}`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Логотип */}
        <a href="/" className={styles.logo}>Hawaii</a>

        {/* Рядок пошуку */}
        <form onSubmit={handleSearch} style={{ marginRight: 16 }}>
          <input
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: "6px 10px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 16,
              outline: "none"
            }}
          />
        </form>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeBtn}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <div className={styles.avatar}>SG</div>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Мобільне меню */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
