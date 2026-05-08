export const colors = {
  background: {
    primary: "#0B0F14",
    secondary: "#121821",
    elevated: "#1A2230",
  },

  text: {
    primary: "#F5F7FA",
    secondary: "#B8C0CC",
    muted: "#7D8794",
  },

  escalation: {
    green: "#1F7A4D",
    yellow: "#C7A640",
    orange: "#D97A2B",
    red: "#B44545",
  },

  telemetry: {
    blue: "#3A6EA5",
  },

  governance: {
    gold: "#A88C3F",
  },

  transparency: {
    teal: "#2F8F83",
  },

  border: {
    subtle: "#273142",
    strong: "#3A475C",
  },
} as const;

export type ColorTokens = typeof colors;
