"use client";

import { DATA } from "@/data/resume";
import BlurFade from "@/components/text/blur-fade";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookCard } from "@/components/cards/book-card";

const BLUR_FADE_DELAY = 0.04;

export default function BookshelfPage() {

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 max-w-2xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-2xl font-bold tracking-tight">Bookshelf</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <p className="text-muted-foreground">
          A collection of books I've read.
        </p>
      </BlurFade>

      <div className={cn(
        "flex flex-col gap-y-2 border-t border-border/40 w-full",
      )}>
        {DATA.books.length > 0 ? (
          DATA.books.map(({ title }, id, array) => (
            <BlurFade key={title} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <BookCard
                key={title}
                title={title}
                isLastBook={id === array.length - 1}
              />
            </BlurFade>
          ))
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="text-center text-muted-foreground py-8">
              Coming Soon. <br />
              // i speak less, work more.  :p
            </p>
          </BlurFade>
        )}
      </div>
    </main>
  );
}