import axios from 'axios';
import NextAuth from 'next-auth';

import authConfig from '@/auth.config';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from '@/routes';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config: any) => {
    const { nextUrl } = config.req;
    const isLoggedIn = !!config.req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute && isLoggedIn) {
      config.headers.Authorization = `Bearer ${config.req.auth.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const { auth } = NextAuth(authConfig);

export default auth ((req) => {       
  const { nextUrl } = req;                           
  const isLoggedIn =!!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }
  
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    } else {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }
  }
  
  if (!isLoggedIn &&!isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  
  return null;
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}