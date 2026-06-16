import type { Locale } from "@/i18n/config";
export type NavItem = { label: string; href: string };
export type ImageAsset = { src: string; alt: string };
export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "link" | "darkLink";
};
export type ProductTile = {
  id: string;
  surface: "light" | "parchment" | "dark" | "dark2" | "dark3";
  eyebrow?: string;
  title: string;
  description: string;
  image: ImageAsset;
  ctas: Cta[];
};
export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};
export type PortfolioProject = {
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
  actionLabel: string;
};
export type Recognition = {
  icon: string;
  title: string;
  subtitle: string;
  meta: string;
  href?: string;
};
export type CommunityItem = {
  title: string;
  organization: string;
  period: string;
  description?: string;
};
export type FooterLinkColumn = { title: string; links: NavItem[] };
export type SiteContent = {
  metadata: {
    title: string;
    template: string;
    description: string;
    keywords: string[];
  };
  identity: {
    name: string;
    role: string;
    email: string;
    location: string;
    copyright: string;
  };
  navigation: { main: NavItem[]; profile: NavItem[] };
  home: {
    hero: {
      title: string;
      description: string;
      image: ImageAsset;
      ctas: Cta[];
    };
    productTiles: ProductTile[];
    quote: {
      title: string;
      description: string;
      label: string;
      image: ImageAsset;
    };
  };
  profile: {
    navTitle: string;
    header: { title: string; description: string };
    sectionLabels: {
      experience: string;
      projects: string;
      education: string;
      skills: string;
      community: string;
    };
    experience: Experience[];
    projects: PortfolioProject[];
    recognitions: Recognition[];
    skills: string[];
    community: CommunityItem[];
  };
  footer: {
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      successMessage: string;
    };
    columns: FooterLinkColumn[];
    legalLinks: NavItem[];
  };
};
const img = {
  hero: {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600",
    alt: "Developer workspace with code on a laptop",
  },
  qooran: {
    src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1400",
    alt: "Quran and mobile application development workspace",
  },
  mobile: {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1400",
    alt: "Mobile application interface on a smartphone",
  },
  quote: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000",
    alt: "Code editor on a developer desk",
  },
  movie: {
    src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=900",
    alt: "Cinema screen representing movie application project",
  },
  restaurant: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=900",
    alt: "Restaurant table representing restaurant app",
  },
  playfloor: {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=900",
    alt: "AI and computer vision visualization",
  },
};
const profileProjects = [
  {
    title: "QOORAAN — Quran Reader App",
    description:
      "A Kotlin Jetpack Compose Android app with Quran reader, bookmarks, settings, onboarding, qibla, tajweed, Room persistence, DataStore preferences, Repository, ViewModel, and dependency injection.",
    image: img.qooran,
    href: "#",
    actionLabel: "View architecture",
  },
  {
    title: "MovieDB Capstone App",
    description:
      "A mobile application using Kotlin, Coroutine Flow, Dagger dependency injection, Jetpack Compose UI, and TheMovieDB API as a clean architecture capstone project.",
    image: img.movie,
    href: "#",
    actionLabel: "View project",
  },
  {
    title: "Restaurant Discovery App",
    description:
      "A restaurant app experience with dynamic menu rendering, API-driven detail pages, daily reminder preferences, WorkManager scheduling, and simple notifications.",
    image: img.restaurant,
    href: "#",
    actionLabel: "Open case study",
  },
  {
    title: "PLAYFLOOR — AIoT Interactive Floor",
    description:
      "An interactive LED floor concept powered by YOLOv8 and AIoT for supporting children's motor and cognitive stimulation through playful physical interaction.",
    image: img.playfloor,
    href: "#",
    actionLabel: "View concept",
  },
];
const skills = [
  "Kotlin",
  "Jetpack Compose",
  "Android Development",
  "Coroutine Flow",
  "Room",
  "DataStore",
  "Repository Pattern",
  "ViewModel",
  "Dependency Injection",
  "Dagger",
  "Clean Architecture",
  "OOP",
  "SOLID",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "REST API Integration",
  "WorkManager",
  "Notifications",
  "UI Engineering",
];
export const siteContent: Record<Locale, SiteContent> = {
  en: {
    metadata: {
      title:
        "SAYYID MUHAMMAD MUSLIM AS'AD SUNARKO — Mobile & Front-End Developer",
      template: "%s — Sayyid Sunarko",
      description:
        "Portfolio of a mobile apps developer and front-end developer focused on Kotlin, Jetpack Compose, React, clean architecture, and polished user experiences.",
      keywords: [
        "Mobile Apps Developer",
        "Front-End Developer",
        "Kotlin",
        "Jetpack Compose",
        "React",
        "Next.js",
        "Clean Architecture",
        "Android Developer",
      ],
    },
    identity: {
      name: "SAYYID MUHAMMAD MUSLIM AS'AD SUNARKO",
      role: "Mobile Apps Developer · Front-End Developer",
      email: "hello@email.com",
      location: "Indonesia",
      copyright: "© 2026 Sayyid Sunarko Portfolio. All rights reserved.",
    },
    navigation: {
      main: [
        { label: "Home", href: "/en" },
        { label: "Profile", href: "/en/profile" },
        { label: "Work", href: "/en#work" },
        { label: "About", href: "/en#about" },
      ],
      profile: [
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Skills", href: "#skills" },
      ],
    },
    home: {
      hero: {
        title: "Clean code. Thoughtful UI. Production-ready apps.",
        description:
          "I build Android and front-end experiences with clean architecture, reactive flows, scalable components, and interfaces that feel precise from the first tap.",
        image: img.hero,
        ctas: [
          {
            label: "View Developer Profile",
            href: "/en/profile",
            variant: "primary",
          },
          { label: "Selected Work", href: "#work", variant: "link" },
        ],
      },
      productTiles: [
        {
          id: "qooran",
          surface: "dark",
          eyebrow: "Android · Kotlin · Jetpack Compose",
          title: "QOORAAN App Architecture",
          description:
            "A modern Quran reader experience with bookmarks, settings, onboarding, qibla, tajweed, Room, DataStore, Repository, ViewModel, and dependency injection.",
          image: img.qooran,
          ctas: [
            {
              label: "Explore profile",
              href: "/en/profile#projects",
              variant: "primary",
            },
          ],
        },
        {
          id: "mobile-system",
          surface: "parchment",
          eyebrow: "Front-End · Mobile UI · Design Systems",
          title: "Composable Interface Systems",
          description:
            "Reusable UI patterns for mobile and web products, designed with component discipline, visual consistency, accessibility, and long-term maintainability.",
          image: img.mobile,
          ctas: [
            {
              label: "See selected work",
              href: "/en/profile#projects",
              variant: "link",
            },
          ],
        },
      ],
      quote: {
        title:
          "Great software feels simple because the architecture underneath is disciplined.",
        description:
          "I care about the invisible layer: readable code, predictable state, clean boundaries, and small UI details that make a product feel reliable.",
        label: "Engineering Philosophy",
        image: img.quote,
      },
    },
    profile: {
      navTitle: "Developer Profile",
      header: {
        title: "Mobile-first engineering.",
        description:
          "A developer profile focused on Android, front-end engineering, clean architecture, component-driven UI, and real product execution.",
      },
      sectionLabels: {
        experience: "Experience",
        projects: "Project Highlights",
        education: "Education & Recognition",
        skills: "Core Skills",
        community: "Focus Areas",
      },
      experience: [
        {
          company: "Independent / Academic Product Development",
          role: "Mobile Apps Developer",
          period: "2025 — Present",
          location: "Indonesia",
          description:
            "Designed and developed Android applications using Kotlin, Jetpack Compose, Coroutine Flow, Room, DataStore, Repository, ViewModel, and clean architecture principles.",
          skills: [
            "Kotlin",
            "Jetpack Compose",
            "Coroutine Flow",
            "Room",
            "DataStore",
            "Clean Architecture",
          ],
        },
        {
          company: "Front-End & Product Interface Projects",
          role: "Front-End Developer",
          period: "2024 — Present",
          location: "Remote / Indonesia",
          description:
            "Built responsive front-end interfaces with component-based architecture, focusing on reusable UI, strong state management, and polished user interaction.",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Component Design",
          ],
        },
      ],
      projects: profileProjects,
      recognitions: [
        {
          icon: "📱",
          title: "Mobile Development Focus",
          subtitle: "Android · Kotlin · Compose",
          meta: "Clean architecture and production-minded UI",
        },
        {
          icon: "💻",
          title: "Front-End Engineering",
          subtitle: "React · Next.js · TypeScript",
          meta: "Component-driven and responsive interfaces",
        },
        {
          icon: "🧠",
          title: "AIoT & Computer Vision Exploration",
          subtitle: "PLAYFLOOR concept",
          meta: "YOLOv8 · AIoT · interactive experience",
        },
      ],
      skills,
      community: [
        {
          title: "Architecture Discipline",
          organization: "Clean Architecture · OOP · SOLID",
          period: "Core engineering principle",
          description:
            "Building applications with clear separation of concerns, maintainable modules, predictable data flow, and testable boundaries.",
        },
        {
          title: "User-Centered Interface Craft",
          organization: "Mobile UI · Front-End UI · Interaction Details",
          period: "Product development focus",
          description:
            "Designing interfaces that feel fast, clear, accessible, and consistent across mobile and web surfaces.",
        },
      ],
    },
    footer: {
      form: {
        title: "Leave a Message",
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitLabel: "Send Message",
        successMessage: "Thank you. Your message has been prepared.",
      },
      columns: [
        {
          title: "Navigate",
          links: [
            { label: "Home", href: "/en" },
            { label: "Developer Profile", href: "/en/profile" },
            { label: "Work", href: "/en#work" },
          ],
        },
        {
          title: "Social",
          links: [
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "GitHub", href: "https://github.com" },
            { label: "Portfolio", href: "/en" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "hello@email.com", href: "mailto:hello@email.com" },
            { label: "Indonesia", href: "#" },
          ],
        },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
  },
  id: {
    metadata: {
      title:
        "SAYYID MUHAMMAD MUSLIM AS'AD SUNARKO — Mobile & Front-End Developer",
      template: "%s — Sayyid Sunarko",
      description:
        "Portofolio mobile apps developer dan front-end developer yang fokus pada Kotlin, Jetpack Compose, React, clean architecture, dan pengalaman pengguna yang rapi.",
      keywords: [
        "Mobile Apps Developer",
        "Front-End Developer",
        "Kotlin",
        "Jetpack Compose",
        "React",
        "Next.js",
        "Clean Architecture",
        "Android Developer",
      ],
    },
    identity: {
      name: "SAYYID MUHAMMAD MUSLIM AS'AD SUNARKO",
      role: "Mobile Apps Developer · Front-End Developer",
      email: "hello@email.com",
      location: "Indonesia",
      copyright: "© 2026 Sayyid Sunarko Portfolio. Semua hak dilindungi.",
    },
    navigation: {
      main: [
        { label: "Beranda", href: "/id" },
        { label: "Profil", href: "/id/profile" },
        { label: "Karya", href: "/id#work" },
        { label: "Tentang", href: "/id#about" },
      ],
      profile: [
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Skills", href: "#skills" },
      ],
    },
    home: {
      hero: {
        title: "Clean code. Thoughtful UI. Production-ready apps.",
        description:
          "Saya membangun pengalaman Android dan front-end dengan clean architecture, reactive flow, komponen yang scalable, dan UI yang terasa presisi sejak tap pertama.",
        image: img.hero,
        ctas: [
          {
            label: "Lihat Profil Developer",
            href: "/id/profile",
            variant: "primary",
          },
          { label: "Karya Pilihan", href: "#work", variant: "link" },
        ],
      },
      productTiles: [
        {
          id: "qooran",
          surface: "dark",
          eyebrow: "Android · Kotlin · Jetpack Compose",
          title: "QOORAAN App Architecture",
          description:
            "Pengalaman Quran reader modern dengan bookmark, settings, onboarding, qibla, tajweed, Room, DataStore, Repository, ViewModel, dan dependency injection.",
          image: img.qooran,
          ctas: [
            {
              label: "Lihat profil",
              href: "/id/profile#projects",
              variant: "primary",
            },
          ],
        },
        {
          id: "mobile-system",
          surface: "parchment",
          eyebrow: "Front-End · Mobile UI · Design Systems",
          title: "Composable Interface Systems",
          description:
            "Pola UI reusable untuk produk mobile dan web, dibangun dengan disiplin komponen, konsistensi visual, accessibility, dan maintainability jangka panjang.",
          image: img.mobile,
          ctas: [
            {
              label: "Lihat karya",
              href: "/id/profile#projects",
              variant: "link",
            },
          ],
        },
      ],
      quote: {
        title:
          "Great software feels simple because the architecture underneath is disciplined.",
        description:
          "Saya peduli pada layer yang tidak terlihat: kode yang mudah dibaca, state yang terprediksi, boundary yang bersih, dan detail UI kecil yang membuat produk terasa andal.",
        label: "Engineering Philosophy",
        image: img.quote,
      },
    },
    profile: {
      navTitle: "Developer Profile",
      header: {
        title: "Mobile-first engineering.",
        description:
          "Profil developer yang fokus pada Android, front-end engineering, clean architecture, component-driven UI, dan eksekusi produk nyata.",
      },
      sectionLabels: {
        experience: "Experience",
        projects: "Project Highlights",
        education: "Education & Recognition",
        skills: "Core Skills",
        community: "Focus Areas",
      },
      experience: [
        {
          company: "Independent / Academic Product Development",
          role: "Mobile Apps Developer",
          period: "2025 — Present",
          location: "Indonesia",
          description:
            "Merancang dan mengembangkan aplikasi Android menggunakan Kotlin, Jetpack Compose, Coroutine Flow, Room, DataStore, Repository, ViewModel, dan prinsip clean architecture.",
          skills: [
            "Kotlin",
            "Jetpack Compose",
            "Coroutine Flow",
            "Room",
            "DataStore",
            "Clean Architecture",
          ],
        },
        {
          company: "Front-End & Product Interface Projects",
          role: "Front-End Developer",
          period: "2024 — Present",
          location: "Remote / Indonesia",
          description:
            "Membangun interface front-end responsif dengan arsitektur berbasis komponen, fokus pada reusable UI, state management yang kuat, dan interaksi yang rapi.",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Component Design",
          ],
        },
      ],
      projects: profileProjects,
      recognitions: [
        {
          icon: "📱",
          title: "Mobile Development Focus",
          subtitle: "Android · Kotlin · Compose",
          meta: "Clean architecture and production-minded UI",
        },
        {
          icon: "💻",
          title: "Front-End Engineering",
          subtitle: "React · Next.js · TypeScript",
          meta: "Component-driven and responsive interfaces",
        },
        {
          icon: "🧠",
          title: "AIoT & Computer Vision Exploration",
          subtitle: "PLAYFLOOR concept",
          meta: "YOLOv8 · AIoT · interactive experience",
        },
      ],
      skills,
      community: [
        {
          title: "Architecture Discipline",
          organization: "Clean Architecture · OOP · SOLID",
          period: "Core engineering principle",
          description:
            "Membangun aplikasi dengan separation of concerns yang jelas, modul maintainable, data flow yang terprediksi, dan boundary yang testable.",
        },
        {
          title: "User-Centered Interface Craft",
          organization: "Mobile UI · Front-End UI · Interaction Details",
          period: "Product development focus",
          description:
            "Merancang interface yang cepat, jelas, accessible, dan konsisten di permukaan mobile maupun web.",
        },
      ],
    },
    footer: {
      form: {
        title: "Leave a Message",
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitLabel: "Send Message",
        successMessage: "Thank you. Your message has been prepared.",
      },
      columns: [
        {
          title: "Navigate",
          links: [
            { label: "Beranda", href: "/id" },
            { label: "Developer Profile", href: "/id/profile" },
            { label: "Karya", href: "/id#work" },
          ],
        },
        {
          title: "Social",
          links: [
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "GitHub", href: "https://github.com" },
            { label: "Portfolio", href: "/id" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "hello@email.com", href: "mailto:hello@email.com" },
            { label: "Indonesia", href: "#" },
          ],
        },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
  },
};
export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}
