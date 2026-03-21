"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="text-sm text-muted">---</span>;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-sm text-muted underline underline-offset-3 decoration-1 hover:decoration-2 cursor-pointer"
    >
      {resolvedTheme === "dark" ? "light" : "dark"}
    </button>
  );
}
