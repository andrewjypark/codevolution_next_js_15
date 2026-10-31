"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// A static list of the nav links shared by every page inside this route
// group. Each entry just needs a display name and the href to link to -
// adding a new auth page later (e.g. "Reset Password") means adding one
// object here, not touching the JSX below.
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

// (auth) is a Next.js "route group" - the parentheses mean the folder name
// is NOT part of the URL. So app/(auth)/login/page.tsx still renders at
// /login, not /auth/login. Route groups exist purely so you can give a set
// of routes their own shared layout.tsx (this file) without that grouping
// leaking into the URL structure.
//
// Because this is a layout, Next.js automatically wraps every page inside
// (auth) - /register, /login, /forgot-password - with whatever this
// component renders, passing that page's own content in as `children`.
//
// This layout needs "use client" (top of file) because it calls
// usePathname() below - that hook reads the current URL and has to
// re-run on every client-side navigation, which only works in a Client
// Component. A plain Server Component only ever renders once, so it has
// no way to react to the URL changing after the first render.
export default function AuthLayout({
  children,
}: {
  // `children` is typed as React.ReactNode because it can be anything
  // renderable: the matched page's JSX, plain text, multiple elements, etc.
  children: React.ReactNode;
}) {
  // The current URL path (e.g. "/login"), kept in sync automatically as
  // the user navigates between the auth pages.
  const pathname = usePathname();

  return (
    <div>
      {/* Build one <Link> per entry in navLinks instead of hand-writing
          three separate <Link> tags - keeps the markup in sync with the
          data above automatically. */}
      {navLinks.map((link) => {
        // True when this link should be shown as the active one. Two ways
        // that can happen:
        //  1. `pathname === link.href` - an exact match, e.g. visiting
        //     /login makes isActive true for "Login" and false for
        //     "Register"/"Forgot Password".
        //  2. `pathname.startsWith(link.href)` - also treat a *nested*
        //     route as active, e.g. a link to "/login" would stay active
        //     on "/login/help" too, not just on "/login" exactly.
        // The `&& link.href !== "/"` on the startsWith check guards against
        // a footgun: every pathname starts with "/", so without excluding
        // it, a link pointing at "/" would match startsWith() on every
        // single page and show as "active" everywhere. Excluding "/" means
        // that link can only ever go active through the exact-match check
        // above instead.
        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

        return (
          // `key` has to be unique per item in a list so React can track
          // which DOM node is which across re-renders; link.name works
          // here since every nav link's name is distinct.
          //
          // className can only ever hold the NAME of a CSS class - never a
          // raw custom-property name like "--ap-...". A token only does
          // anything inside var(...) on an actual CSS declaration, so
          // these two states are defined as real classes in globals.css
          // (.ap_auth_nav_link_active / .ap_auth_nav_link_inactive), each
          // wrapping its token in var(...) there, and this just picks
          // which class NAME applies.
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "ap_auth_nav_link_active" : "ap_auth_nav_link_inactive"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {/* This is where the actual matched page (e.g. the Login form)
          gets rendered, below the shared nav links above. */}
      {children}
    </div>
  );
}
