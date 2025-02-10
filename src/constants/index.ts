import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Service",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Design",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Development",
    companyName: "Full Stack",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Design",
    companyName: "Adobe PhotoShop",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designing and editing images using tools like layers, masks, and filters to enhance visual appeal.",
      "Creating visually compelling graphics for websites, social media, and marketing campaigns.",
      "Retouching photos to adjust colors, remove blemishes, and achieve desired effects.",
      "Collaborating with clients or teams to ensure designs align with the intended vision and brand guidelines.",
    ],
  },
  {
    title: "Photography",
    companyName: "Adobe LightRoom",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Capturing high-quality images using advanced camera techniques and equipment.",
      "Editing photos to enhance lighting, color, and composition for professional results.",
      "Exploring different photography styles like portrait, landscape, and macro to suit various projects.",
      "Collaborating with clients or creative teams to bring their vision to life through visual storytelling.",
    ],
  },
  {
    title: "Video Editing",
    companyName: "Adobe Premiere Pro",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Assembling and editing raw video footage into polished, engaging content using software like Adobe Premiere Pro or Final Cut Pro.",
      "Adding transitions, effects, and soundtracks to enhance storytelling and visual appeal.",
      "Ensuring videos are optimized for various platforms by adjusting resolution, aspect ratio, and file size.",
      "Collaborating with clients or teams to align video edits with the intended narrative and branding.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://i.postimg.cc/446JJ4M8/1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Rudra",
    designation: "COO",
    company: "DEF Corp",
    image: "https://i.postimg.cc/x8nVkH76/3.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Taniya",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://i.postimg.cc/NjMY760V/2.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Akatsuk Anime",
    description:
      "This is a modern and visually appealing anime streaming platform named Akatsuki. The website provides detailed descriptions of popular anime series, such as Naruto, and features a user-friendly layout with a vibrant color scheme.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Priyanshu84iya/Akatsuk-Anime",
  },
  {
    name: "Parallax Effect",
    description:
      "A stunning parallax portfolio website for Priyanshu Chaurasiya, combining a bold dark theme, vibrant neon visuals, and professional highlights to showcase expertise in web design, full-stack development, and Android development.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Priyanshu84iya/Portfolio-Paralax-Effects",
  },
  {
    name: "Anime Gallery",
    description:
      "A sleek parallax effect website that dynamically highlights anime titles like Demon Slayer and A Silent Voice, with interactive text effects and links to professional profiles for an engaging user experience.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Priyanshu84iya/Anime-Gallery",
  },
];

export { services, technologies, experiences, testimonials, projects };
