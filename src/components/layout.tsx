"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  const customTheme = {
    button: {
      defaultProps: {
        className: "bg-orange-700",
      }
    }
  }
  return <ThemeProvider value={customTheme}>{children}</ThemeProvider>;
}

export default Layout;
