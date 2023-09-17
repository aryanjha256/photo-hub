import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "@/components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo Hub",
  description: "Store Your Memories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            Photo Hub
            <div className="ml-auto flex items-center space-x-4">
              User Details
            </div>
          </div>
        </div>
        <div className="flex">
          <SideMenu />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
