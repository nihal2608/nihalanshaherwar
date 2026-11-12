export const profile = {
  name: "Nihal Ansh Aherwar",
  firstName: "NIHAL ANSH",
  lastName: "AHERWAR",
  role: "Senior Java Backend Developer",
  email: "nihal.ansh000@gmail.com",
  phones: ["+91 787-951-3851", "+91 808-550-5692"],
  phoneLinks: ["+917879513851", "+918085505692"],
  location: "Chhindwara, Madhya Pradesh, India",
  linkedin: "https://linkedin.com/in/nihal-ansh-aherwar-6ab6066a",
  summary:
    "Senior Java Backend Developer with 4.6 years of experience developing and maintaining backend services across telecom, networking, smart-city, log-management, and mobile device-management domains. Skilled in Java, Spring Boot, REST APIs, Microservices, MongoDB, PostgreSQL, and Apache Kafka. Experienced in API development, production troubleshooting, database query work, event-processing workflows, and collaboration with frontend, QA, and engineering teams.",
  roles: [
    "Java Backend Developer",
    "Spring Boot Engineer",
    "Microservices Builder",
    "Kafka Event Pipelines",
    "API & Database Craftsman",
  ],
  stats: [
    { value: 4.6, suffix: "+", decimals: 1, label: "Years Experience" },
    { value: 7, suffix: "", decimals: 0, label: "Projects Shipped" },
    { value: 5, suffix: "", decimals: 0, label: "Domains Served" },
    { value: 2, suffix: "", decimals: 0, label: "Companies" },
  ],
};

export const navItems = [
  { id: "hero", label: "Opening" },
  { id: "about", label: "Story" },
  { id: "skills", label: "Cast" },
  { id: "experience", label: "Scenes" },
  { id: "projects", label: "Films" },
  { id: "terminal", label: "Terminal" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    key: "backend",
    title: "Backend & APIs",
    icon: "⚙",
    items: ["Java", "Java EE", "Spring Boot", "Spring", "Hibernate", "Microservices", "REST APIs", "API Gateway"],
  },
  {
    key: "data",
    title: "Databases",
    icon: "🗄",
    items: ["MongoDB", "PostgreSQL", "SQL", "NoSQL"],
  },
  {
    key: "messaging",
    title: "Messaging & Logging",
    icon: "📡",
    items: ["Apache Kafka", "Syslog Monitoring", "Log Management"],
  },
  {
    key: "security",
    title: "Security & Identity",
    icon: "🛡",
    items: ["JWT", "Keycloak", "Encryption", "RADIUS / TACACS+"],
  },
  {
    key: "testing",
    title: "Testing",
    icon: "🧪",
    items: ["JUnit", "Mockito", "Unit Testing", "Integration Testing"],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    icon: "🧰",
    items: ["Git", "Eclipse", "IntelliJ IDEA", "Linux", "AWS S3", "Agile", "Scrum"],
  },
  {
    key: "domain",
    title: "Domain Knowledge",
    icon: "🌐",
    items: ["Mobile Device Management (iOS/Android)", "Network Authentication", "Telecom", "Smart City"],
  },
];

export const marquee = [
  "Java", "Spring Boot", "Microservices", "Apache Kafka", "MongoDB", "PostgreSQL",
  "REST APIs", "JWT", "Keycloak", "RADIUS", "TACACS+", "Hibernate", "JUnit", "Mockito", "Linux", "AWS S3",
];

export const experience = [
  {
    scene: "SCENE 02",
    role: "Senior Java Backend Developer",
    company: "Advantal Technologies Ltd",
    period: "Jul 2022 – Sep 2026",
    points: [
      "Develop and maintain Java/Spring Boot backend services across telecom, networking, smart-city, syslog/log-management, and mobile device-management projects.",
      "Design and maintain REST APIs for frontend applications and internal/external service integrations.",
      "Work on centralized syslog and log-monitoring workflows for collecting, processing, searching, and analyzing network-device events.",
      "Contribute to AAA network access-control functionality using RADIUS/TACACS+ protocols, including authentication, authorization, and accounting workflows.",
      "Develop backend APIs and workflows for mobile-device enrollment, policy enforcement, and compliance tracking.",
      "Support database schema design, SQL query development, and data access using PostgreSQL and MongoDB.",
      "Troubleshoot backend performance and production issues; collaborate with frontend, QA, and engineering team members.",
      "Write and maintain unit/integration tests using JUnit and Mockito, and provide technical guidance to junior developers.",
    ],
  },
  {
    scene: "SCENE 01",
    role: "Senior Java Backend Developer",
    company: "Xtranet Technologies Private Limited",
    period: "Nov 2021 – Mar 2022",
    points: [
      "Developed backend services for an e-commerce platform and implemented REST APIs for frontend/backend communication.",
      "Worked on database query optimization and backend efficiency improvements.",
      "Participated in code reviews and provided guidance to junior developers.",
      "Project: HEG-SALARY — salary management system for an organization.",
    ],
  },
];

export const projects = [
  {
    id: "syslog",
    title: "Syslog / Log-Manager",
    genre: "THRILLER · HIGH VOLUME",
    stack: ["Java", "Spring Boot", "MongoDB", "Kafka"],
    summary: "Centralized collection and monitoring of network-device logs with event search and analysis.",
    details: [
      "Worked on centralized collection and monitoring of network-device logs, supporting event search and analysis.",
      "Supported troubleshooting of high-volume ingestion, message publishing/consumer processing, database queries, and archival/export workflows.",
    ],
    accent: "#e8b04a",
  },
  {
    id: "mdm",
    title: "MDM — Mobile Device Management",
    genre: "SCI-FI · DEVICE CONTROL",
    stack: ["Java", "Spring Boot", "REST APIs", "NanoMDM"],
    summary: "Backend workflows for iOS device enrollment, policy management and managed-device integration.",
    details: [
      "Worked on backend workflows for iOS device enrollment, policy management, and managed-device integration.",
      "Contributed to device-management APIs and organization-based enrollment integration.",
      "Built APIs/workflows around mobile-device enrollment, policy enforcement, and compliance tracking.",
    ],
    accent: "#3fd0c9",
  },
  {
    id: "aaa",
    title: "AAA — RADIUS / TACACS+",
    genre: "ACTION · ACCESS CONTROL",
    stack: ["Java", "Spring Boot", "RADIUS", "TACACS+"],
    summary: "Authentication, authorization and accounting workflows for network devices and users.",
    details: [
      "Worked on authentication, authorization, and accounting workflows for network devices and users.",
      "Supported policy enforcement and accounting/audit data handling.",
    ],
    accent: "#e5484d",
  },
  {
    id: "cgnat",
    title: "CGNAT / Network",
    genre: "DOCUMENTARY · NETWORKING",
    stack: ["Java backend", "Networking integrations"],
    summary: "Processing accounting information from BNG and leaf network devices and sharing it with a mediation system.",
    details: [
      "Worked on processing accounting information received from BNG and leaf network devices and sharing data with a mediation system.",
    ],
    accent: "#8b7cf6",
  },
  {
    id: "cep",
    title: "Citizen Enablement Portal (CEP / NEC)",
    genre: "DRAMA · SMART CITY",
    stack: ["Java backend", "REST APIs"],
    summary: "Backend for citizen complaints routed to the Integrated Command and Control Centre (ICCC).",
    details: [
      "Contributed to backend functionality for citizen complaints routed to the Integrated Command and Control Centre (ICCC), along with admin-portal backend tasks.",
    ],
    accent: "#4cc27a",
  },
  {
    id: "cooee",
    title: "Cooee — Telecommunications",
    genre: "ROMANCE · TELECOM",
    stack: ["Java backend", "REST APIs"],
    summary: "Backend functionality for calling, SMS and subscription-plan features.",
    details: ["Worked on backend functionality related to calling, SMS, and subscription-plan features."],
    accent: "#f08a4b",
  },
  {
    id: "heg",
    title: "HEG-Salary",
    genre: "CLASSIC · ENTERPRISE",
    stack: ["Java", "REST APIs", "SQL"],
    summary: "Salary management system for an organization (Xtranet Technologies).",
    details: [
      "Salary management system for an organization.",
      "Also developed backend services and REST APIs for an e-commerce platform, with query optimization work.",
    ],
    accent: "#d4d4d8",
  },
];

export const education = [
  {
    degree: "B.E. — Computer Science & Engineering",
    school: "RGPV, Bhopal",
    period: "Jun 2014 – Jun 2017",
  },
  {
    degree: "Engineering Diploma — Information Technology",
    school: "RGPV",
    period: "Jul 2011 – Jun 2014",
  },
];

export const languages = ["Hindi", "English"];
