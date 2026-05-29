export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "leetcode-duels",
    title: "LeetCode Duels",
    description: "A real-time competitive programming platform that pairs developers in head-to-head algorithmic challenges, featuring live synchronization and instant evaluation.",
    techStack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com/MAYANKCHORADIA/leetcode-duels",
    liveUrl: "https://code-arena-phi-inky.vercel.app/"
  },
  {
    id: "careercrm",
    title: "CareerCRM",
    description: "An AI-assisted student job application tracking system that automates pipeline tracking and securely extracts interview schedules directly from email data.",
    techStack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "MLOps"],
    githubUrl: "https://github.com/MAYANKCHORADIA/CareerCRM",
  }
];

export const skillsData = {
  languages: ["C++", "TypeScript", "JavaScript", "SQL", "Python"],
  frameworks: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  databasesAndTools: ["PostgreSQL", "Apache Spark", "Git", "Docker"]
};

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MAYANKCHORADIA", icon: "↗" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-choradia/", icon: "↗" },
  { label: "Twitter / X", href: "https://x.com/Mayank_Choradia", icon: "↗" },
  { label: "Email(mayankchoradia@gmail.com)", href: "mailto:mayankchoradia@gmail.com", icon: "✉" },
];