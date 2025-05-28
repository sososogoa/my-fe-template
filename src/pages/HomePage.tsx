import { useAuthStore } from '@/store/useAuthStore';

const HomePage = () => {
    const { isAuthenticated, user } = useAuthStore();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary-600 mb-6">환영합니다!</h1>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {isAuthenticated ? `${user?.name}님, 안녕하세요!` : '시작하기'}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        이 템플릿은 React, TypeScript, Vite를 기반으로 구축되었으며, 다음과 같은 기능들을 포함하고
                        있습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Zustand를 이용한 상태 관리</li>
                        <li>TailwindCSS를 이용한 스타일링</li>
                        <li>React Router를 이용한 라우팅</li>
                        <li>TypeScript를 이용한 타입 안정성</li>
                        <li>Vitest를 이용한 테스트</li>
                    </ul>
                </div>

                {!isAuthenticated && (
                    <div className="flex gap-4">
                        <button className="btn btn-primary">로그인</button>
                        <button className="btn btn-secondary">회원가입</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
