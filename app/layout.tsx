import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['900'], // Optional: list the weights you need
  display: 'swap',        // Optional: improves performance
});

export const metadata: Metadata = {
  title: "Inspire Ink",
  description: "A site for users to write blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        {children}
      </body>
    </html>
  );
}
