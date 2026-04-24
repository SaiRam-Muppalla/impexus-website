// Centralized topic content powering /topic/:slug subpages.
// Keep slugs stable — they are part of the URL and SEO surface.

export type TopicSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Topic = {
  slug: string;
  category: "Service" | "Program" | "Initiative" | "Resource";
  categorySlug: string; // for breadcrumb label
  title: string;
  tagline: string;
  metaDescription: string;
  keywords: string[];
  heroBadge: string;
  overview: string;
  sections: TopicSection[];
  outcomes: string[];
  duration?: string;
  audience?: string;
  related: string[]; // slugs
};

export const topics: Topic[] = [
  // ===== SERVICES (from ServicesSection) =====
  {
    slug: "programming-cs-foundations",
    category: "Service",
    categorySlug: "services",
    title: "Programming & CS Foundations",
    tagline: "Build a rock-solid base in computer science and modern programming languages.",
    metaDescription:
      "Master C, C++, Java, Python, JavaScript and Go with strong foundations in DSA, OOP and problem solving. Industry-ready CS fundamentals training for engineering students.",
    keywords: ["programming training", "DSA course", "Java Python C++", "OOP", "problem solving", "engineering students India"],
    heroBadge: "Foundations Track",
    overview:
      "A structured, language-agnostic foundation that turns first and second-year students into confident programmers. We cover syntax, semantics, memory models, and computational thinking — the prerequisites every modern engineer needs before specializing.",
    sections: [
      {
        heading: "Languages We Teach",
        body: "Multi-language exposure with deep dives into the most industry-relevant stacks. Students learn the why behind each language choice, not just the how.",
        bullets: [
          "C & C++ — memory, pointers, and systems thinking",
          "Java — OOP, JVM internals, enterprise patterns",
          "Python — readability, scripting, automation, data work",
          "JavaScript — the universal web language",
          "Go — modern concurrency for backend services",
        ],
      },
      {
        heading: "Data Structures & Algorithms",
        body: "DSA is the backbone of every coding interview and high-performance system. Our curriculum follows a carefully sequenced path from arrays to advanced graph algorithms with daily practice on curated problem sets.",
        bullets: [
          "Arrays, strings, linked lists, stacks, queues",
          "Trees, heaps, hash tables, tries",
          "Graphs, BFS/DFS, shortest paths, MSTs",
          "Greedy, divide & conquer, dynamic programming",
          "Time/space complexity analysis",
        ],
      },
      {
        heading: "Object-Oriented Programming",
        body: "OOP is more than classes and inheritance — it is a way of modeling real systems. We teach SOLID principles, design patterns, and how to write code that scales with team size.",
      },
      {
        heading: "Problem Solving Methodology",
        body: "A repeatable framework: understand → decompose → pattern-match → implement → test → optimize. Students leave able to attack unfamiliar problems with confidence.",
      },
    ],
    outcomes: [
      "Solve 200+ DSA problems across difficulty tiers",
      "Read and reason about production code in 3+ languages",
      "Crack the coding rounds of campus placement drives",
      "Build a strong foundation for full-stack, AI/ML, or systems specialization",
    ],
    duration: "8–12 weeks (60–90 hours)",
    audience: "First & second-year B.Tech / B.E. / BCA / MCA students",
    related: ["full-stack-web-development", "placement-preparation", "project-based-learning"],
  },
  {
    slug: "full-stack-web-development",
    category: "Service",
    categorySlug: "services",
    title: "Full Stack Web Development",
    tagline: "From pixels to production — build complete web applications end to end.",
    metaDescription:
      "Hands-on Full Stack training in React, Next.js, Node.js, Spring Boot, MongoDB and PostgreSQL. Build deployable web apps with REST and GraphQL APIs.",
    keywords: ["full stack training", "React course", "Node.js training", "MERN stack", "MEAN stack", "web development India"],
    heroBadge: "Industry Track",
    overview:
      "A project-driven full stack program that mirrors real product engineering teams. Students ship working applications — frontend, backend, database, deployment — and learn the workflows used in modern tech companies.",
    sections: [
      {
        heading: "Frontend Engineering",
        body: "Modern UI development with component-driven architecture, state management, and responsive design.",
        bullets: [
          "React.js & Next.js — hooks, SSR, routing",
          "Angular — reactive forms, RxJS, services",
          "Tailwind CSS — utility-first styling at scale",
          "Accessibility, performance, and Core Web Vitals",
        ],
      },
      {
        heading: "Backend Engineering",
        body: "Server-side mastery across the most in-demand backend stacks.",
        bullets: [
          "Node.js & Express.js for fast JavaScript APIs",
          "Spring Boot for enterprise-grade Java services",
          "Django for rapid Python development",
          "Authentication, authorization, and middleware patterns",
        ],
      },
      {
        heading: "Databases & Data Modeling",
        body: "Choosing the right database is half the battle. We cover both relational and NoSQL with schema design, indexing, and query optimization.",
        bullets: [
          "MySQL & PostgreSQL — relational design and SQL mastery",
          "MongoDB — document modeling and aggregation",
          "Redis — caching and pub/sub patterns",
        ],
      },
      {
        heading: "APIs & Integration",
        body: "REST, GraphQL, webhooks, and third-party integration. Students learn to design contracts that frontend and backend teams can build against in parallel.",
      },
    ],
    outcomes: [
      "Deploy 3+ full stack projects to production",
      "Design and document REST and GraphQL APIs",
      "Work confidently across the request/response lifecycle",
      "Ready for SDE-1, frontend, or backend roles",
    ],
    duration: "12–16 weeks (90–120 hours)",
    audience: "B.Tech CSE/IT, MCA, and final-year engineering students",
    related: ["programming-cs-foundations", "cloud-computing-devops", "project-based-learning"],
  },
  {
    slug: "cloud-computing-devops",
    category: "Service",
    categorySlug: "services",
    title: "Cloud Computing & DevOps",
    tagline: "Ship faster, scale safer — master the infrastructure of modern software.",
    metaDescription:
      "Cloud and DevOps training on AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines. Build deployment skills that top employers demand.",
    keywords: ["AWS training", "Kubernetes course", "DevOps India", "cloud certification", "Docker training"],
    heroBadge: "Infrastructure Track",
    overview:
      "Cloud and DevOps are no longer niche skills — they are baseline expectations for backend, full stack, and platform roles. This program turns theoretical cloud knowledge into hands-on deployment muscle.",
    sections: [
      {
        heading: "Cloud Platforms",
        body: "Comparative training across the big three cloud providers, with deep specialization on AWS.",
        bullets: [
          "AWS — EC2, S3, Lambda, RDS, IAM, VPC",
          "Microsoft Azure — App Service, Functions, AKS",
          "Google Cloud Platform — Compute, Cloud Run, GKE",
        ],
      },
      {
        heading: "Containerization & Orchestration",
        body: "Containers solved 'works on my machine' — orchestrators solved scaling them. Students build, ship, and run production workloads.",
        bullets: [
          "Docker — images, volumes, networking, multi-stage builds",
          "Kubernetes — pods, deployments, services, ingress",
          "Helm charts and Kustomize",
        ],
      },
      {
        heading: "Infrastructure as Code",
        body: "Terraform brings reproducibility and version control to infrastructure. Students provision real cloud resources from declarative config.",
      },
      {
        heading: "CI/CD & Automation",
        body: "From commit to production in minutes — Git, GitHub Actions, Jenkins pipelines, automated testing, and progressive delivery.",
      },
      {
        heading: "Linux & Observability",
        body: "Comfortable in a terminal, confident with logs and metrics. Linux administration plus monitoring with Prometheus and Grafana.",
      },
    ],
    outcomes: [
      "Deploy a production-grade app to AWS/Azure/GCP",
      "Author Terraform modules and Kubernetes manifests",
      "Build a complete CI/CD pipeline from scratch",
      "Prepare for AWS Cloud Practitioner / Solutions Architect Associate",
    ],
    duration: "10–14 weeks (75–100 hours)",
    audience: "Pre-final and final-year students; working developers",
    related: ["full-stack-web-development", "software-development-tools", "emerging-technologies"],
  },
  {
    slug: "ai-ml-data-science",
    category: "Service",
    categorySlug: "services",
    title: "AI, ML & Data Science",
    tagline: "From data to decisions — build the intelligence layer of modern products.",
    metaDescription:
      "Comprehensive AI, Machine Learning and Data Science training with Python, TensorFlow, PyTorch, NLP and Computer Vision. Build deployable ML projects.",
    keywords: ["AI training India", "machine learning course", "data science bootcamp", "deep learning", "TensorFlow PyTorch"],
    heroBadge: "AI Track",
    overview:
      "AI is rewriting every industry. This program builds the mathematical intuition, coding skill, and project portfolio students need to enter the field with credibility — not just buzzwords.",
    sections: [
      {
        heading: "Machine Learning Foundations",
        body: "From linear regression to ensemble methods. Students implement algorithms from scratch before reaching for libraries.",
        bullets: [
          "Supervised learning: regression and classification",
          "Unsupervised learning: clustering and dimensionality reduction",
          "Model evaluation, cross-validation, and hyperparameter tuning",
          "Bias, variance, and the interpretability problem",
        ],
      },
      {
        heading: "Deep Learning",
        body: "Neural networks, CNNs, RNNs, transformers — the architectures behind today's breakthroughs. Built and trained in TensorFlow and PyTorch.",
      },
      {
        heading: "Natural Language Processing",
        body: "From tokenization to transformers and large language models. Students build sentiment analyzers, chatbots, and text classification systems.",
      },
      {
        heading: "Computer Vision",
        body: "Image classification, object detection, and segmentation using OpenCV and modern CNN architectures.",
      },
      {
        heading: "Data Science Workflow",
        body: "The unglamorous but essential skills: data cleaning, EDA, feature engineering, and storytelling with visualization.",
        bullets: ["Pandas, NumPy, Scikit-learn", "Matplotlib, Seaborn, Plotly", "Jupyter notebooks and reproducible research"],
      },
    ],
    outcomes: [
      "Ship 3+ end-to-end ML projects to a public portfolio",
      "Train and deploy models on real datasets",
      "Communicate technical findings to non-technical stakeholders",
      "Ready for Data Analyst, ML Engineer, or AI Intern roles",
    ],
    duration: "14–16 weeks (100–120 hours)",
    audience: "B.Tech, M.Tech, MCA students with basic Python",
    related: ["emerging-technologies", "programming-cs-foundations", "project-based-learning"],
  },
  {
    slug: "cybersecurity-ethical-hacking",
    category: "Service",
    categorySlug: "services",
    title: "Cybersecurity & Ethical Hacking",
    tagline: "Think like an attacker — defend like a professional.",
    metaDescription:
      "Hands-on cybersecurity and ethical hacking training covering network security, web vulnerabilities, Kali Linux and penetration testing tools.",
    keywords: ["ethical hacking course", "cybersecurity training", "Kali Linux", "penetration testing", "OWASP top 10"],
    heroBadge: "Security Track",
    overview:
      "Cybersecurity is one of the fastest-growing roles in tech. Our program blends offensive and defensive perspectives so students understand attacks deeply enough to prevent them.",
    sections: [
      {
        heading: "Cybersecurity Fundamentals",
        body: "The CIA triad, threat modeling, risk management, and the security mindset. Foundations every developer should know.",
      },
      {
        heading: "Network Security",
        body: "TCP/IP at depth, firewalls, IDS/IPS, VPNs, and the protocols attackers exploit. Students capture and analyze traffic with Wireshark.",
      },
      {
        heading: "Web Application Security",
        body: "OWASP Top 10 in practice — SQL injection, XSS, CSRF, broken authentication, and how to fix each one in real code.",
      },
      {
        heading: "Ethical Hacking Tooling",
        body: "Hands-on labs in a Kali Linux environment with the tools real penetration testers use.",
        bullets: ["Nmap, Metasploit, Burp Suite", "Wireshark for traffic analysis", "Hashcat and John the Ripper", "Custom scripting in Python"],
      },
      {
        heading: "Vulnerability Assessment",
        body: "Structured methodology for assessing systems, writing professional reports, and recommending remediations.",
      },
    ],
    outcomes: [
      "Conduct a basic penetration test on a controlled target",
      "Identify and remediate OWASP Top 10 vulnerabilities",
      "Comfortable with Kali Linux and core security tools",
      "Foundation for CEH, CompTIA Security+, and OSCP",
    ],
    duration: "10–12 weeks (75–90 hours)",
    audience: "B.Tech CSE/IT, MCA, and security-curious developers",
    related: ["cloud-computing-devops", "software-development-tools"],
  },
  {
    slug: "mobile-app-development",
    category: "Service",
    categorySlug: "services",
    title: "Mobile App Development",
    tagline: "Build apps that ship to the Play Store and App Store.",
    metaDescription:
      "Mobile app development training in Android (Kotlin), Flutter and React Native. Build cross-platform apps and publish to app stores.",
    keywords: ["Android development", "Flutter training", "React Native course", "mobile app development India"],
    heroBadge: "Mobile Track",
    overview:
      "Mobile is still where users live. We teach native and cross-platform paths so students can choose the right tool for the product, not just the trend.",
    sections: [
      {
        heading: "Native Android",
        body: "Kotlin-first Android development with Jetpack Compose, modern architecture components, and Material Design 3.",
      },
      {
        heading: "Flutter",
        body: "Dart, widget composition, state management with Riverpod/Bloc, and platform channels. One codebase, two stores.",
      },
      {
        heading: "React Native",
        body: "Leverage existing React skills to ship to mobile. Navigation, native modules, and performance tuning.",
      },
      {
        heading: "App Store Lifecycle",
        body: "Beyond coding — signing, beta testing, store listings, reviews, and post-launch analytics.",
      },
    ],
    outcomes: [
      "Publish at least one app to Play Store",
      "Comfortable building UI in Compose, Flutter, or RN",
      "Understand the full mobile release lifecycle",
    ],
    duration: "10–12 weeks (75–90 hours)",
    audience: "Students with basic programming experience",
    related: ["full-stack-web-development", "project-based-learning"],
  },
  {
    slug: "emerging-technologies",
    category: "Service",
    categorySlug: "services",
    title: "Emerging Technologies",
    tagline: "Stay ahead of the curve — Generative AI, Web3, IoT, and beyond.",
    metaDescription:
      "Training on Generative AI, Prompt Engineering, Blockchain, Web3 and IoT. Future-proof student skill sets for the next wave of tech.",
    keywords: ["generative AI training", "prompt engineering", "blockchain course", "Web3 India", "IoT edge computing"],
    heroBadge: "Future Tech",
    overview:
      "The skills that didn't exist five years ago are the ones companies are hiring for today. We give students structured exposure to the technologies shaping the next decade.",
    sections: [
      {
        heading: "Generative AI & Prompt Engineering",
        body: "Working with LLMs as a tool: prompt design, chaining, RAG (Retrieval Augmented Generation), agents, and evaluating output quality.",
      },
      {
        heading: "AI Tools for Developers",
        body: "Copilot, Cursor, ChatGPT, Claude — how senior engineers actually use AI day to day to ship faster without losing rigor.",
      },
      {
        heading: "Blockchain & Web3 Basics",
        body: "Conceptual fundamentals plus hands-on Solidity, smart contracts on Ethereum, and the economics of decentralized systems.",
      },
      {
        heading: "IoT & Edge Computing",
        body: "Sensors, microcontrollers (Arduino, ESP32), MQTT, and pushing intelligence to the edge.",
      },
    ],
    outcomes: [
      "Build a working RAG application with an LLM",
      "Deploy a basic smart contract to a testnet",
      "Prototype an IoT system with sensor data flowing to the cloud",
    ],
    duration: "6–10 weeks (45–75 hours)",
    audience: "Pre-final and final-year students from any branch",
    related: ["ai-ml-data-science", "cloud-computing-devops"],
  },
  {
    slug: "software-development-tools",
    category: "Service",
    categorySlug: "services",
    title: "Software Development Tools",
    tagline: "Master the tools every professional engineer uses every day.",
    metaDescription:
      "Hands-on training in Git, GitHub, VS Code, Postman, Docker and CI/CD tools. Industry-standard developer workflows for engineering students.",
    keywords: ["Git training", "GitHub", "developer tools", "Agile workflow", "CI/CD"],
    heroBadge: "Workflow Track",
    overview:
      "Knowing the language is not enough — fluency with tools separates juniors from seniors. We teach the daily workflow of professional engineers.",
    sections: [
      {
        heading: "Version Control with Git",
        body: "Branching strategies, rebasing, conflict resolution, pull requests, and code review etiquette. Real Git workflows used in industry.",
      },
      {
        heading: "Editor & Productivity",
        body: "VS Code mastery — extensions, debugging, multi-cursor, and pair programming with Live Share.",
      },
      {
        heading: "API Tooling",
        body: "Postman collections, environment variables, automated testing, and contract documentation.",
      },
      {
        heading: "Agile in Practice",
        body: "Stand-ups, sprints, retros, story estimation, and tools like Jira and Linear. The soft mechanics of software teams.",
      },
    ],
    outcomes: [
      "Confident contributing to a team Git repository",
      "Familiar with industry Agile ceremonies",
      "Set up a complete dev environment from scratch",
    ],
    duration: "4–6 weeks (30–45 hours)",
    audience: "All engineering students; especially valuable before internships",
    related: ["cloud-computing-devops", "full-stack-web-development"],
  },
  {
    slug: "placement-preparation",
    category: "Service",
    categorySlug: "services",
    title: "Placement Preparation",
    tagline: "Crack the interview, land the offer — structured prep for campus placements.",
    metaDescription:
      "Comprehensive placement preparation covering aptitude, DSA, system design, mock interviews and resume building for Indian engineering campus drives.",
    keywords: ["placement preparation", "campus placement", "coding interview prep", "system design", "mock interview"],
    heroBadge: "Career Track",
    overview:
      "Placement season is high-stakes. Our program leaves nothing to chance — every component of a typical hiring funnel is rehearsed under realistic conditions.",
    sections: [
      {
        heading: "Aptitude & Logical Reasoning",
        body: "Quantitative aptitude, logical reasoning, and verbal ability — the gatekeeper rounds at most companies. Daily timed practice and targeted weakness analysis.",
      },
      {
        heading: "Competitive Coding & DSA",
        body: "Curated problem sets matched to past papers from TCS, Infosys, Wipro, Accenture, Cognizant, Amazon, and product companies.",
      },
      {
        heading: "System Design",
        body: "High-level design fundamentals appropriate for SDE-1 interviews — load balancers, caching, databases, and tradeoffs.",
      },
      {
        heading: "Mock Interviews",
        body: "Recorded technical and HR mock interviews with personalized feedback. Students see themselves through an interviewer's eyes.",
      },
      {
        heading: "Resume & Profile Building",
        body: "ATS-friendly resumes, LinkedIn optimization, and GitHub profile audits. Every project framed for impact.",
      },
    ],
    outcomes: [
      "Resume reviewed and refined to industry standard",
      "5+ recorded mock interviews with feedback",
      "Crystal-clear strategy for placement season",
    ],
    duration: "8–12 weeks alongside academics",
    audience: "Pre-final and final-year students entering placement season",
    related: ["soft-skills-professional-dev", "programming-cs-foundations", "full-stack-web-development"],
  },
  {
    slug: "soft-skills-professional-dev",
    category: "Service",
    categorySlug: "services",
    title: "Soft Skills & Professional Development",
    tagline: "Technical skills get the interview — soft skills get the offer.",
    metaDescription:
      "Communication, leadership, teamwork and professional etiquette training for engineering students preparing for the corporate world.",
    keywords: ["soft skills training", "communication skills", "leadership", "professional etiquette", "interview readiness"],
    heroBadge: "Career Track",
    overview:
      "Recruiters consistently rank communication as a top hiring factor — yet it is the most under-trained skill on most campuses. We close that gap.",
    sections: [
      {
        heading: "Communication & Public Speaking",
        body: "Structured frameworks for clear technical communication, presentations, and impromptu speaking. Practice in safe, recorded environments.",
      },
      {
        heading: "Professional Etiquette",
        body: "Email writing, meeting conduct, dress codes, and the unwritten rules of corporate life.",
      },
      {
        heading: "Leadership & Team Collaboration",
        body: "Influence without authority, giving and receiving feedback, and conflict resolution. Foundations of being a great teammate.",
      },
      {
        heading: "Time Management",
        body: "Calendars, deep work, prioritization frameworks, and avoiding burnout — skills that compound through a career.",
      },
      {
        heading: "Interview Readiness",
        body: "STAR method for behavioral interviews, body language, virtual interview etiquette, and salary negotiation basics.",
      },
    ],
    outcomes: [
      "Confident in technical and behavioral interviews",
      "Polished email and presentation skills",
      "Strong collaboration habits for team-based work",
    ],
    duration: "6–8 weeks (40–60 hours)",
    audience: "All engineering students preparing for placements",
    related: ["placement-preparation"],
  },
  {
    slug: "hackathons-innovation",
    category: "Service",
    categorySlug: "services",
    title: "Hackathons & Innovation",
    tagline: "Real problems, real prototypes — learning that sticks.",
    metaDescription:
      "Campus hackathons and innovation challenges with real-world problem statements, mentorship and prototype-building sprints for engineering students.",
    keywords: ["campus hackathon", "innovation challenge", "student hackathon India", "prototype development"],
    heroBadge: "Experiential",
    overview:
      "Hackathons compress months of learning into a weekend. We design and run campus-wide events that turn passive students into builders.",
    sections: [
      {
        heading: "Campus Technology Hackathons",
        body: "End-to-end event organization — themes, registrations, mentors, judges, and prizes. We handle the logistics so students can focus on building.",
      },
      {
        heading: "Real-World Problem Statements",
        body: "Problems sourced from industry partners, NGOs, and government bodies. Students solve things that actually matter.",
      },
      {
        heading: "Prototype Development Sprint",
        body: "Structured sprint methodology — ideation, validation, MVP scoping, and demo prep. Students learn how startups actually ship.",
      },
      {
        heading: "Creativity & Applied Learning",
        body: "The best hackathon outcomes are often new perspectives, not new code. We coach students to think in terms of users and value.",
      },
    ],
    outcomes: [
      "Working prototype demonstrated in 24–48 hours",
      "Cross-functional collaboration experience",
      "Project material for resumes and interviews",
    ],
    duration: "24–72 hour events; semester-long innovation tracks",
    audience: "All engineering students; multidisciplinary teams encouraged",
    related: ["project-based-learning", "campus-programs"],
  },
  {
    slug: "project-based-learning",
    category: "Service",
    categorySlug: "services",
    title: "Project-Based Learning",
    tagline: "Theory fades, projects stay — build a portfolio that speaks for you.",
    metaDescription:
      "Mini and capstone project mentoring for engineering students. Industry-style workflows, code reviews and final year project guidance.",
    keywords: ["final year project", "mini project", "capstone project", "engineering project mentoring"],
    heroBadge: "Experiential",
    overview:
      "Every line on a resume is a project waiting to be told. Our PBL track gives students real engineering experience — Git, reviews, deadlines, and stakeholders.",
    sections: [
      {
        heading: "Mini Projects",
        body: "Short, scoped 2–4 week projects that reinforce concepts immediately after they are taught.",
      },
      {
        heading: "Final Year Project Mentoring",
        body: "Structured guidance from idea selection through implementation, demo, and viva. Faculty-aligned and industry-relevant.",
      },
      {
        heading: "Industry-Style Bootcamps",
        body: "Intensive multi-week build sprints simulating a real product team — PR reviews, sprint demos, and retros.",
      },
      {
        heading: "Real Development Workflows",
        body: "Branching strategy, code review etiquette, issue triage, and documentation. The mechanics of professional software work.",
      },
    ],
    outcomes: [
      "3–5 portfolio-grade projects with clean GitHub repos",
      "Comfort with PR reviews and team workflows",
      "Strong final year project ready for evaluation",
    ],
    duration: "Continuous; aligned with academic calendar",
    audience: "Second year through final year students",
    related: ["full-stack-web-development", "ai-ml-data-science", "hackathons-innovation"],
  },

  // ===== PROGRAMS (from ProgramsOfferedSection) =====
  {
    slug: "csr-initiatives",
    category: "Initiative",
    categorySlug: "programs",
    title: "CSR Initiatives",
    tagline: "Tech education as a force for equity.",
    metaDescription:
      "Corporate Social Responsibility programs for rural and tier-3 colleges, women in tech bootcamps and scholarship-based skill development.",
    keywords: ["CSR education programs", "women in tech India", "rural campus training", "edtech CSR partner"],
    heroBadge: "Social Impact",
    overview:
      "Talent is universal — opportunity is not. Our CSR initiatives bring premium-quality tech training to students who would otherwise be priced out of it, in partnership with corporate funders.",
    sections: [
      {
        heading: "Rural Campus Tech Literacy",
        body: "We bring foundational coding and digital skills to Tier-3 and rural engineering colleges where exposure to industry tools is limited. Programs are co-designed with local faculty.",
      },
      {
        heading: "Women in Tech Bootcamps",
        body: "Dedicated, safe-space bootcamps for women students — covering modern stacks, mentor connects with women engineers, and confidence-building soft skills.",
      },
      {
        heading: "Scholarship-Based Programs",
        body: "Fully sponsored seats for economically disadvantaged students, funded through CSR partnerships with technology and financial-services companies.",
      },
      {
        heading: "Community Coding Drives",
        body: "Open-access coding marathons and tech-awareness camps — designed to spark curiosity in students who may never have written code before.",
      },
    ],
    outcomes: [
      "Increased tech literacy in underserved campuses",
      "Demonstrable CSR impact reports for partner companies",
      "A pipeline of diverse, trained talent for industry hiring",
    ],
    audience: "Tier-3 colleges, rural engineering institutions, women's colleges",
    related: ["campus-programs", "training-programs"],
  },
  {
    slug: "workshops",
    category: "Initiative",
    categorySlug: "programs",
    title: "Workshops",
    tagline: "Intensive, focused, hands-on — skill bursts that fit a busy semester.",
    metaDescription:
      "Short, focused tech workshops on AI, Cloud, Full Stack, Cybersecurity and Data Science delivered on engineering campuses across India.",
    keywords: ["tech workshop", "campus workshop", "AI workshop", "DevOps bootcamp", "weekend coding workshop"],
    heroBadge: "Short Format",
    overview:
      "When a full semester program isn't feasible, our workshops deliver concentrated value — typically 2–5 days, hands-on from minute one.",
    sections: [
      {
        heading: "AI & Generative AI Workshop",
        body: "ChatGPT, Prompt Engineering, LLMs, and building AI-powered applications. Hands-on from the first hour.",
      },
      {
        heading: "Cloud & DevOps Bootcamp",
        body: "Intensive 2–3 day sprints on AWS, Docker, Kubernetes, and CI/CD pipelines. Students leave with a deployed app.",
      },
      {
        heading: "Full Stack Development Sprint",
        body: "Build a complete web application in a weekend using React, Node.js, and MongoDB. Teams demo at the end.",
      },
      {
        heading: "Cybersecurity Awareness Workshop",
        body: "Ethical hacking basics, network security, and a guided vulnerability assessment lab.",
      },
      {
        heading: "Data Science & Visualization",
        body: "Explore real datasets with Python and Pandas, build interactive dashboards, and present findings.",
      },
    ],
    outcomes: [
      "Concrete deliverable at the end of every workshop",
      "Exposure to industry-standard tools and workflows",
      "Spark of interest leading to deeper specialization",
    ],
    duration: "1–5 days per workshop",
    audience: "All engineering branches and years",
    related: ["training-programs", "ai-ml-data-science", "cloud-computing-devops"],
  },
  {
    slug: "training-programs",
    category: "Initiative",
    categorySlug: "programs",
    title: "Training Programs",
    tagline: "Sustained learning that integrates with the academic calendar.",
    metaDescription:
      "Semester-long structured training programs in tech stacks, placement prep, faculty development and certification courses for engineering colleges.",
    keywords: ["semester training", "faculty development program", "AWS certification training", "Azure training"],
    heroBadge: "Long Format",
    overview:
      "Real mastery takes time. Our training programs run alongside the academic semester for deep, sustained learning — not crammed weekend cycles.",
    sections: [
      {
        heading: "Semester-Long Skill Development",
        body: "30–60 hour programs running parallel to the academic semester, covering core tech stacks with weekly assignments and assessments.",
      },
      {
        heading: "Placement Preparation Training",
        body: "Structured aptitude, coding, and interview preparation timed to the placement calendar.",
      },
      {
        heading: "Faculty Development Programs",
        body: "Upskilling college faculty on modern technologies and pedagogy. Sustainable change starts with educators.",
      },
      {
        heading: "Certification-Oriented Courses",
        body: "Industry-recognized certification preparation for AWS, Azure, GCP, Kubernetes (CKA), and more.",
      },
      {
        heading: "Summer & Winter Bootcamps",
        body: "Intensive vacation programs for accelerated learning in trending technology domains.",
      },
    ],
    outcomes: [
      "Measurable skill gain across a cohort",
      "Higher placement readiness scores",
      "Faculty equipped to sustain the curriculum",
    ],
    duration: "4–24 weeks depending on track",
    audience: "Engineering colleges; faculty development cohorts",
    related: ["placement-preparation", "campus-programs", "csr-initiatives"],
  },
  {
    slug: "campus-programs",
    category: "Initiative",
    categorySlug: "programs",
    title: "Campus Programs",
    tagline: "End-to-end transformation of the campus tech ecosystem.",
    metaDescription:
      "Comprehensive campus tech transformation: lab setup, hackathons, industry connect sessions and project-based learning tracks for engineering colleges.",
    keywords: ["campus transformation", "tech lab setup", "industry connect", "campus hackathon program"],
    heroBadge: "Ecosystem",
    overview:
      "Individual workshops change individuals — campus programs change institutions. We partner with college leadership to build a complete tech learning ecosystem.",
    sections: [
      {
        heading: "Campus Technology Lab Setup",
        body: "Help institutions stand up modern tech labs — cloud sandbox accounts, dev tools, hardware where needed, and lab guides.",
      },
      {
        heading: "Hackathon & Innovation Challenges",
        body: "Organize campus-wide hackathons with real-world problem statements, industry mentors, and prizes that matter.",
      },
      {
        heading: "Industry Connect Sessions",
        body: "Bridge students with industry professionals through guest lectures, AMAs, and 1:1 mentoring.",
      },
      {
        heading: "Project-Based Learning Tracks",
        body: "Guided mini and capstone projects following real development workflows — Git, reviews, demos.",
      },
    ],
    outcomes: [
      "A self-sustaining tech culture on campus",
      "Strong placement and higher-studies outcomes",
      "Branded events that elevate institutional reputation",
    ],
    audience: "Engineering colleges, deemed universities, autonomous institutions",
    related: ["training-programs", "hackathons-innovation", "csr-initiatives"],
  },
  {
    slug: "corporate-hiring",
    category: "Initiative",
    categorySlug: "programs",
    title: "Corporate Hiring",
    tagline: "Pre-assessed, job-ready talent — no more hiring guesswork.",
    metaDescription:
      "Connect with pre-trained, pre-assessed campus talent through Impexus hiring partnerships. Custom skill tracks and structured hiring drives.",
    keywords: ["campus hiring", "pre-assessed talent", "hiring partner India", "tech recruitment"],
    heroBadge: "Hiring Partner",
    overview:
      "Hiring fresh talent is expensive when 8 in 10 hires aren't job-ready. Our talent pipeline gives employers candidates who have already proven they can do the work.",
    sections: [
      {
        heading: "Industry-Ready Talent Pipeline",
        body: "Pre-assessed and skilled students ready for direct hiring by technology companies. Detailed skill profiles, project portfolios, and assessment scores included.",
      },
      {
        heading: "Hiring Partner Network",
        body: "Structured hiring drives — virtual or on-campus — with companies in our partner network. End-to-end coordination handled by our team.",
      },
      {
        heading: "Custom Skill Tracks for Employers",
        body: "Co-design training programs with specific technology and competency requirements. Hire from a cohort trained to your exact stack.",
      },
    ],
    outcomes: [
      "Reduced time-to-productivity for new hires",
      "Lower training cost for tech onboarding",
      "Diverse hiring across multiple campuses in a single drive",
    ],
    audience: "Technology companies, IT services, product startups, BFSI tech teams",
    related: ["placement-preparation", "training-programs"],
  },
];

export const getTopic = (slug: string): Topic | undefined =>
  topics.find((t) => t.slug === slug);

export const getRelatedTopics = (slugs: string[]): Topic[] =>
  slugs.map((s) => topics.find((t) => t.slug === s)).filter((t): t is Topic => Boolean(t));
