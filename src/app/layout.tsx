import type {Metadata} from 'next';
import './globals.css';
import React from 'react';
import Sidebar from '@/app/ui/sidebar/sidebar';


export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Find your favourite movies and TV shows!',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <Sidebar/>
                {children}
            </body>
        </html>
    );
}
