import { useLoaderData } from 'react-router';

export async function aboutLoader() {
    const projectInfo = {
        name: "React Template",
        description: "React 19 + React Router 7 활용 템플릿",
        features: [
            "React 19 최신 기능",
            "React Router 7 Data Router",
            "TypeScript 완전 지원",
            "Vite 빌드 시스템",
            "TailwindCSS 스타일링",
            "Zustand 상태 관리",
            "React Query 데이터 페칭",
            "ESLint & Prettier 코드 품질"
        ],
        techStack: {
            frontend: ["React 19", "TypeScript", "Vite", "TailwindCSS"],
            stateManagement: ["Zustand", "React Router 7", "React Query"],
            development: ["ESLint", "Prettier", "Vitest", "Testing Library"]
        }
    };

    await new Promise(resolve => setTimeout(resolve, 100));
    
    return projectInfo;
}

interface ProjectInfo {
    name: string;
    description: string;
    features: string[];
    techStack: {
        frontend: string[];
        stateManagement: string[];
        development: string[];
    };
}

const AboutPage = () => {
    const projectInfo = useLoaderData() as ProjectInfo;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">About</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{projectInfo.name}</h2>
                    <p className="text-gray-600 mb-6">
                        {projectInfo.description}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">주요 기능</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {projectInfo.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">기술 스택</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">프론트엔드</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {projectInfo.techStack.frontend.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">상태 관리 & 라우팅</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {projectInfo.techStack.stateManagement.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">개발 환경</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {projectInfo.techStack.development.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
