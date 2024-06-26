import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/Link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Library Management App Lab",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <header>
        <nav>
          <link href="/">Home</link>
          <link href="/Management"></link>Manage Library</link>
          <link href="/about"></link>
        </nav>
      </header>
      {Children}
      <footer>Footer Footer</footer>
    </html>
  );
}

