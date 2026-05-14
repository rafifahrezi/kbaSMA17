import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./../../components/ui/button";
import { cn } from "./../../lib/utils";

export function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/pengurus", label: "Pengurus" },
    { href: "/kegiatan", label: "Kegiatan" },
    { href: "/anggota", label: "Anggota" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <img src="./images/logo.png" alt="KBA17 Logo" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-xl font-bold text-primary-foreground shadow-inner" />

              <span className="hidden font-display text-lg font-bold tracking-wide sm:block">
                KBA17
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>

              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-2 border-b bg-background shadow-lg md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  pathname === link.href
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}