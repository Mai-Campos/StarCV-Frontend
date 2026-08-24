import { create } from "zustand";
import type { User } from "../types/auth";
import { authService } from "../services/auth.service";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isInitializing: boolean;

  initializeAuth: () => Promise<void>;
  setAuth: (user: User, accessToken: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isInitializing: true,

  initializeAuth: async () => {
    try {
      const result = await authService.refresh();

      set({
        user: result.user,
        accessToken: result.accessToken,
      });
    } catch {
      set({
        user: null,
        accessToken: null,
      });
    } finally {
      set({
        isInitializing: false,
      });
    }
  },

  setAuth: (user, accessToken) => {
    set({
      user,
      accessToken,
    });
  },

  clearAuth: () => {
    set({
      user: null,
      accessToken: null,
    });
  },
}));
