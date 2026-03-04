import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "maphoto",
  description: "Let's user input a photo, grabs the metadata and makes a beautiful portrait of the photo with a pin drop on a map of the photo location underneath

APPROVED REQUIREMENTS:
- [must] [must] Authentication: Users can sign up, log in, and log out
- [must] [must] Core CRUD: Users can create, view, edit, and delete the main objects for: maphoto
- [must] [must] Billing: Stripe checkout + subscription gating for paid features
- [must] [should] Onboarding: First-run setup, empty states, and sample data
- [must] [should] Beautiful UI: Consistent components, spacing, typography, and responsive layout
- [must] [could] Admin / Settings: Profile, preferences, and basic usage analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
