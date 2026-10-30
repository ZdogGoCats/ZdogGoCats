
:root {
    --background: #080b12;
    --surface: #101725;
    --blue: #168cff;
    --text: #f4f7fb;
    --muted: #9ba8ba;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--background);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
}

a {
    color: inherit;
    text-decoration: none;
}

.navbar {
    min-height: 78px;
    padding: 0 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0b101a;
    border-bottom: 1px solid #1b293c;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 800;
    font-size: 22px;
    letter-spacing: 2px;
}

.logo img {
    width: 38px;
    height: 38px;
    object-fit: contain;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-links a {
    color: var(--muted);
    font-size: 14px;
    transition: color 0.2s;
}

.nav-links a:hover {
    color: var(--blue);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 25px;
    cursor: pointer;
}

.hero {
    min-height: 570px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 20px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(ellipse at center, #102746 0%, #080b12 70%);
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
}

.eyebrow {
    color: var(--blue);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 4px;
    margin-bottom: 18px;
}

.hero h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(38px, 7vw, 76px);
    line-height: 1.2;
    margin-bottom: 22px;
}

.hero h1 span {
    color: var(--blue);
}

.hero-description {
    color: var(--muted);
    max-width: 580px;
    margin: 0 auto 32px;
}

.primary-button {
    display: inline-block;
    background: var(--blue);
    color: white;
    padding: 13px 27px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
    transition: 0.2s;
}

.primary-button:hover {
    background: #006bd6;
    transform: translateY(-3px);
}

.section {
    padding: 100px 8%;
}

.section-heading {
    text-align: center;
    margin-bottom: 50px;
}

.section-heading h2,
.about-content h2 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(27px, 4vw, 42px);
    margin-bottom: 12px;
}

.section-heading > p:last-child {
    color: var(--muted);
}

.division-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.division-card {
    background: var(--surface);
    border: 1px solid #1b2c43;
    border-radius: 9px;
    padding: 32px;
    transition: 0.25s;
}

.division-card:hover {
    border-color: var(--blue);
    transform: translateY(-6px);
}

.card-number {
    color: var(--blue);
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
    margin-bottom: 25px;
}

.division-card h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 23px;
    margin-bottom: 5px;
}

.division-type {
    color: var(--blue);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 17px;
}

.division-card > p:last-child {
    color: var(--muted);
    font-size: 14px;
}

.about-section {
    background: #0d1420;
    padding: 100px 8%;
    text-align: center;
}

.about-content {
    max-width: 750px;
    margin: auto;
}

.about-content > p:last-child {
    color: var(--muted);
}

.socials-section {
    text-align: center;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.social-links a {
    border: 1px solid #263c59;
    padding: 13px 28px;
    border-radius: 5px;
    transition: 0.2s;
}

.social-links a:hover {
    border-color: var(--blue);
    color: var(--blue);
}

footer {
    padding: 25px 8%;
    border-top: 1px solid #1b293c;
    display: flex;
    justify-content: space-between;
    color: var(--muted);
    font-size: 12px;
}

@media (max-width: 800px) {
    .division-grid {
        grid-template-columns: 1fr;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 78px;
        left: 0;
        width: 100%;
        background: #0b101a;
        padding: 25px;
        flex-direction: column;
        text-align: center;
        z-index: 10;
    }

    .nav-links.active {
        display: flex;
    }

    footer {
        flex-direction: column;
        text-align: center;
        gap: 8px;
    }
}

