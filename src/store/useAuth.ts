import { create } from "zustand";
import { persist } from "zustand/middleware";
import Api from "../Api/axios";

interface AuthState {
  token: string | null;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      login: async (email, password) => {
        try {
          const response = await Api.post("/auth/login", {
            email,
            password,
          });

          const { token, user } = response.data;

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          set({ token, user });
        } catch (error) {
          throw error;
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ token: null, user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
