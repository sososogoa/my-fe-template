import { Button } from '@/components/ui/Button';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome to My FE Template</h1>
                <p className="text-gray-600 mb-6">
                    This is a basic setup using React, Vite, TypeScript, and Tailwind CSS.
                </p>
                <Button>Click Me</Button>
            </div>
        </div>
    );
}

export default App;
