'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <div>
                <img src={user.picture ? user.picture : undefined} alt={user.name ? user.name : undefined} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
}