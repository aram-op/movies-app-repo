import type {Metadata} from 'next';
import '../styles/globals.scss';
import React from 'react';
import Sidebar from '@/app/ui/sidebar';
import Header from '@/app/ui/header';


export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Find your favourite movies and TV shows!',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <Sidebar/>
                <Header/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
