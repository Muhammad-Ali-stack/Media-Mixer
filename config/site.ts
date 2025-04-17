export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Koderz Club",
  description: "A community of passionate coders, innovators, and problem-solvers at NED University.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/Blogs",
    },
    {
      label: "Content",
      href: "/Videos",
    },
    {
      label: "Portal",
      href: "/Portal",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    
    {
      label: "Blogs",
      href: "/Blogs",
    },
    {
      label: "Content",
      href: "/Videos",
    },
    {
      label: "Portal",
      href: "/Portal",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
