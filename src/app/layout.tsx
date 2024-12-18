import type {Metadata} from 'next';
import '../styles/globals.scss';
import React from 'react';
import Sidebar from '@/app/ui/sidebar';
import Header from '@/app/ui/header';
import {outfit} from '@/app/fonts';
import {UserProvider} from '@auth0/nextjs-auth0/client';


export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Find your favourite movies and TV shows!',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <UserProvider>
            <body className={outfit.className}>
            <Sidebar/>
            <Header/>
            <main>
                {children}
            </main>
            </body>
        </UserProvider>

        </html>
    );
}
