import { Inter } from "next/font/google";
import "./globals.css";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar className="flex justify-center p-4 bg-gray-100">
          <MenubarMenu>
            <MenubarTrigger>Navigation</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <Link href="/">Home</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </MenubarItem>
              <MenubarItem asChild>
                <Link href="/settings">Settings</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {children}
      </body>
    </html>
  );
}
