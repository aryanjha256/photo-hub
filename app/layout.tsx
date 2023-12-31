import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "@/components/SideMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import Link from "next/link";
import cloudinary from "cloudinary";
import { Folder } from "./albums/page";
import Image from "next/image";
import "@/lib/connect";

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
            <Image
              src="/logo.svg"
              width="32"
              height="32"
              alt="icon of photo hub app"
            />
            <span className="px-4">Photo Hub</span>

            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex">
          <SideMenu />
          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
