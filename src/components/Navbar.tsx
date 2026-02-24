import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <AlembicIcon />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Open<span className="text-gradient-red">Distil</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start Distilling
          </a>
        </div>
      </div>
    </nav>
  );
};

const AlembicIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 4H18M11 4V10L5 22C4.5 23 5.2 24 6.3 24H21.7C22.8 24 23.5 23 23 22L17 10V4"
      stroke="hsl(0 72% 51%)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 18H20"
      stroke="hsl(0 72% 51% / 0.5)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="12" cy="20" r="1" fill="hsl(0 72% 51% / 0.7)" />
    <circle cx="16" cy="21" r="0.7" fill="hsl(0 72% 51% / 0.5)" />
  </svg>
);

export default Navbar;
