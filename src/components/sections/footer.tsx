"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:hello@imqa.ai" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        backgroundColor: "#0f0f0f",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/im-qa-icon.svg"
                alt="IMQA"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span
                className="text-lg font-semibold"
                style={{ color: "rgba(250, 249, 246, 0.9)" }}
              >
                I&apos;m QA
              </span>
            </Link>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(250, 249, 246, 0.5)" }}
            >
              The AI that tests your code
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/imqa-ai"
                className="transition-colors"
                style={{ color: "rgba(250, 249, 246, 0.5)" }}
              >
                <Github className="h-5 w-5 hover:text-[#d4a574]" />
              </Link>
              <Link
                href="https://twitter.com/imqa_ai"
                className="transition-colors"
                style={{ color: "rgba(250, 249, 246, 0.5)" }}
              >
                <Twitter className="h-5 w-5 hover:text-[#d4a574]" />
              </Link>
              <Link
                href="https://linkedin.com/company/imqa-ai"
                className="transition-colors"
                style={{ color: "rgba(250, 249, 246, 0.5)" }}
              >
                <Linkedin className="h-5 w-5 hover:text-[#d4a574]" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="font-semibold mb-4 text-sm"
                style={{ color: "rgba(250, 249, 246, 0.9)" }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[#d4a574]"
                      style={{ color: "rgba(250, 249, 246, 0.5)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <p className="text-sm" style={{ color: "rgba(250, 249, 246, 0.5)" }}>
            © 2026 I&apos;m QA. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#d4a574" }}
            />
            <span
              className="text-sm"
              style={{ color: "rgba(250, 249, 246, 0.5)" }}
            >
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
