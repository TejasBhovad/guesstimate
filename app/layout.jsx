import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ContextProvider from "./context/context-wrapper";
import AuthProvider from "./components/AuthProvider";
import "./globals.css";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guesstimate",
  description: "Higher or lower game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ContextProvider>
            <Navbar />
            <main className="w-full h-full halftone pt-16">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
