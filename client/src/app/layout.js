import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onday",
  description: "Keep focus on want it is important",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
        {children}
      </body>
    </html>
  );
}
