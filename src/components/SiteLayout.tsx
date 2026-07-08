import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logoAsset from "@/assets/deltaschool-logo.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms" },
  { to: "/data-deletion", label: "Data Deletion" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="DeltaSchool" className="h-9 w-9 rounded-md" />
            <span className="text-lg font-semibold tracking-tight text-navy">DeltaSchool</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-navy bg-secondary" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <img src={logoAsset.url} alt="DeltaSchool" className="h-9 w-9 rounded-md" />
                <span className="text-lg font-semibold">DeltaSchool</span>
              </div>
              <p className="mt-3 text-sm text-navy-foreground/70">
                School management, simplified — for admins, teachers, and parents across India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="mb-3 font-semibold text-brand">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/privacy-policy" className="text-navy-foreground/80 hover:text-brand">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-navy-foreground/80 hover:text-brand">Terms & Conditions</Link></li>
                  <li><Link to="/data-deletion" className="text-navy-foreground/80 hover:text-brand">Account & Data Deletion</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-brand">Contact</h4>
                <a
                  href="mailto:deltacorelabs@outlook.com"
                  className="text-navy-foreground/80 hover:text-brand"
                >
                  deltacorelabs@outlook.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/60">
            © {new Date().getFullYear()} DeltaSchool. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
