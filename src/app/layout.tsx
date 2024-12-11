import type {Metadata} from 'next';
import './globals.css';
import React from 'react';


export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Find your favourite movies and TV shows!',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
