export const siteConfig = {
  name: "Yasir Rahman",
  email: "chyyasir2000@gmail.com",
  cv: "/CV_of_Yasir.pdf",
  roles: {
    engineering: {
      title: "Software Engineer",
      org: "Bevy Commerce",
      location: "Ontario, Canada (Remote)",
      duration: "July 2024 – Present",
    },
    teaching: {
      title: "Adjunct Lecturer",
      org: "International Islamic University Chittagong (IIUC)",
      duration: "Present",
    },
    research: {
      badge: "Q1 Journal",
      status: "Accepted",
    },
  },
  social: {
    github: "https://github.com/ChyYasir",
    linkedin: "https://www.linkedin.com/in/yasir-rahman-chy/",
    email: "mailto:chyyasir2000@gmail.com",
    // TODO: replace the placeholder "#" links below with your real profile URLs
    scholar: "#",
    facebook: "#",
    twitter: "#",
  },
  nav: [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Updates", path: "/updates" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
  ],
  experienceTabs: [
    { id: "engineering", label: "Engineering" },
    { id: "teaching", label: "Teaching" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
  ],
  achievementTabs: [
    { id: "icpc", label: "ICPC" },
    { id: "iupc", label: "IUPC" },
    { id: "hackathon", label: "Hackathon" },
  ],
};
