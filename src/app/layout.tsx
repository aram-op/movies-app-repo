import type {Metadata} from 'next';
import '../styles/globals.scss';
import React from 'react';
import Sidebar from '@/app/ui/sidebar';
import Header from '@/app/ui/header';
import {outfit} from '@/app/fonts';


export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Find your favourite movies and TV shows!',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={outfit.className}>
        <Sidebar/>
        <Header/>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
