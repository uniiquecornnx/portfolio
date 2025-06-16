import { Icons } from "@/components/icons";
import { Book, HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";
import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Sarthak Shah",
  initials: "SS",
  url: "https://www.0xsarthak.xyz/",
  description: "I Code.",
  summary: `
I'm a full-stack developer with an experience of working with various languages and blockchains.

Previously, I've built various projects and won a global hackathons. I enjoy contributing to open source projects. I'm also a member at WinPrivacy(a research community)& .

Beyond code, I'm passionate about dance, playing billiards and am stepping out of my comfort zone to create both technical and non-technical content. I'm love traveling, and enjoy endless talks on finance.
`,
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/wins", icon: TrophyIcon, label: "Wins" },
    { href: "/bookshelf", icon: Book, label: "Bookshelf" },
  ],
  contact: {
    email: "notsarthakshah@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Not-Sarthak/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarthak-shah-49267b224/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0xSarthak13",
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
      company: "Gasyard",
      href: "https://gasyard.fi/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/work/gasyard.png",
      start: "January 2025",
      end: "May 2025",
      description:
        "Built backend with Fastify, Docker, and PostgreSQL that handled $570K in transaction volume and processed 120K requests. Implemented cross-chain bridge routes for Hyperliquid, Movement, Monad (Testnet), and other EVM/Non-EVM integrations in Testnet and Mainnet environments. Created Gasyard Bridge Explorer using Next.js, TypeScript, Tanstack Query, Zustand, and Tailwind CSS for transaction tracking. Developed Fuelbae Agent tool for executing DeFi actions across protocols.",
    },
    {
      company: "0rbit",
      href: "https://www.0rbit.co/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/work/0rbit.jpg",
      start: "March 2024",
      end: "December 2024",
      description:
        "Developed multiple smart contracts in Lua for the AO Ecosystem, while battle-testing 0rbit's core infrastructure and contributing to the core node. I also integrated frontend tutorials using AOConnect, showcasing 0rbit's capabilities in blog posts. Beyond code, I enhanced the documentation, converted Figma designs into functional UI components, and contributed to the website development. Additionally, I handled social media content and authored blogs and technical documentation, ensuring a better developer experience.",
    },
    {
      company: "Pyano (now Bytebell AI)",
      href: "",
      location: "Remote",
      title: "Software Developer Intern (Part-Time)",
      logoUrl: "/work/bytebell.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "Developed a complete desktop application using Electron.js, integrating multiple LLM API endpoints into the frontend. Successfully deployed the stable release through Amazon S3 and GitHub Releases, ensuring seamless access for users.",
    },
    {
      company: "D2Clytics",
      href: "",
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/work/d2clytics.jpg",
      start: "January 2024",
      end: "April 2024",
      description:
        "Developed over 35 charts using various libraries with React.js and TailwindCSS. I led the end-to-end state management process and converted more than 30 pages Figma design into functional code.",
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
    "Superteam Security Dashboard - 1st Place": {
      link: "",
      type: "hackathon",
    },
    "Fellow @Wormhole India": {
      link: "",
      type: "title",
    },
    "Based Builder of the Year '24": {
      link: "",
      type: "title",
    },
    "Member @SuperteamIn": {
      link: "",
      type: "title",
    },
    "Player @callusfbi": {
      link: "",
      type: "title",
    },
    "ETHIndia '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Onchain AI Fellowship - by @callusfbi - Selected": {
      link: "",
      type: "hackathon",
    },
    "EthBangkok '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Encode Club BTC Hackathon - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "Funding the Commons '24 Bangkok - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Based India '24 - Winner List": {
      link: "",
      type: "hackathon",
    },
    "Colosseum Radar Hackathon - 2x Bounties": {
      link: "",
      type: "hackathon",
    },
    "100xDevs Hackathon - Bounty": {
      link: "",
      type: "hackathon",
    },
    "Stellar Builders' Residency - 1st Place": {
      link: "",
      type: "hackathon",
    },
    "Stellar IndiaThon '24 - Infra Track": {
      link: "",
      type: "hackathon",
    },
    "NuvYuva Tinkerthon '24 - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "ITMBU Hackathon '24 - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "HackTheLeague '24 - 2x Bounties": {
      link: "",
      type: "hackathon",
    },
    "Arweave HackerHouse '1 - Runner Up": {
      link: "",
      type: "hackathon",
    },
  },
  books: [
    {
      title: "Think and Grow Rich - Napoleon Hill",
    },
    {
      title: "Before you Start Up - Pankaj Goyal",
    },
    {
      title: "Zero to One - Peter Thiel",
    },
    {
      title: "The 5 AM Club - Robin Sharma",
    },
    {
      title: "The Network State - Balaji Srinivasan",
    },
  ],
} as const;