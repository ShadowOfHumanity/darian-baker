import type { HTMLAttributes } from "react";
import type { BtTheme } from "@/components/ui/BakeThereProvider";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  theme?: BtTheme;
}
