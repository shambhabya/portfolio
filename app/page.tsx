import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { profile } from "@/lib/site-data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "KifferAI",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gauhati University",
  },
  sameAs: [
    "https://github.com/shambhabya",
    "https://linkedin.com/in/shambhabya-medhi",
    "https://leetcode.com/shambhabyamedhi",
  ],
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "AWS",
    "Docker",
  ],
};

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
