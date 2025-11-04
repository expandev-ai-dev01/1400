/**
 * @router AppRouter
 * @summary Main application routing configuration
 * @description Defines all application routes with lazy loading
 * @type router-configuration
 * @category navigation
 */

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/pages/layouts/RootLayout';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

const HomePage = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/About'));
const ClassesPage = lazy(() => import('@/pages/Classes'));
const MethodologyPage = lazy(() => import('@/pages/Methodology'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="turmas" element={<ClassesPage />} />
          <Route path="metodologia" element={<MethodologyPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
