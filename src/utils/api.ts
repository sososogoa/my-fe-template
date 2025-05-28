interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

interface ApiError extends Error {
  status?: number;
  data?: unknown;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const createApiError = (status: number, message: string, data?: unknown): ApiError => {
  const error = new Error(message) as ApiError;
  error.status = status;
  error.data = data;
  return error;
};

export const api = {
  async request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    const { params, ...init } = config;
    
    // URL 파라미터 처리
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : '';
    
    const url = `${API_BASE_URL}${endpoint}${queryString}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...init.headers,
        },
        ...init,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = null;
        }

        throw createApiError(
          response.status,
          errorData?.message || response.statusText,
          errorData
        );
      }

      // 204 No Content 응답 처리
      if (response.status === 204) {
        return null as T;
      }

      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('API 요청 중 알 수 없는 오류가 발생했습니다.');
    }
  },

  get<T>(endpoint: string, config: RequestConfig = {}) {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  },

  post<T>(endpoint: string, data?: unknown, config: RequestConfig = {}) {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put<T>(endpoint: string, data?: unknown, config: RequestConfig = {}) {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  patch<T>(endpoint: string, data?: unknown, config: RequestConfig = {}) {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  delete<T>(endpoint: string, config: RequestConfig = {}) {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  },
}; 