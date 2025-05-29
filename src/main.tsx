import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@shared/ErrorBoundary';
import MainLayout from '@layouts/MainLayout';
import './index.css';

const AboutPage = React.lazy(() => import('@pages/AboutPage'));
const ContactPage = React.lazy(() => import('@pages/ContactPage'));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

// 로딩 컴포넌트
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">페이지를 로딩 중...</span>
    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                        <h1 className="text-4xl font-bold text-blue-600">React 19 + React Router 7</h1>
                    </div>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AboutPage />
                    </Suspense>
                ),
                loader: async () => {
                    const { aboutLoader } = await import('@pages/AboutPage');
                    return aboutLoader();
                },
            },
            {
                path: "contact",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <ContactPage />
                    </Suspense>
                ),
                action: async ({ request }) => {
                    const { contactAction } = await import('@pages/ContactPage');
                    return contactAction({ request });
                },
            },
        ],
        errorElement: (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h1 className="text-2xl font-bold text-gray-800">오류가 발생했습니다</h1>
                <p className="text-gray-600 mt-2">페이지를 새로고침해 주세요.</p>
            </div>
        ),
    },
    {
        path: "*",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <div className="flex flex-col items-center justify-center min-h-[50vh]">
                        <h1 className="text-2xl font-bold text-gray-800">404 - 페이지를 찾을 수 없습니다</h1>
                    </div>
                ),
            },
        ],
    },
]);

const container = document.getElementById('root')!;

// HMR 환경에서 root 중복 생성 방지
let root = (globalThis as any).__vite_root;
if (!root) {
    root = ReactDOM.createRoot(container);
    (globalThis as any).__vite_root = root;
}

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ErrorBoundary>
    </React.StrictMode>
);
