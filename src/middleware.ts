import {withMiddlewareAuthRequired} from '@auth0/nextjs-auth0/edge';
import {NextResponse} from 'next/server';

export default withMiddlewareAuthRequired(async () => {
    return NextResponse.next();
});