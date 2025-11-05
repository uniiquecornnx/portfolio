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
        url: "https://www.canva.com/design/DAGfYvk80nY/1S7kfFIuHwMbNpiNESPFXw/edit?utm_content=DAGfYvk80nY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
      company: "rLoop",
      href: "https://www.rloop.org/",
      location: "Remote",
      title: "Developer Relations",
      logoUrl: "/work/rloop.png",
      start: "July 2025",
      end: "October 2025",
      description:
        "Bridged the gap between developers and the platform writing clear documentation, building technical demos, and onboarding new developers to our ecosystem. I organized community events, workshops, and hackathons to drive engagement, gather feedback, and help devs integrate GPU resources seamlessly into their projects. My role blends technical advocacy, education, and community building to grow and support the developer ecosystem.",
    },
    {
      company: "Hashed Emergent",
      href: "https://www.hashedem.com/",
      location: "Remote",
      title: "Events and BD Manager",
      logoUrl: "/work/hashedEM.png",
      start: "January 2025",
      end: "May 2025",
      description:
        "I was a part of their Growth team, focusing majorly on the KOL event management and BD, helping bring flagship events like Indian Blockchain Week (IBW2024) to life. I handled everything from planning and promotions to onboarding creators. From packed panels to after-hours meetups, I focused on creating experiences that helped people connect, collaborate, and grow in the space.",
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
        "I worked on scaling developer and community engagement across the globe — from South America and Africa to the SEA region, Thailand, and Europe. My role involved hosting both virtual and IRL events to onboard developers, showcase the Capx ecosystem, and build long-term relationships with builders. I also led developer onboarding activations, helping new devs get hands-on with Capx tools and integrations while ensuring their experience felt seamless and collaborative. Whether it was running global hackathons or intimate community sessions, I focused on turning events into entry points for real adoption and developer growth.",
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
        "I worked closely with creators and KOLs across some of the most active crypto regions including India, Dubai, Singapore, Nigeria, and LATAM. My role focused on building and nurturing relationships with key voices in the space, helping with the brand collaborations. Curated sheets for domain specific KOLs, hunting for the rates and prices of the KOLs to help our clients grow their community",
    },
    {
      company: "Algorand",
      href: "",
      location: "Remote",
      title: "Regional Growth and Communtiy manager",
      logoUrl: "/work/algorand.png",
      start: "January 2024",
      end: "December 2024",
      description: "I started a blockchain club in my university with almost 80 active members to help them explore and build on the Algorand ecosystem. I led workshops and weekly sessions with Algorand devs, helping students understand how to develop real-world projects on-chain. I handled all the event operations from planning and outreach to execution for hackathons, dev meetups, and other blockchain events on campus."
    },
  ],
  openSource: [],
  projects: [
    {
      Frontend: {
        "Null-ID": {
          id: 1,
          links: [
            
            {
              type: "Source",
              href: "https://github.com/cadalt0/NULLID-ZKVERIFY",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Null-ID is a zero-knowledge proof based identity verification system for Web3, built on zkVerify, that helps users verify their identity without revealing any personal information",
        },
        "Kazi Pay": {
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
          links: [
            
            {
              type: "Source",
              href: "https://github.com/uniiquecornnx/snake-game",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A snake game with a 90s vibe built as a farcaster mini-app",
        },
        "Chat-and-Predict": {
          id: 6,
          links: [
            {
              type: "Source",
              href: "https://github.com/uniiquecornnx/chat-and-predict", 
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Chat and Predict is an AI-powered application for real-time chat interactions and predictive analytics.",
        },
      },
      Backend: {
        "Beat-Bera": {
          id: 7,
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
    "Null-ID - 2nd place winner": {
      link: "https://x.com/phalanetwork/status/1972795647796588675?s=46",
      type: "hackathon",
    },
    "XRP Ledger APEX Hackathon - Bounty winner": {
      link: "https://x.com/_devisha/status/1932164927298662630",
      type: "hackathon",
    },
    "Ethereum Devcon Scholarship Winner": {
      link: "https://x.com/_devisha/status/1983634821462335781",
      type: "scholarship",
    },
    "Aptos Winter School - Finalist": {
      link: "",
      type: "hackathon",
    },
    "Superteam earn - 2x bounties": {
      link: "",
      type: "hackathon",
    },
    "Smart India Hackathon'24 - Finalist": {
      link: "",
      type: "hackathon",
    },
    "Dev3Pack - Member": {
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
    {
      title: "Make Something Wonderful - Steve Jobs",
    },
    {
      title: "Antifragile - Nassim Nicholas Taleb",
      status: "currently reading",
    },
    {
      title: "Skin in the Game - Nassim Nicholas Taleb",
    },
    {
      title: "The Beginning of Infinity - David Deutsch",
    },
  ],
} as const;