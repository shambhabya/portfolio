export const profile = {
  name: "Shambhabya Medhi",
  firstName: "Shambhabya",
  lastName: "Medhi",
  role: "Software Development Engineer",
  location: "Guwahati, India",
  email: "shambhabyamedhi@gmail.com",
  phone: "+91 87539 57901",
  phoneHref: "tel:+918753957901",
  summary:
    "Software Development Engineer with 2+ years of experience building production web, mobile and cloud applications. Strong in React, React Native, Next.js, Node.js, GraphQL and AWS, with experience designing backend systems, integrating third-party services and owning features through deployment.",
  availability: "Open to full-time roles & freelance work",
} as const;

export const socials = [
  {
    label: "GitHub",
    handle: "/shambhabya",
    href: "https://github.com/shambhabya",
  },
  {
    label: "LinkedIn",
    handle: "/in/shambhabya-medhi",
    href: "https://linkedin.com/in/shambhabya-medhi",
  },
  {
    label: "LeetCode",
    handle: "/shambhabyamedhi",
    href: "https://leetcode.com/shambhabyamedhi",
  },
  {
    label: "Email",
    handle: "shambhabyamedhi@gmail.com",
    href: "mailto:shambhabyamedhi@gmail.com",
  },
] as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "2+", label: "Years shipping production software" },
  { value: "8.2", label: "CGPA · B.Tech in CSE" },
  { value: "06", label: "Core technology stacks" },
  { value: "03", label: "Platforms · iOS, Android, web" },
] as const;

export const projects = [
  {
    index: "01",
    title: "Trev Mobility",
    subtitle: "Premium EV cabs · rider, driver & fleet",
    description:
      "Production web and mobile applications for Trev, an EV cab mobility platform. I own core flows from booking and driver allocation to trip lifecycle, fare calculation, live GPS tracking, fleet management and payments.",
    tags: ["React Native", "Next.js", "AWS", "GraphQL"],
    year: "2024 — Present",
    links: [
      {
        label: "Google Play",
        store: "play" as const,
        href: "https://play.google.com/store/apps/details?id=com.trevcabs.app&hl=en_IN",
      },
      {
        label: "App Store",
        store: "apple" as const,
        href: "https://apps.apple.com/in/app/trev-premium-ev-cabs/id6744000764",
      },
    ],
  },
  {
    index: "02",
    title: "Medical Edge Platform",
    subtitle: "Edge-to-cloud data ingestion",
    description:
      "An event-driven pipeline that moves medical device data from edge locations to the cloud, with reliable sync and offline-first processing for intermittent networks.",
    tags: ["AWS Greengrass", "Docker", "SQS", "DynamoDB"],
    year: "2024",
    links: [],
  },
  {
    index: "03",
    title: "UjuCode Live Scoring",
    subtitle: "Badminton scoring & tournaments",
    description:
      "Responsive React interfaces and API integrations for live badminton scoring and tournament management — built for fast, glanceable updates while matches are in play.",
    tags: ["React", "REST APIs", "Tailwind CSS"],
    year: "2023",
    links: [],
  },
] as const;

export const sideProjects = [
  {
    title: "Clubify",
    tagline: "Social clubs, feeds & community",
    description:
      "A social platform for discovering clubs, sharing posts and connecting with people who share your interests. Includes feeds, profiles, post creation, image uploads, search and saved posts.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Appwrite"],
    href: "https://clubify-nine.vercel.app",
    logo: "/clubify-logo.png",
  },
] as const;

export const experience = [
  {
    role: "Software Development Engineer I",
    level: "(SDE-1)",
    company: "KifferAI",
    arrangement: "Remote",
    period: "Aug 2024 — Present",
    bullets: [
      "Develop production web and mobile applications for rider, driver, business and administrative workflows using React, React Native, Next.js and TypeScript.",
      "Architected serverless backend services with AWS Amplify, AppSync, GraphQL, Lambda and DynamoDB for real-time workflows.",
      "Built core mobility flows — booking, driver allocation, trip lifecycle, fare calculation, GPS tracking, fleet management and payments.",
      "Integrated Google Maps, Juspay, OTP authentication, Firebase and notification services across production apps.",
      "Built admin and operations dashboards for booking management, driver operations, payments, reporting and fleet visibility.",
      "Owned features end-to-end across architecture, development, testing, deployment and production debugging on iOS, Android and web.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "UjuCode",
    arrangement: "Guwahati, India",
    period: "Jun 2023 — Sep 2023",
    bullets: [
      "Developed responsive React interfaces and integrated APIs for live badminton scoring and tournament management applications.",
    ],
  },
] as const;

export const skillGroups = [
  {
    index: "01",
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    index: "02",
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    index: "03",
    title: "Backend",
    items: ["Node.js", "GraphQL", "REST APIs", "AWS Lambda"],
  },
  {
    index: "04",
    title: "Cloud & Infra",
    items: ["Amplify", "AppSync", "DynamoDB", "SQS", "Greengrass", "Docker"],
  },
  {
    index: "05",
    title: "Integrations",
    items: ["Google Maps", "Juspay", "Firebase", "OTP", "Payment gateways"],
  },
  {
    index: "06",
    title: "Tools",
    items: ["Git", "GitHub", "MongoDB"],
  },
] as const;

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  school: "Gauhati University",
  period: "2020 — 2024",
  detail: "CGPA 8.2 / 10",
} as const;

export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "GraphQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "MongoDB",
] as const;
