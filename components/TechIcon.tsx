import {
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglemaps,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const logos: Record<string, typeof SiReact> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Firebase: SiFirebase,
  "Google Maps": SiGooglemaps,
};

function CustomMark({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  const key = name
    .replace("AWS Greengrass", "Greengrass")
    .replace("AWS Amplify", "Amplify")
    .replace("AWS AppSync", "AppSync");

  switch (key) {
    case "React Native":
      return (
        <svg {...props}>
          <rect x="7.4" y="1.8" width="9.2" height="20.4" rx="2.4" />
          <ellipse cx="12" cy="12" rx="4.2" ry="1.4" />
          <ellipse cx="12" cy="12" rx="4.2" ry="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="4.2" ry="1.4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "AWS":
      return (
        <svg {...props}>
          <path d="M6.5 17.5a3.8 3.8 0 0 1-.3-7.6 5.6 5.6 0 0 1 10.6-1 4.3 4.3 0 0 1 .5 8.6h-1.6" />
          <path d="M5 20c4.6 2 9.4 2 14 0" />
        </svg>
      );
    case "AWS Lambda":
      return (
        <svg {...props}>
          <path d="M4.5 20 10.8 4h2.4L19.5 20M8 13h8" />
        </svg>
      );
    case "Amplify":
      return (
        <svg {...props}>
          <path d="m13 2-8 12h6l-1 8 8-12h-6l1-8Z" />
        </svg>
      );
    case "AppSync":
      return (
        <svg {...props}>
          <path d="M4 9a8 8 0 0 1 13.5-3.5M20 15A8 8 0 0 1 6.5 18.5" />
          <path d="M17 2v4h-4M7 22v-4h4" />
        </svg>
      );
    case "DynamoDB":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
          <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
          <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
        </svg>
      );
    case "SQS":
      return (
        <svg {...props}>
          <rect x="3.5" y="4" width="17" height="3.5" rx="1" />
          <rect x="3.5" y="10.2" width="17" height="3.5" rx="1" />
          <rect x="3.5" y="16.4" width="17" height="3.5" rx="1" />
        </svg>
      );
    case "Greengrass":
      return (
        <svg {...props}>
          <path d="M20.5 3.5C10 4 4 9 4 16.2c0 2.1 1.3 3.8 3.4 3.8 7 0 13.1-6.5 13.1-16.5Z" />
          <path d="M7 18c2.5-4.5 5.8-7.3 10-9.5" />
        </svg>
      );
    case "REST APIs":
      return (
        <svg {...props}>
          <path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" />
        </svg>
      );
    case "Juspay":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M14.5 7v7.2A3.8 3.8 0 0 1 7 15" />
        </svg>
      );
    case "OTP":
      return (
        <svg {...props}>
          <path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.3 7.5 10 4.3-1.7 7.5-5.4 7.5-10v-6L12 2.5Z" />
          <path d="m8.8 11.8 2.2 2.2 4.4-4.4" />
        </svg>
      );
    case "Payment gateways":
      return (
        <svg {...props}>
          <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
          <path d="M2.5 9.5h19M6.5 15.5h3.5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10Z" />
        </svg>
      );
  }
}

export default function TechIcon({
  name,
  className = "h-3.5 w-3.5",
  colored = false,
}: {
  name: string;
  className?: string;
  colored?: boolean;
}) {
  const Logo = logos[name];

  if (Logo) {
    return (
      <Logo
        size={14}
        color={colored ? "default" : "currentColor"}
        className={className}
        aria-hidden="true"
      />
    );
  }

  return <CustomMark name={name} className={className} />;
}
