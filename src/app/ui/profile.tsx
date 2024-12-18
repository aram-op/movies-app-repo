'use client';

import styles from '@/styles/ui/profile.module.scss';
import {useUser} from '@auth0/nextjs-auth0/client';
import classNames from 'classnames';
import {outfit} from '@/app/fonts';
import {redirect, useRouter} from 'next/navigation';

function Profile() {
    const {user, error, isLoading} = useUser();

    function handleLogout() {
        window.location.href = '/api/auth/logout';
    }

    return (
        <div className={styles.container}>
            {user?.picture && <img src={user.picture} width={100} height={100}/>}

            {user?.name && <div className={styles.infoItem}>
                <p className={styles.label}>Username</p>
                <p className={styles.info}>{user.nickname}</p>
            </div>}

            {user?.email && <div className={styles.infoItem}>
                <p className={styles.label}>Email</p>
                <p className={styles.info}>{user.email}</p>
            </div>}

            <button
                type={'button'}
                className={classNames([styles.logout], outfit.className)}
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
