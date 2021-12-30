import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { setUserCookie } from '@lib/auth';

const middleware = (req: NextRequest, env: NextFetchEvent) => {
  console.log('auth check middleware');
  return setUserCookie(req, NextResponse.next());
}

export default middleware;
