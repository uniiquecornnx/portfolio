"use client";

import { Card, CardHeader } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  isLastBook?: boolean;
  status?: string;
}

export const BookCard = ({ title, isLastBook = false, status }: BookCardProps) => {
  return (
      <div className="cursor-pointer">
        <Card className="flex">
            <CardHeader>
                <h3 className="inline-flex items-center text-foreground/50 hover:text-foreground transition-colors justify-center font-semibold leading-none text-xs sm:text-sm">
                  - {title}
                  {status === "currently reading" && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-green-500/10 text-green-500 rounded-md font-medium">
                      Currently Reading
                    </span>
                  )}
                </h3>
            </CardHeader>
        </Card>
      </div>
  );
};