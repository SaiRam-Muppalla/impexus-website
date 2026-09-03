# Rebuild Testimonials and Contact Sections

## Goal
Replace only the current “What Our Students Say” and contact sections with the structure, wording, and interaction patterns from the supplied Impexus Launchpad version, restyled exclusively with the current site's semantic color palette and typography system.

## Testimonials
- Use the reference eyebrow, heading, supporting copy, testimonial names, roles, and quotes.
- Recreate the featured testimonial carousel with rating, student initials, navigation dots, automatic progression, and swipe/button-accessible navigation.
- Add the two horizontally scrolling testimonial-card rows shown in the reference, with pause-on-hover/focus and reduced-motion support.
- Retain verified current business facts: show **5,000+ students trained** and **10+ college collaborations**; do not restore the previously removed placement-rate claim.
- Use the current site's `background`, `foreground`, `primary`, `muted`, `card`, and `border` tokens instead of copying the reference colors.

## Connect With Us
- Replace the current section presentation with the reference eyebrow, “Connect With Us” heading, supporting copy, bordered enquiry form, contact-info tiles, and location panel.
- Match the reference form fields: full name, email, phone, program interest, and message; keep accessible labels, validation, loading, honeypot protection, submission behavior, and email fallback.
- Use the current verified domain and email (`impexus.co.in`, `info@impexus.co.in`) while bringing across the reference program options, operating hours, phone, and campus-address presentation.
- Provide an external directions link and a lightweight map-style location panel without introducing a blocking map dependency.

## Integration and Verification
- Keep section IDs, page order, navigation behavior, WhatsApp control, and all unrelated homepage sections unchanged.
- Add only semantic design tokens needed by these two sections; no hardcoded component colors.
- Fix the two outstanding one-line quality issues already identified: remove the obsolete Hero eslint suppression and prevent root-level horizontal overflow.
- Verify build, TypeScript, ESLint, focused tests, and responsive rendered behavior on desktop and mobile, including carousel controls, form validation, and no horizontal overflow.
