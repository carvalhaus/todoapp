import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/context/userContext";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnDay",
  description: "Keep focus on want it is important",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
        <UserProvider>{children}</UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
