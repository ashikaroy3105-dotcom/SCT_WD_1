# Responsive Landing Page with Interactive Navigation

A responsive landing page built with plain HTML, CSS and JavaScript. It features a fixed navigation bar that changes style on scroll and on hover.

Built as **Task 01** of the Web Development Internship at SkillCraft Technology.

## Task Requirements

| Requirement | How it is done |
|---|---|
| Interactive navigation menu | Hover effects, active-section highlight, mobile hamburger menu |
| Changes color or style on scroll | Navbar turns from transparent to solid white with a shadow after scrolling |
| Changes style on hover | Menu items get a soft highlight and a sliding underline |
| Fixed position, visible on all pages | `position: fixed` with a high `z-index`, so it stays on screen while scrolling |
| Responsive | Layout adapts to phones, tablets and desktops |

## Features

- Fixed navbar that stays visible at all times
- Transparent-to-solid navbar with a smooth transition on scroll
- Hover effects on menu links
- Link of the current section stays underlined while scrolling
- Hamburger menu on screens 768px wide and below
- Menu closes when a link is clicked, when `Esc` is pressed, or when the screen is resized to desktop
- Smooth scrolling to sections
- Contact form with basic validation and a confirmation message
- Keyboard-friendly focus outlines
- Animations are turned off for users who prefer reduced motion

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling (Flexbox, Grid, CSS variables, media queries, transitions)
- **JavaScript (ES6)** for scroll effect, mobile menu, and form check
- **Google Fonts** (Bricolage Grotesque and Figtree)

## Project Structure

```
landing-page/
├── index.html    # Page content and structure
├── style.css     # All styles, including responsive rules
├── script.js     # Navbar scroll effect, mobile menu, active link, form check
└── README.md     # Project documentation
```

## How to Run

1. Download or clone this repository.
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in any modern browser. An internet connection is needed once to load the fonts; the page still works with backup fonts without it.

## How It Works

**Fixed navbar:** `.navbar` uses `position: fixed; top: 0; width: 100%;` so it never scrolls away.

**Change on scroll:** `script.js` listens to the `scroll` event. When the page is scrolled more than 40px, it adds the `scrolled` class to the navbar. The CSS for `.navbar.scrolled` sets the solid background, shadow and smaller height.

**Change on hover:** `.nav-links a:hover` adds a background highlight, and the `::after` underline grows from left to right.

**Mobile menu:** below 768px, the links are hidden and a hamburger button toggles the `open` class to show them.

## Customization

- **Colors:** edit the variables in the `:root` block at the top of `style.css`.
- **Brand name and text:** edit the content in `index.html`.
- **Scroll trigger point:** change `window.scrollY > 40` in `script.js`.
- **Mobile breakpoint:** change `768px` in `style.css` (and in `script.js`, where it appears as `769px`).
- **More pages:** copy the `<nav>` block from `index.html` into each new page and link `style.css` and `script.js`. Change the menu links to page names, for example `href="about.html"`.

## Testing Checklist

- [ ] Navbar stays fixed while scrolling
- [ ] Navbar changes from transparent to white after scrolling
- [ ] Menu links change on hover
- [ ] Current section link is underlined
- [ ] Hamburger menu opens and closes on mobile width
- [ ] Menu closes after clicking a link
- [ ] Contact form shows an error for empty fields and a success message when filled

