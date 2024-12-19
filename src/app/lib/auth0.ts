import { initAuth0 } from '@auth0/nextjs-auth0';

export const auth0 = initAuth0({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    redirectUri: process.env.REDIRECT_URI,
    postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
    session: {
        //@ts-expect-error ignore
        cookieLifetime: 60 * 60 * 24,
        storeIdToken: false,
        storeAccessToken: false,
        storeRefreshToken: false,
        cookieSecure: process.env.NODE_ENV === 'production',
    },
});
