import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"; // use relative import to avoid alias issues

export const metadata: Metadata = {
  title: "EarthWise — Sustainable swaps, made simple.",
  description: "Find eco-friendly alternatives with transparent scoring.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

