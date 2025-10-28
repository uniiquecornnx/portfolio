"use client";

import BlurFade from "@/components/text/blur-fade";
import { ResumeCard } from "@/components/cards/resume-card";
import { DATA } from "@/data/resume";
import { allBlogPosts } from "@/data/blog";
import VideoPlayer from "@/components/ui/video";
import TextEffectWithExit from "@/components/headline";
import { ProjectList } from "@/components/cards/project-card";
import { HackathonCard } from "@/components/cards/hackathon-card";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  links: readonly ProjectLink[];
  description: string;
}

type ProjectsData = {
  Frontend?: Record<string, Project>;
  Backend?: Record<string, Project>;
  "Full Stack"?: Record<string, Project>;
  "Smart Contracts"?: {
    Solana?: Record<string, Project>;
    EVM?: Record<string, Project>;
  };
};

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const getAllProjects = () => {
    return DATA.projects[0] as unknown as ProjectsData;
  };

  const getAllWork = () => {
    return [...DATA.work, ...DATA.openSource];
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-2">
          <div className="flex-col flex flex-1 justify-center items-center space-y-1.5">
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none flex items-center gap-3"
            >
              <div className="font-serif italic main-text-in">
                <TextEffectWithExit />
              </div>
            </BlurFade>
          </div>
          <BlurFade
            delay={BLUR_FADE_DELAY * 2}
            className="flex justify-end gap-3 pb-4"
          >
            <span className="text-muted-foreground font-light tracking-wide text-sm italic opacity-80 hover:opacity-100 transition-opacity duration-300">
              my pronouns : building/shipping
          

            </span>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div  className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert leading-[1.5]">
          I am a {" "} 
            <span  className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
              full-stack blockchain developer, with interests in ZK, Privacy, Onchain Identities 
            </span>{" "}
            and everything that pushes the boundaries of what’s possible on-chain.  {" "} <br />
            <div className="mt-4">
            Former community, events and growth lead, now a full-time builder and researcher. I’ve   {" "}
              <span className="font-semibold hover:text-foreground/80  text-foreground">
              shipped multiple dapps 
              </span>{" "}
              won a few hackathons/bounties along the way, and started sharing   {" "}
              <span className="font-semibold hover:text-foreground/80  text-foreground">
              guided articles and research papers
              </span>{" "}
               for the community. <br /> <br /> I'm a member at{" "}
              <span className="font-semibold hover:text-foreground/80 text-foreground">
                WinPrivacy (@winprivacy), 
              </span>{" "}
              <span className="font-semibold hover:text-foreground/80 text-foreground">
              Dev3Pack, 
              </span>{" "}
              and the {" "}
              <span className="font-semibold hover:text-foreground/80 text-foreground">
              Network School.</span>
              
              
            </div><br />
            <div className="mt-4 italic"  >
              welcome to my page of everything i do.
            </div>
            
          </div>
        </BlurFade>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY}>
            <VideoPlayer src="/devisha-pfp.mp4" autoPlay={true} loop={true} />
          </BlurFade>
      <section id="projects">
        <div className="space-y-8 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Builds
                </div>
                <p className="text-muted-foreground text-sm">
                  I&apos;ve worked on a variety of projects, from{" "}
                  <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                    frontend
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                    backend
                  </span>{" "}
                  and even{" "}
                  <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                    smart contracts
                  </span>
                  . <br />
                  Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="">
              <ProjectList projects={getAllProjects()} />
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="wins" className="pt-20">
        <div className="flex min-h-0 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="justify-center flex w-32 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Articles
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
            <p className="text-muted-foreground text-sm text-center mt-2">
              Some of my blogs and articles.
            </p>
          </BlurFade>

          <div className="pt-4 flex flex-col gap-y-2 border-t border-border/40 w-full">
            {allBlogPosts
              .slice(0, 5)
              .map((post, id) => (
                <BlurFade key={post.id} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                  <HackathonCard
                    key={post.id}
                    title={post.title}
                    href={post.url || `/blog${post.slug}`}
                  />
                </BlurFade>
              ))}

            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex relative justify-center mt-4">
                
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="work" className="pt-20">
        <div className="flex min-h-0 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="justify-center flex w-42 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Work Experience
            </div>
          </BlurFade>

          <div className="flex flex-col border-t pt-2 border-border/40 w-full">
            {getAllWork().length > 0 ? (
              getAllWork().map((item: any, id: number) => (
                <BlurFade
                  key={item.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={item.company}
                    logoUrl={item.logoUrl || "/placeholder-logo.png"}
                    altText={item.company}
                    title={item.company}
                    subtitle={item.title}
                    href={item.href}
                    period={
                      item.start && item.end
                        ? `${item.start} - ${item.end || "Present"}`
                        : ""
                    }
                    description={item.description}
                    prLinks={item.prLinks}
                    isOpenSource={!!item.prLinks}
                  />
                </BlurFade>
              ))
            ) : (
              <div className="py-8 text-center text-muted-foreground text-sm italic">
                No work experience to show yet. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="wins" className="pt-20">
        <div className="flex min-h-0 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="justify-center flex w-32 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Wins
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
            <p className="text-muted-foreground text-sm text-center mt-2">
              Achievements and recognitions I've received along the way.
            </p>
          </BlurFade>

          <div className="pt-4 flex flex-col gap-y-2 border-t border-border/40 w-full">
            {Object.entries(DATA.wins)
              .slice(0, 5)
              .map(([title, data], id) => (
                <BlurFade key={title} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                  <HackathonCard
                    key={title}
                    title={title}
                    href={data.link || "#"}
                  />
                </BlurFade>
              ))}

            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              
              <div className="flex relative justify-center mt-4">
                <a
                  href="/wins"
                  className="inline-flex z-10 items-center justify-center rounded-md bg-[#b0e721] px-2 py-1 text-sm font-medium text-background shadow transition-colors hover:bg-[#b0e721]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View All Wins
                </a>
              </div>
              <br />

              
            </BlurFade>
          </div>
        </div>
      </section>
      <div className="mt-6 flex justify-center">
              <CommandPalette />
            </div>
      <section id="footer" className="pt-20">
        <Footer />
      </section>
    </main>
  );
}