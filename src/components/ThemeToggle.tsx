
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-10 h-10 border-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-500 shadow-md dark:shadow-primary/20"
        aria-label="Toggle theme"
      >
        <div className="h-[1.2rem] w-[1.2rem]"></div>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full w-10 h-10 border-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:scale-110 shadow-md dark:shadow-primary/20"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-700 dark:-rotate-90 dark:scale-0 text-yellow-500" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100 text-blue-300" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Light glow effect in dark mode */}
      <span className="absolute inset-0 rounded-full bg-primary/5 dark:animate-pulse opacity-0 dark:opacity-100 transition-opacity duration-500"></span>
    </Button>
  );
}
