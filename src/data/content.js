// Centralized content for the portfolio. Edit here to update site copy.

export const profile = {
  name: 'Arayan Savaliya',
  title: 'Graphic Designer & UI/UX Designer',
  tagline: 'Designing meaningful digital experiences and impactful visual identities.',
  location: 'Rajkot, Gujarat, India',
  email: 'arayansavaliya07@gmail.com',
  phone: '+91 94080 28193',
  linkedin: 'https://www.linkedin.com/in/arayan-savaliya-3539b12a6/',
  github: 'https://github.com/Arayan0701',
  resumeUrl: '#',
}

export const about = {
  paragraphs: [
    "I'm an IT Engineering student at RK University, Rajkot, with a deep curiosity for how things look and how they work — which is what pulled me toward graphic design and UI/UX design in the first place.",
    'My process always starts with the user. Whether I\'m building a brand identity or a mobile app screen, I ask what the person on the other end needs to feel and do, then design backward from that.',
    "I enjoy the in-between space of design and code — sketching a wireframe in Figma in the morning and shipping it as a working React component by evening. That loop keeps my designs honest and buildable.",
  ],
  highlights: [
    { label: 'IT Engineering Student', detail: 'RK University, Rajkot' },
    { label: 'Design Focus', detail: 'Branding, UI/UX, Visual Identity' },
    { label: 'Approach', detail: 'User-centered, research-driven' },
    { label: 'Mindset', detail: 'Creative problem solver' },
  ],
}

export const skills = {
  'Graphic Design': [
    { name: 'Adobe Photoshop', level: 75 },
    { name: 'Adobe Illustrator', level: 78 },
    { name: 'Canva', level: 95 },
    { name: 'Branding', level: 85 },
    { name: 'Typography', level: 90 },
    { name: 'Color Theory', level: 88 },
  ],
  'UI/UX Design': [
    { name: 'Figma', level: 69 },
    { name: 'Wireframing', level: 90 },
    { name: 'Prototyping', level: 88 },
    { name: 'User Research', level: 80 },
    { name: 'Design Systems', level: 85 },
    { name: 'Mobile App Design', level: 90 },
  ],
  Development: [
    { name: 'HTML', level: 92 },
    { name: 'CSS', level: 88 },
    { name: 'JavaScript', level: 82 },
    { name: 'React', level: 68 },
    { name: 'ASP.NET Core', level: 70 },
  ],
}

export const projectCategories = ['All', 'UI/UX', 'Web Design', 'Branding', 'Social Media', 'Posters']

export const projects = [
  {
    id: 'mitraride',
    title: 'MitraRide',
    subtitle: 'QR-Based Vehicle Communication Platform',
    category: 'UI/UX',
    tags: ['Figma', 'Mobile App', 'Product Design'],
    year: '2026',
    description:
      'A mobile-first platform that lets vehicle owners and concerned bystanders communicate instantly via a QR code stuck on the vehicle — no phone numbers exchanged, no awkward confrontations.',
    problem:
      'When a car blocks a driveway or a bike is parked dangerously, there\'s no quick, private way to reach the owner. People resort to notes, shouting, or just giving up.',
    solution:
      'A scannable QR sticker opens an in-app chat thread directly to the owner, keeping both sides anonymous until they choose to share contact details.',
    process: ['Research', 'Wireframe', 'Prototype', 'Testing', 'Final Design'],
    image: '/images/mitra_ride_img.png',
    color: '#F59E0B',
  },
  {
    id: 'shree-om-hardware',
    title: 'Shree Om Hardware',
    subtitle: 'Responsive Website Design',
    category: 'Web Design',
    tags: ['Web Design', 'Responsive', 'UI Screens'],
    year: '2025',
    description:
      'A clean, catalog-driven website for a local hardware and building-materials store, designed to make browsing inventory and requesting quotes effortless on any device.',
    problem:
      'The store had no online presence — customers had to call in to ask about stock, pricing, and availability, which slowed down both staff and shoppers.',
    solution:
      'A responsive, categorized product catalog with a simple quote-request flow, built mobile-first since most local customers browse on their phones.',
    process: ['Research', 'Wireframe', 'Prototype', 'Testing', 'Final Design'],
    image: '/images/shree_om_hardware_img.png',
    color: '#38BDF8',
  },
  {
    id: 'social-media-creatives',
    title: 'Social Media Creative Collection',
    subtitle: 'Instagram Posts · Marketing Creatives · Event Posters',
    category: 'Social Media',
    tags: ['Instagram', 'Marketing', 'Photoshop'],
    year: '2024 — 2026',
    description:
      'An ongoing collection of social-first creative work — Instagram carousels, promotional banners, and announcement posts designed for fast scrolling and strong brand recall.',
    problem:
      'Brands need a steady stream of visually consistent content that performs in a feed people scroll past in under a second.',
    solution:
      'A modular visual system per client — consistent type, color, and grid — so new posts can be produced quickly without losing brand identity.',
    process: ['Research', 'Concept', 'Design', 'Feedback', 'Final Design'],
    image: '/images/canva-starbuks.png',
    color: '#F59E0B',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Designs',
    subtitle: 'Logo Collection · Brand Guidelines · Typography Systems',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Guidelines', 'Typography'],
    year: '2024 — 2026',
    description:
      'A collection of brand identity systems built for small businesses and personal brands — logos, color systems, and usage guidelines that hold up across every touchpoint.',
    problem:
      'Most small businesses launch with a logo but no system — leading to inconsistent colors, fonts, and tone across their materials.',
    solution:
      'Complete identity kits: primary and secondary logo marks, a defined color and type system, and a one-page guideline sheet clients can hand to anyone.',
    process: ['Discovery', 'Concept Sketching', 'Logo Design', 'System Building', 'Guidelines'],
    image: '/images/Green Yellow Cream Illustration Leaf Food Restaurant Vegan Logo.png',
    color: '#38BDF8',
  },
  {
    id: 'event-campaign-posters',
    title: 'Event & Campaign Posters',
    subtitle: 'Professional Poster Designs',
    category: 'Posters',
    tags: ['Print Design', 'Events', 'Campaigns'],
    year: '2024 — 2026',
    description:
      'Poster design work for college events, tech fests, and campaigns — built to communicate a single message clearly at a glance, on screen or in print.',
    problem:
      'Event posters compete for attention in crowded feeds and noticeboards; weak hierarchy means key details get missed.',
    solution:
      'A strict visual hierarchy — one headline, one date, one call to action — paired with bold color blocking so the poster reads in under two seconds.',
    process: ['Brief', 'Concept', 'Layout', 'Design', 'Final Export'],
    image: '/images/ChatGPT Image Jun 19, 2026, 11_37_29 AM.png',
    color: '#F59E0B',
  },
]

export const processSteps = [
  {
    title: 'Research',
    description: 'Understanding the user, the market, and the real problem before opening any design tool.',
  },
  {
    title: 'Wireframe',
    description: 'Mapping structure and flow with low-fidelity layouts to validate ideas cheaply.',
  },
  {
    title: 'Prototype',
    description: 'Building interactive, high-fidelity prototypes that feel close to the real product.',
  },
  {
    title: 'Testing',
    description: 'Putting the design in front of real users and refining based on what actually happens.',
  },
  {
    title: 'Final Design',
    description: 'Polishing detail, motion, and handoff-ready files for development.',
  },
]

export const certificates = [
  {
    title: 'CodeMind AI Hackathon',
    issuer: 'CodeMind',
    year: '2026',
  },
  {
    title: 'Data Science',
    issuer: 'SWAYAM',
    year: '2025',
  },
  {
    title: 'App Designing',
    issuer: 'Technoplanet',
    year: '2025',
  },
  {
    title: 'PHP with Laravel',
    issuer: 'RK University',
    year: '2025',
  },
]
