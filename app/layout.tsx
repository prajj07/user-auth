"use client";

import './globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import { SessionProvider } from "next-auth/react";
import store from '@/store';

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ReduxProvider store={store}>
            <Menubar className="flex justify-center p-4 bg-gray-100 space-x-4">
              <MenubarMenu>
                <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger><Link href="/dashboard">Dashboard</Link></MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger><Link href="/settings">Settings</Link></MenubarTrigger>
              </MenubarMenu>
            </Menubar>
            {children}
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}