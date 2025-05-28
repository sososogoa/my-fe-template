import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    setUser: (user: User | null) => void;
    setToken: (token: string | null) => void;
    logout: () => void;
}

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
} as const;

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            ...initialState,
            setUser: (user: User | null) =>
                set((state) => ({
                    ...state,
                    user,
                    isAuthenticated: !!user,
                })),
            setToken: (token: string | null) =>
                set((state) => ({
                    ...state,
                    token,
                })),
            logout: () => set(initialState),
        }),
        {
            name: 'auth-storage',
        }
    )
);
