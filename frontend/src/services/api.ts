import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Função de login
export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });

  const { token } = res.data;

  // Salva o token no localStorage
  if (token) {
    localStorage.setItem("token", token);
  }

  return res.data; // continua retornando { token: "..." }
};

// Instância do axios para requisições autenticadas
const api = axios.create({
  baseURL: API_URL,
});

// Interceptor adiciona o token automaticamente em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
