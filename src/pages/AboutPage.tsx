const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary-600 mb-6">About</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">프로젝트 소개</h2>
                    <p className="text-gray-600 mb-6">
                        이 프로젝트는 현대적인 웹 애플리케이션 개발을 위한 보일러플레이트입니다. 최신 기술과 베스트
                        프랙티스를 적용하여 개발 생산성과 코드 품질을 높이는 것을 목표로 합니다.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">주요 기술 스택</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">프론트엔드</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>React 18</li>
                                <li>TypeScript</li>
                                <li>Vite</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">상태 관리 & 라우팅</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Zustand</li>
                                <li>React Router</li>
                                <li>React Query</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">개발 환경</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>ESLint & Prettier를 통한 코드 품질 관리</li>
                        <li>Vitest & Testing Library를 통한 테스트 환경</li>
                        <li>Git 기반 버전 관리</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
