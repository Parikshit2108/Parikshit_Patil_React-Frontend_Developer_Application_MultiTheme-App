import api from "./axios"

export const get = async <T>(url: string, params?: Record<string, unknown>) => {
    const res = await api.get<T>(url, { params });
    return res.data;

}