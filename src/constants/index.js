import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "E-Commerce Management System",
    description:
      "Manage and monitor your entire store in one place.",
    subDescription: [
       "A fully functional admin dashboard built with Next.js and Tailwind CSS, backed by an ASP.NET C# backend and PostgreSQL database.",
      "Features include billboard creation, category/size/color management, full product control, and real-time order tracking.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "ASP.NET",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "Next.js",
        path: "/assets/logos/NextJs.webp",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
 
 
  {
    id: 4,
    title: "Real-Time Chat System",
    description:
 "Chat live with friends and enjoy a smooth, secure messaging experience.",
    subDescription: [
       "A modern chat application built with React for the frontend and ASP.NET for the backend, featuring real-time messaging using SignalR.",
    "Users can create an account, log in securely with JWT-based authentication, and send both text and image messages.",
    "Includes dynamic theme switching (light/dark), responsive design, and a clean user interface.",
    ],
    href: "http://34.89.228.75/",
    logo: "",
    image: "/assets/projects/chat.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "ASP.NET",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
 
  {
    id: 6,
     title: "Online Storefront",
  description:
    "Browse, shop, and checkout with ease in a fully responsive store.",
  subDescription: [
    "Built with Next.js and Tailwind CSS, powered by an ASP.NET backend and integrated with Stripe for secure payments.",
    "Users can explore product collections, view item details, select quantities, and complete orders through a smooth checkout experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/store.jpg",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/NextJs.webp",
      },
      {
        id: 2,
        name: "ASP.NET",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [

  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ahmed-saadi-295160243/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Ahmed-saadi77/",
    icon: "/assets/socials/Github.png",
  },
];

