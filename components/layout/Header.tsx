"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TrackedLink from "@/components/analytics/TrackedLink";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    {
      name: "Research",
      href: "/research-&-innovation",
      children: [
        { name: "Research Areas", href: "/research-&-innovation" },
        { name: "Publications", href: "/research-&-innovation#publications" },
        { name: "Innovation", href: "/research-&-innovation#innovation" },
      ],
    },
  ];

  const quickLinks = [
    { name: "Portal", href: "https://www.gu.edu.lb/portal" },
    { name: "Library", href: "https://www.gu.edu.lb/library" },
    { name: "Webmail", href: "https://mail.gu.edu.lb" },
    { name: "Job Board", href: "https://www.gu.edu.lb/careers" },
    { name: "SIS", href: "https://sis.gu.edu.lb" },
  ];

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur transition-all duration-300",
        isScrolled && "scrolled shadow-md"
      )}
    >
      <div
        className={cn(
          "header-shell transition-all duration-300",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        <Link href="/" className="logo-link logo-wrapper flex-shrink-0" aria-label="Global University home">
          <Image
            src={isScrolled ? "/logo.png" : "/GU-White-Logo.png"}
            alt="Global University"
            width={160}
            height={48}
            className={cn("logo-image", isScrolled && "logo-image-scrolled")}
            priority
          />
          <span className="sr-only">Global University</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-12 lg:ml-auto">
          <div className="nav-links flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="absolute left-0 mt-2 w-56 rounded-md border border-border bg-background shadow-lg"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="nav-actions flex items-center gap-3 border-l border-border/60 pl-6">
            <Button variant="outline" size="sm" className="px-5 secondary-button" asChild>
              <TrackedLink
                href="/admissions/apply"
                eventName="InitiateCheckout"
                eventParameters={{ content_name: "header_apply_cta", content_category: "admissions" }}
              >
                Apply
              </TrackedLink>
            </Button>
            <Button size="sm" className="px-5" asChild>
              <Link href="/admissions">Info</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background/95 shadow-lg backdrop-blur lg:hidden">
          <div className="container-shell space-y-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between text-base font-medium text-foreground"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-border flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <TrackedLink
                  href="/admissions/apply"
                  eventName="InitiateCheckout"
                  eventParameters={{ content_name: "header_apply_cta", content_category: "admissions" }}
                >
                  Apply
                </TrackedLink>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <Link href="/admissions">Info</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

