export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/**
 * Restructured from the template's demo-switcher menu (which linked to
 * duplicate layout variants like "Courses with sidebar" / "Course details 2"
 * / "Blog standard" / "Sign in") into the canonical route set decided in
 * NEXTJS_MIGRATION.md Phase 0.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Shop", href: "/shop" },
      { label: "Cart", href: "/cart" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Checkout", href: "/checkout" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "tji-facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "tji-instagram" },
  { label: "X", href: "https://x.com", icon: "tji-x-twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "tji-linkedin" },
];
