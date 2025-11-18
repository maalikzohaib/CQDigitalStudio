"use client";

import type { ReactNode } from "react";
import {
  Camera,
  Clock4,
  Sparkles,
  UsersRound,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { GlowingEffect } from "./glowing-effect";

const WHY_US_CARDS = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Camera className="h-4 w-4" />,
    title: "Professional Quality",
    description:
      "Our seasoned photographers and editors bring decades of experience, ensuring every frame is polished, balanced, and color graded to perfection.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Sparkles className="h-4 w-4" />,
    title: "Creative Approach",
    description:
      "We ideate unique storyboards and shot lists for every project, blending cinematic angles with fresh compositions that grab attention instantly.",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <UsersRound className="h-4 w-4" />,
    title: "Client Satisfaction",
    description:
      "A dedicated producer guides you from concept to delivery, providing previews, feedback loops, and transparent communication at every milestone.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Customized Packages",
    description:
      "Flexible packages for weddings, brands, events, and social campaigns—tailored to your goals, budget, and delivery timelines.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Clock4 className="h-4 w-4" />,
    title: "Timely Delivery",
    description:
      "Post-production happens in-house, so you receive full galleries and edits on schedule without sacrificing detail or storytelling.",
  },
] as const;

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {WHY_US_CARDS.map((card) => (
        <GridItem key={card.title} {...card} />
      ))}
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-sans font-semibold leading-[1.375rem] tracking-[-0.04em] text-foreground text-balance md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] text-muted-foreground md:text-base md:leading-[1.375rem]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
