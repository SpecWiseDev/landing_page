"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const featuresDropdown = [
  {
    title: "Natural Language Testing",
    description: "Write tests in plain English, IMQA generates the code",
    href: "/features#natural-language",
  },
  {
    title: "Self-Healing Selectors",
    description: "Tests that adapt to UI changes without manual intervention",
    href: "/features#self-healing",
  },
  {
    title: "Cross-Browser Execution",
    description: "Chrome, Firefox, Safari, Edge - consistent results everywhere",
    href: "/features#cross-browser",
  },
  {
    title: "CI/CD Integration",
    description: "Seamlessly integrate with GitHub Actions, GitLab, Jenkins",
    href: "/features#ci-cd",
  },
];

const resourcesDropdown = [
  {
    title: "Documentation",
    description: "Guides and references to get started quickly",
    href: "#",
  },
  {
    title: "Blog",
    description: "Latest updates, tutorials, and best practices",
    href: "#",
  },
  {
    title: "API Reference",
    description: "Complete API documentation for developers",
    href: "#",
  },
  {
    title: "Support",
    description: "Get help from our team and community",
    href: "mailto:support@imqa.ai",
  },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(label);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { label: "Features", href: "/features", dropdown: featuresDropdown },
    { label: "Use Cases", href: "/use-cases", dropdown: null },
    { label: "Pricing", href: "/pricing", dropdown: null },
    { label: "About", href: "/about", dropdown: null },
    { label: "Enterprise", href: "/enterprise", dropdown: null },
  ];

  return (
    <>
      {/* Navigation */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-10" ref={dropdownRef}>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/im-qa-icon.svg"
                  alt="IMQA"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                <span
                  className="text-xl font-semibold"
                  style={{ color: "rgba(250, 249, 246, 0.9)" }}
                >
                  I&apos;m QA
                </span>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                    onMouseLeave={() => link.dropdown && handleMouseLeave()}
                  >
                    {link.dropdown ? (
                      <button
                        className="flex items-center gap-1.5 px-4 py-2 text-[16px] rounded-md transition-colors hover:bg-white/[0.06]"
                        style={{
                          color: "rgba(250, 249, 246, 0.9)",
                          letterSpacing: "0.00115em",
                          lineHeight: "16px",
                        }}
                      >
                        {link.label}
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-90" : ""
                          }`}
                        >
                          <path
                            d="M 8.515 6.265 L 4.765 10.015 C 4.619 10.162 4.381 10.162 4.235 10.015 C 4.088 9.869 4.088 9.631 4.235 9.485 L 7.72 6 L 4.235 2.515 C 4.088 2.369 4.088 2.131 4.235 1.985 C 4.381 1.838 4.619 1.838 4.765 1.985 L 8.515 5.735 C 8.586 5.805 8.625 5.9 8.625 6 C 8.625 6.1 8.586 6.195 8.515 6.265 Z"
                            fill="rgba(250, 249, 246, 0.5)"
                          />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center px-4 py-2 text-[16px] rounded-md transition-colors hover:bg-white/[0.06]"
                        style={{
                          color: "rgba(250, 249, 246, 0.9)",
                          letterSpacing: "0.00115em",
                          lineHeight: "16px",
                        }}
                      >
                        {link.label}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 pt-1"
                          style={{ zIndex: 100 }}
                        >
                          <div
                            className="w-[440px] rounded-lg overflow-hidden backdrop-blur-xl"
                            style={{
                              backgroundColor: "rgba(26, 26, 26, 0.55)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            <div className="p-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center justify-between px-4 py-3.5 rounded-md transition-colors hover:bg-white/[0.06]"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex-1 pr-4">
                                    <p
                                      className="text-[15px] font-medium"
                                      style={{ color: "rgba(250, 249, 246, 0.95)" }}
                                    >
                                      {item.title}
                                    </p>
                                    <p
                                      className="text-[13px] mt-0.5 leading-snug"
                                      style={{ color: "rgba(250, 249, 246, 0.5)" }}
                                    >
                                      {item.description}
                                    </p>
                                  </div>
                                  <ChevronRight
                                    className="w-4 h-4 flex-shrink-0 opacity-40"
                                    style={{ color: "rgba(250, 249, 246, 1)" }}
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="https://app.imqa.ai/auth/login"
                className="px-5 py-2.5 text-[15px] font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgb(249, 250, 245)",
                  borderRadius: "4px",
                  color: "#1a1a1a",
                }}
              >
                Run Agent
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              style={{ color: "rgba(250, 249, 246, 0.9)" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="lg:hidden py-4"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => {
                        if (link.dropdown) {
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          );
                        }
                      }}
                      className="flex items-center justify-between w-full py-2 text-left"
                      style={{ color: "rgba(250, 249, 246, 0.9)" }}
                    >
                      {link.label}
                      {link.dropdown && (
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-90" : ""
                          }`}
                        >
                          <path
                            d="M 8.515 6.265 L 4.765 10.015 C 4.619 10.162 4.381 10.162 4.235 10.015 C 4.088 9.869 4.088 9.631 4.235 9.485 L 7.72 6 L 4.235 2.515 C 4.088 2.369 4.088 2.131 4.235 1.985 C 4.381 1.838 4.619 1.838 4.765 1.985 L 8.515 5.735 C 8.586 5.805 8.625 5.9 8.625 6 C 8.625 6.1 8.586 6.195 8.515 6.265 Z"
                            fill="rgba(250, 249, 246, 0.5)"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Mobile Dropdown */}
                    {link.dropdown && activeDropdown === link.label && (
                      <div className="pl-4 py-2 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block py-2"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <p
                              className="text-[14px] font-medium"
                              style={{ color: "rgba(250, 249, 246, 0.8)" }}
                            >
                              {item.title}
                            </p>
                            <p
                              className="text-[12px]"
                              style={{ color: "rgba(250, 249, 246, 0.5)" }}
                            >
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div
                  className="flex flex-col gap-3 pt-4 mt-2"
                  style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
                >
                  <Link
                    href="https://app.imqa.ai/auth/login"
                    className="px-5 py-2.5 text-[15px] font-medium text-center"
                    style={{
                      backgroundColor: "rgb(249, 250, 245)",
                      borderRadius: "4px",
                      color: "#1a1a1a",
                    }}
                  >
                    Run Agent
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
