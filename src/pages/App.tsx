import { Routes, Route } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route
                    path="/"
                    element={
                        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                            <h1 className="text-4xl font-bold text-primary-600">React + TypeScript + Vite</h1>
                            <p className="text-gray-600">
                                시작하려면 <code className="text-sm font-mono bg-gray-100 p-1 rounded">src/pages</code>
                                에 페이지를 추가하세요
                            </p>
                        </div>
                    }
                />
                <Route
                    path="*"
                    element={
                        <div className="flex flex-col items-center justify-center min-h-[50vh]">
                            <h1 className="text-2xl font-bold text-gray-800">404 - 페이지를 찾을 수 없습니다</h1>
                        </div>
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;
