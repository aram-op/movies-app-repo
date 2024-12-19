'use client';

import {useEffect} from 'react';
import PageHeading from '@/app/ui/shared/page-heading';

export default function Error({error}: {
    error: Error & { digest?: string };
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <PageHeading heading={error.message}/>
        </>
    );
}