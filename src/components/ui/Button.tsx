import { type ButtonHTMLAttributes, type FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
