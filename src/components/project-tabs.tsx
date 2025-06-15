"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

interface NestedTabsProps {
  parentTabs: string[];
  activeParentTab: string;
  onParentTabChange: (tab: string) => void;
  childTabs?: string[];
  activeChildTab?: string;
  onChildTabChange?: (tab: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div className={cn("flex space-x-1", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "relative px-3 py-1.5 text-sm font-medium transition-colors",
            activeTab === tab
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-muted rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative capitalize">{tab}</span>
        </button>
      ))}
    </div>
  );
}

export function NestedTabs({
  parentTabs,
  activeParentTab,
  onParentTabChange,
  childTabs,
  activeChildTab,
  onChildTabChange,
  className,
}: NestedTabsProps) {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <Tabs
        tabs={parentTabs}
        activeTab={activeParentTab}
        onTabChange={onParentTabChange}
      />
      {childTabs && activeChildTab && onChildTabChange && (
        <div className="flex justify-center w-full">
          <Tabs
            tabs={childTabs}
            activeTab={activeChildTab}
            onTabChange={onChildTabChange}
            className="w-auto"
          />
        </div>
      )}
    </div>
  );
} 