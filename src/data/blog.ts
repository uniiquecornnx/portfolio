export interface BlogPost {
    id: number;
    title: string;
    publishedAt: string;
    slug: string;
    url?: string; // Optional Substack URL
  }
  
  export const allBlogPosts: BlogPost[] = [
    {
      id: 3,
      title: "The Only ZK Deep-Dive You'll Ever Need",
      publishedAt: "Oct 8, 2025",
      slug: "/the-only-zk-deep-dive-youll-ever",
      url: "https://uniiquecornnx.substack.com/p/the-only-zk-deep-dive-youll-ever", 
    },
    {
      id: 2,
      title: "ZK-SNARKS vs ZK-STARKS, Po-tay-to Po-tah-to? Not quite",
      publishedAt: "Oct 17, 2025",
      slug: "/zk-snarks-vs-zk-starks-potayto-potahto",
      url: "https://uniiquecornnx.substack.com/p/zk-snarks-vs-zk-starks-potayto-potahto", 
    },
    {
      id: 1,
      title: "A day in the life of an Ethereum transaction",
      publishedAt: "Aug 3, 2025",
      slug: "/a-day-in-the-life-of-an-ethereum",
      url: "https://uniiquecornnx.substack.com/p/a-day-in-the-life-of-an-ethereum", 
    },
  ];