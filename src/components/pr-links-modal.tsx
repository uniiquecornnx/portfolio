
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  CircleDotIcon,
  ExternalLinkIcon,
  GitPullRequestIcon,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface PRLink {
  url: string;
  type?: "pr" | "issue";
  title?: string;
}

interface PRLinksModalProps {
  links: string[] | PRLink[];
  projectName: string;
  className?: string;
}

export function PRLinksModal({
  links,
  projectName,
  className,
}: PRLinksModalProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const normalizedLinks = links.map((link) => {
    if (typeof link === "string") {
      const isPR = link.includes("/pull/");
      return {
        url: link || "#",
        type: isPR ? "pr" : "issue",
        title: link
          ? `${isPR ? "PR" : "Issue"} #${link.split("/").pop()}`
          : "Contribution",
      } as PRLink;
    }
    return link;
  });

  const prCount = normalizedLinks.filter(
    (link) =>
      typeof link === "object" &&
      link.type === "pr" &&
      link.url &&
      link.url !== "#"
  ).length;

  const issueCount = normalizedLinks.filter(
    (link) =>
      typeof link === "object" &&
      link.type === "issue" &&
      link.url &&
      link.url !== "#"
  ).length;

  const hasValidLinks = normalizedLinks.some(
    (link) => link.url && link.url !== "#"
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <>
      {hasValidLinks && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          className={cn(
            "h-8 gap-1.5 text-xs rounded-full border-border/60 hover:bg-muted/80 transition-all",
            className
          )}
        >
          <span className="flex items-center gap-1">
            <GitPullRequestIcon className="size-3.5" />{" "}
            {normalizedLinks.filter((l) => l.url && l.url !== "#").length}{" "}
            Contributions
          </span>
        </Button>
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                  onClick={() => setOpen(false)}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-[101] w-[95vw] max-w-md p-6 border border-border/30 bg-background/95 shadow-xl backdrop-blur-sm sm:rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute right-4 top-4">
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-full p-1.5 opacity-70 transition-all hover:bg-muted/80 hover:opacity-100 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </button>
                  </div>

                  <div className="flex flex-col space-y-1.5 text-center mb-4">
                    <h2 className="text-lg font-semibold leading-none tracking-tight">
                      Contributions to {projectName}
                    </h2>
                  </div>

                  {hasValidLinks ? (
                    <>
                      <div className="flex justify-center gap-3 mb-4">
                        {prCount > 0 && (
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1.5 px-2.5 py-1"
                          >
                            <GitPullRequestIcon className="size-3.5" />
                            <span>{prCount} PRs</span>
                          </Badge>
                        )}
                        {issueCount > 0 && (
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1.5 px-2.5 py-1"
                          >
                            <CircleDotIcon className="size-3.5" />
                            <span>{issueCount} Issues</span>
                          </Badge>
                        )}
                      </div>

                      <div className="max-h-[60vh] overflow-y-auto pr-1 space-y-2">
                        {normalizedLinks
                          .filter((link) => link.url && link.url !== "#")
                          .map((link, index) => (
                            <motion.a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.15,
                                delay: index * 0.05,
                              }}
                            >
                              <div className="flex items-center gap-2">
                                {link.type === "pr" ? (
                                  <GitPullRequestIcon className="size-4 text-green-500" />
                                ) : (
                                  <CircleDotIcon className="size-4 text-blue-500" />
                                )}
                                <span className="text-sm font-medium truncate max-w-[200px]">
                                  {link.title || link.url.split("/").pop()}
                                </span>
                              </div>
                              <ExternalLinkIcon className="size-3.5 text-muted-foreground" />
                            </motion.a>
                          ))}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
