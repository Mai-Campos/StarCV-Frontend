import { api } from "../api/axios";
import { type LoginData, type AuthResponse } from "../types/auth";

class AuthService {
  async login(data: LoginData): Promise<AuthResponse> {
    return (await api.post<AuthResponse>("auth/login", data)).data;
  }

  async refresh(): Promise<AuthResponse> {
    return (await api.post<AuthResponse>("auth/refresh")).data;
  }

  async logout(): Promise<void> {
    await api.post("auth/logout");
  }
}

export const authService = new AuthService();
