export interface BlogPost {
    id: number;
    title: string;
    publishedAt: string;
    slug: string;
  }
  
  export const allBlogPosts: BlogPost[] = [
    {
      id: 3,
      title: "The In(Complete) Guide to Jito",
      publishedAt: "Mar 10, 2025",
      slug: "/the-incomplete-guide-to-jito",
    },
    {
      id: 2,
      title: "tcp/ip life",
      publishedAt: "Feb 25, 2025",
      slug: "/tcpip-life",
    },
    {
      id: 1,
      title: "Engineering Onchain AI Agents",
      publishedAt: "Dec 17, 2024",
      slug: "/onchain-ai-agents",
    },
  ];