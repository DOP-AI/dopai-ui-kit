import { colors } from "../tokens/colors";
import { spacing } from "../tokens/spacing";
import { typography } from "../tokens/typography";

export const operationsCenterTheme = {
  colors,
  spacing,
  typography,

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },

  shadows: {
    panel: "0 4px 20px rgba(0,0,0,0.25)",
    elevated: "0 8px 32px rgba(0,0,0,0.35)",
  },

  transitions: {
    fast: "120ms ease",
    normal: "220ms ease",
    slow: "420ms ease",
  },
} as const;

export type OperationsCenterTheme =
  typeof operationsCenterTheme;
