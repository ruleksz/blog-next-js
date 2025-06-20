import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "Belajar Next.js",
  description: "Next.js project menggunakan JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-6 font-sans bg-gray-50">
        <nav className="mb-6 flex gap-4 border-b pb-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
