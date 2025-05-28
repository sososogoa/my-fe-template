import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                            <h2 className="text-2xl font-bold text-red-600 mb-4">오류가 발생했습니다</h2>
                            <p className="text-gray-600 mb-4">
                                {this.state.error?.message || '알 수 없는 오류가 발생했습니다.'}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            >
                                페이지 새로고침
                            </button>
                        </div>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
