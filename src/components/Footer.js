import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = {
        company: [
            { label: 'Про нас', href: '#' },
            { label: 'Команда', href: '#' },
            { label: 'Кар\'єра', href: '#' },
            { label: 'Прес-центр', href: '#' }
        ],
        services: [
            { label: 'Тури', href: '#sales' },
            { label: 'Харчування', href: '#food' },
            { label: 'Природа', href: '#nature' },
            { label: 'Культура', href: '#' }
        ],
        support: [
            { label: 'Допомога', href: '#' },
            { label: 'Контакти', href: '#' },
            { label: 'FAQ', href: '#' },
            { label: 'Підтримка', href: '#' }
        ],
        legal: [
            { label: 'Умови використання', href: '#' },
            { label: 'Політика конфіденційності', href: '#' },
            { label: 'Cookies', href: '#' },
            { label: 'Правова інформація', href: '#' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'YouTube', icon: '📺', href: '#' },
        { name: 'TikTok', icon: '🎵', href: '#' }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        {/* Company Info */}
                        <div className={styles.companySection}>
                            <div className={styles.logoSection}>
                                <span className={styles.logoIcon}>🌺</span>
                                <span className={styles.logoText}>Hawaii</span>
                            </div>
                            <p className={styles.companyDescription}>
                                Відкрийте магію Гаваїв з нами. Ми пропонуємо незабутні подорожі, 
                                автентичну кухню та дивовижну природу островів.
                            </p>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.href} 
                                        className={styles.socialLink}
                                        aria-label={social.name}
                                    >
                                        <span className={styles.socialIcon}>{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className={styles.linksSection}>
                            <div className={styles.linkColumn}>
                                <h4 className={styles.linkTitle}>Компанія</h4>
                                <ul className={styles.linkList}>
                                    {footerLinks.company.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className={styles.linkItem}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.linkColumn}>
                                <h4 className={styles.linkTitle}>Послуги</h4>
                                <ul className={styles.linkList}>
                                    {footerLinks.services.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className={styles.linkItem}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.linkColumn}>
                                <h4 className={styles.linkTitle}>Підтримка</h4>
                                <ul className={styles.linkList}>
                                    {footerLinks.support.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className={styles.linkItem}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.linkColumn}>
                                <h4 className={styles.linkTitle}>Правова інформація</h4>
                                <ul className={styles.linkList}>
                                    {footerLinks.legal.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className={styles.linkItem}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterText}>
                            <h3 className={styles.newsletterTitle}>Підпишіться на новини</h3>
                            <p className={styles.newsletterDescription}>
                                Отримуйте найкращі пропозиції та новини про Гаваї
                            </p>
                        </div>
                        <form className={styles.newsletterForm}>
                            <div className={styles.newsletterInputGroup}>
                                <input 
                                    type="email" 
                                    placeholder="Ваша електронна пошта" 
                                    className={styles.newsletterInput}
                                    required
                                />
                                <button type="submit" className={styles.newsletterBtn}>
                                    <span>Підписатися</span>
                                    <span className={styles.newsletterIcon}>✈️</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <div className={styles.footerBottomContent}>
                        <div className={styles.copyright}>
                            <p className={styles.copyrightText}>
                                © {currentYear} Hawaii Travel. Всі права захищені.
                            </p>
                            <p className={styles.madeWith}>
                                Зроблено з ❤️ для любителів подорожей
                            </p>
                        </div>
                        
                        <div className={styles.footerStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>50K+</span>
                                <span className={styles.statLabel}>Задоволених клієнтів</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>100+</span>
                                <span className={styles.statLabel}>Направлень</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>4.9</span>
                                <span className={styles.statLabel}>Рейтинг</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;