"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PRLinksModal } from "../pr-links-modal";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  period: string;
  description?: string;
  prLinks?: string[];
  isOpenSource?: boolean;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
  prLinks,
  isOpenSource,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="relative my-2">
      <Link
        href={href || "#"}
        className="block cursor-pointer"
        onClick={handleClick}
      >
        <Card className="flex">
          <div className="flex-none">
            {logoUrl && (
              <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain"
                />
                <AvatarFallback>{altText[0]}</AvatarFallback>
              </Avatar>
            )}
          </div>
          <div className="flex-grow ml-4 items-center flex-col group">
            <CardHeader>
              <div className="flex items-center mt-1.5 justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            </CardHeader>
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )}
          </div>
        </Card>
      </Link>

      {isOpenSource && prLinks && !isExpanded && (
        <div className="absolute right-3 bottom-3 z-10">
          <PRLinksModal
            links={prLinks}
            projectName={title}
            className="bg-background/90 backdrop-blur-sm shadow-sm"
          />
        </div>
      )}
    </div>
  );
};