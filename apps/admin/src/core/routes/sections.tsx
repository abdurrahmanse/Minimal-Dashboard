import type { RouteObject } from 'react-router';

import { Outlet } from 'react-router-dom';
import BlogPage from 'src/pages/blog';
import DashboardPage from 'src/pages/dashboard';
import ForgotPasswordPage from 'src/pages/forgot-password';
import Page404 from 'src/pages/page-not-found';
import ProductsPage from 'src/pages/products';
import SignInPage from 'src/pages/sign-in';
import SignUpPage from 'src/pages/sign-up';
import UserPage from 'src/pages/user';
import VerifyOtpPage from 'src/pages/verify-otp';
import { AuthLayout } from 'src/shared/layouts/auth';
import { DashboardLayout } from 'src/shared/layouts/dashboard';

// ----------------------------------------------------------------------

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'user', element: <UserPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <BlogPage /> },
    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },
  {
    path: 'sign-up',
    element: (
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: 'forgot-password',
    element: (
      <AuthLayout>
        <ForgotPasswordPage />
      </AuthLayout>
    ),
  },
  {
    path: 'verify-otp',
    element: (
      <AuthLayout>
        <VerifyOtpPage />
      </AuthLayout>
    ),
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];
