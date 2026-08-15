import type { HTMLAttributes } from "react";
import type { BtTheme } from "@/components/ui/BakeThereProvider";

export type SeparatorOrientation = "horizontal" | "vertical";

export interface SeparatorProps extends HTMLAttributes<HTMLElement> {
  orientation?: SeparatorOrientation;
  theme?: BtTheme;
}
