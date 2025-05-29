import { Form, useActionData, useNavigation } from 'react-router';

export async function contactAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const contactData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    };

    console.log('Contact form submitted:', contactData);
    
    const errors: Record<string, string> = {};
    if (!contactData.name) errors.name = '이름을 입력해주세요.';
    if (!contactData.email) errors.email = '이메일을 입력해주세요.';
    if (!contactData.message) errors.message = '메시지를 입력해주세요.';
    
    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { 
        success: true, 
        message: '문의사항이 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.' 
    };
}

interface ActionData {
    success?: boolean;
    message?: string;
    errors?: Record<string, string>;
}

const ContactPage = () => {
    const actionData = useActionData() as ActionData;
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">연락처</h2>
                    <p className="text-gray-600 mb-6">
                        프로젝트에 대한 문의사항이나 협업 제안이 있으시면 언제든지 연락해 주세요.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">이메일</h3>
                                <p className="text-gray-600">contact@example.com</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">전화번호</h3>
                                <p className="text-gray-600">+82-10-1234-5678</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">주소</h3>
                                <p className="text-gray-600">
                                    서울특별시 강남구<br />
                                    테헤란로 123, 456호
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">문의 양식</h3>
                            
                            {/* 성공 메시지 */}
                            {actionData?.success && (
                                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                                    {actionData.message}
                                </div>
                            )}

                            <Form method="post" className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        이름
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            actionData?.errors?.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="이름을 입력하세요"
                                        disabled={isSubmitting}
                                    />
                                    {actionData?.errors?.name && (
                                        <p className="mt-1 text-sm text-red-600">{actionData.errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        이메일
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            actionData?.errors?.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="이메일을 입력하세요"
                                        disabled={isSubmitting}
                                    />
                                    {actionData?.errors?.email && (
                                        <p className="mt-1 text-sm text-red-600">{actionData.errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        메시지
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            actionData?.errors?.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="메시지를 입력하세요"
                                        disabled={isSubmitting}
                                    ></textarea>
                                    {actionData?.errors?.message && (
                                        <p className="mt-1 text-sm text-red-600">{actionData.errors.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700'
                                    } text-white`}
                                >
                                    {isSubmitting ? '전송 중...' : '전송'}
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 