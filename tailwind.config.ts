import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontFamily: {
      sans: [
        ["var(--font-inter)", ...defaultTheme.fontFamily.sans].join(", "),
        {
          fontFeatureSettings: '"ss03","cv02","cv11"',
        },
      ],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
