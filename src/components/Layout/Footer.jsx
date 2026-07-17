import React from "react";
import { siteConfig, navLinks, footerStack } from "../../data";
import { NavLink } from "react-router-dom";
import { li } from "motion/react-client";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" border-t  border-border/25 mt-32    ">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* logo and social links */}
          <div className="flex flex-col gap-1">
            <div className="font-display font-bold text-2xl md:text-4xl tracking-tight">
              JA<span className="text-dark-accent">.</span>
            </div>
            <div className="font-body text-nav text-sm leading-relaxed max-w-xs">
              {siteConfig.footerDescription}
            </div>
            <div className="flex items-center gap-4 mt-2">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  target="_blank"
                  href={link.href}
                  className="text-nav hover:text-dark-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navlinks */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-widest text-muted mb-1">
              Pages
            </span>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="font-body text-sm text-nav hover:text-dark-accent transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* TechStack */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-xs uppercase tracking-widest text-muted mb-1">
              Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {footerStack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 rounded border border-border/30 text-nav"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted">
            © {year} Jatin Agrahari. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-xs text-dark-accent hover:text-accent-glow transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
