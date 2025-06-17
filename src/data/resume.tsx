import { Icons } from "@/components/icons";
import { Book, HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";
import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Devisha Gupta",
  initials: "DG",
  url: "https://devisha.vercel.app",
  description: "I Code.",
  summary: `
I'm a full-stack blockchain developer with an experience of working with various languages and blockchains.

Previously, I've built various projects and won a global hackathons. I enjoy contributing to open source projects. I'm also a member at HerDAO, WinPrivacy(a research community)& Dev3Pack.

Beyond code, I'm passionate about dance, playing billiards and am stepping out of my comfort zone to create both technical and non-technical content. I'm love traveling, and enjoy endless talks on finance.
`,
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/wins", icon: TrophyIcon, label: "Wins" },
    { href: "/bookshelf", icon: Book, label: "Bookshelf" },
  ],
  contact: {
    email: "gdevisha11@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/uniiquecornnx/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devisha-gupta-10a304232/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_devisha",
        icon: Icons.x,

        navbar: true,
      },
      resume: {
        name: "Download Resume",
        url: "/resume.pdf",
        icon: Icons.work,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Hashed Emergent",
      href: "https://www.hashedem.com/",
      location: "Remote",
      title: "BD and KOL Manager",
      logoUrl: "/work/hashedEM.png",
      start: "January 2025",
      end: "May 2025",
      description:
        "I was a part of their Growth team, focusing majorly on the KOL focused growth. Helping their fagship event IBW get more traction by collaborating with renowned KOLs from Inidia. Finding and curating region-specific and domain specific KOLs for our clients.",
    },
    {
      company: "Capx",
      href: "https://www.capx.ai/",
      location: "Remote",
      title: "Growth and BD lead",
      logoUrl: "/work/capx.png",
      start: "March 2024",
      end: "December 2024",
      description:
        "Developed multiple smart contracts in Lua for the AO Ecosystem, while battle-testing 0rbit's core infrastructure and contributing to the core node. I also integrated frontend tutorials using AOConnect, showcasing 0rbit's capabilities in blog posts. Beyond code, I enhanced the documentation, converted Figma designs into functional UI components, and contributed to the website development. Additionally, I handled social media content and authored blogs and technical documentation, ensuring a better developer experience.",
    },
    {
      company: "Scrib3.co",
      href: "",
      location: "Remote",
      title: "Growth and BD Intern",
      logoUrl: "/work/scrib3.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "Curated sheets for domain specific KOLs, hunting for the rates and prices of the KOLs to help our clients grow their community",
    },
    {
      company: "Algorand",
      href: "",
      location: "Remote",
      title: "Regional Growth and Communtiy manager",
      logoUrl: "/work/algorand.png",
      start: "January 2024",
      end: "December 2024",
      description: "Focusing on creating a community in my region, and onbaording them to the algorand ecosystem by hosting events, workshops and numerous hackathons. taking weekly calls with the community to ensure transparency and opportunity sharing."
    },
  ],
  openSource: [],
  projects: [
    {
      Frontend: {
        "Kazi Pay": {
          id: 1,
          links: [
            {
              type: "Source",
              href: "https://github.com/KismetKrystle/kazipay-app",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            " Kazi Pay is a Global Payroll Platform built on XRP Ledger which uses DID with integrated time-based Escrows to initiate payments from clients to freelancers in milestones. We won the in the XRP Ledger APEX Hackathon 2025",
        },
        "Kavach": {
          id: 2,
          links: [
            
            {
              type: "Source",
              href: "https://github.com/uniiquecornnx/Kavach",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Kavach is a SOS-based app focusing on women safety, which when triggered, sends a SOS message to the user's contacts with their location and a alert to nearby police-stations with a live audio recording of the situation",
        },
        "Doubt-It": {
          id: 3,
          links: [
            
            {
              type: "Source",
              href: "https://github.com/uniiquecornnx/doubt-it",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "It is a decentralized doubt solving mini-app which helps you build your profile as you help others with their doubts by giving out nfts as your pow, built on Aptos and was the finalistfor the Aptos winter school. ",
        },
        "Snake-game": {
          id: 4,
          links: [
            {
              type: "Website",
              href: "https://snake-game-theta-olive.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/uniiquecornnx/snake-game",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A snake game with a 90s vibe built as a farcaster mini-app",
        },
      },
      Backend: {
        "Beat-Bera": {
          id: 1,
          links: [
            {
              type: "Source",
              href: "https://github.com/uniiquecornnx/Beat-bera",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A kamoguchi-style bear, with which you can talk and play, to earn rewards with fixed APY, built on Berachain",
        },
      },
      "Full Stack": {
        
        
        
        
        
        
      },
    },
  ],
  wins: {
    "XRP Ledger APEX Hackathon - Bounty winner": {
      link: "",
      type: "hackathon",
    },
    "Aptos Winter School - Finalist": {
      link: "",
      type: "hackathon",
    },
    "Superteam earn - 2x bounties": {
      link: "",
      type: "hackathon",
    },
    "Dev3Pack - Member": {
      link: "",
      type: "hackathon",
    },
    "Smart India Hackathon'24 - Finalist": {
      link: "",
      type: "hackathon",
    },
    
  },
  books: [
    {
      title: "Unfinished: A Memoir - Priyanka Chopra Jonas",
    },
    {
      title: "Ikigai - Francesc Miralles and Hector Garcia",
    },
    {
      title: "Zero to One - Peter Thiel",
    },
    {
      title: "Almanack of Naval Ravikant - Eric Jorgenson",
    },
    {
      title: "The Network State - Balaji Srinivasan",
    },
  ],
} as const;