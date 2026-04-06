## Plan: Update Logos, Domain, Favicon, Images & Testimonials

### 1. Fix MSME and TASK logo scaling in ClientsSection

- Increase container size for MSME and TASK logos specifically (e.g., `h-16 w-40`) since they are more detailed government logos
- Add per-logo custom sizing via a `className` property in the logos array

### 2. Update domain from impexuss.com to impexus.co.in

- **Footer.tsx** line 42: `info@impexuss.com` → `info@impexus.co.in`
- **ContactSection.tsx** line 59: `info@impexuss.com` → `info@impexus.co.in`

### 3. Update favicon and page metadata in index.html

- Use the Impexus branding — set favicon to a simple "i" logo or use the MSME-style approach with a generated favicon
- Update `<title>` from "Lovable App" to "Impexus Technologies"
- Update all og:title, twitter:title, description meta tags to reflect Impexus
- Add `<link rel="icon">` pointing to a favicon

### 4. Update images to suit an Indian edtech company

- **HeroSection**: Replace with an image of Indian college students in a classroom/campus setting
- **AboutSection**: Replace with images showing Indian students collaborating, coding workshops
- **TestimonialsSection background**: Replace with a relevant Indian campus/tech image
- **ProjectsSection**: change to tech savy images not generic 

### 5. Rewrite testimonials with South Indian tone and names

Replace current testimonials with 3-4 testimonials using South Indian names and natural South Indian English tone:

- Names like Karthik Reddy, Priya Lakshmi, Venkat Subramaniam, Divya Nair
- Tone: warm, slightly formal, referencing college life, placement drives, Telugu/Tamil/Kannada cultural context
- Use realistic Indian student avatar images from Unsplash (Indian faces)
- Add college/city references (e.g., "B.Tech from JNTU Hyderabad", "Engineering student from VIT")

### Files to modify

1. `src/components/ClientsSection.tsx` — logo scaling
2. `src/components/Footer.tsx` — domain update
3. `src/components/ContactSection.tsx` — domain update
4. `index.html` — favicon, title, meta tags
5. `src/components/TestimonialsSection.tsx` — South Indian testimonials + images
6. `src/components/HeroSection.tsx` — Indian campus image
7. `src/components/AboutSection.tsx` — Indian student images