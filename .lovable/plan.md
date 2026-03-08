

## Improvements and New Features Plan

After comparing the current clone with the original site, here are the improvements and additions:

### 1. Smooth Scroll Navigation
- Add smooth scrolling behavior for anchor links in the Navbar
- Highlight the active nav link based on scroll position using IntersectionObserver

### 2. Scroll-triggered Animations
- Add fade-in/slide-up animations as sections enter the viewport using CSS animations + IntersectionObserver (no extra dependency needed)
- Apply to headings, cards, and images for a polished feel

### 3. "Escalating the Excellence" Stats/Counter Section
- Add a new section between About and Transform with animated counters (e.g., "500+ Students", "50+ Projects", "20+ Mentors", "10+ Partners")
- Numbers count up when scrolled into view

### 4. Courses Section
- Add a dedicated Courses page/section matching the "Courses" nav link
- Display course cards with icons, titles, descriptions, and "Enroll" buttons (e.g., Web Development, Python, Data Science, App Development)

### 5. Contact Form Section
- Replace the simple footer email input with a proper Contact section (before the footer)
- Fields: Name, Email, Phone, Message with validation using react-hook-form + zod
- Toast notification on submit

### 6. Back to Top Button
- Floating button that appears on scroll, smoothly scrolls back to top

### 7. Mobile Navigation Improvements
- Smooth slide-in animation for mobile menu
- Close menu on anchor link click (already done) + add social icons to mobile menu

### 8. WhatsApp Chat Button
- Floating WhatsApp icon (bottom-right) linking to WhatsApp with the phone number from the site

### Technical Approach
- All animations via CSS + a custom `useInView` hook (no new dependencies)
- Counter animation with `requestAnimationFrame`
- Contact form with existing react-hook-form + zod
- New components: `StatsSection.tsx`, `CoursesSection.tsx`, `ContactSection.tsx`, `BackToTop.tsx`, `WhatsAppButton.tsx`
- Update `Navbar.tsx` for smooth scroll and active state
- Update `Index.tsx` to include new sections

