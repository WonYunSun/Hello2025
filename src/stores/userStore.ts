"use client";

import { create } from "zustand";

import { createClient } from "@/lib/utils/supabase/client";
import { UserState } from "@/lib/types/auth";

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isLogin: false,

    fetchUser: async () => {
        const supabase = createClient();
        try {
            const { data, error } = await supabase.auth.getSession();

            if (error) throw error;

            console.log("세션 정보 확인:", data.session);

            if (data.session) {
                set({
                    user: data.session.user,
                    isLogin: true
                });
            } else {
                set({
                    user: null,
                    isLogin: false
                });
            }
        } catch (err) {
            console.error("세션 확인 오류", err);
            set({ user: null, isLogin: false });
        }
    },

    signOut: async () => {
        const supabase = createClient();

        try {
            await supabase.auth.signOut();
            set({ user: null, isLogin: false });
            console.log("로그아웃 성공!");
        } catch (err) {
            console.error("logout 오류:", err);
        }
    },

    deleteUser: async () => {
        try {
            const response = await fetch("/api/auth/delete", {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error("회원 탈퇴 실패");
            }

            set({ user: null, isLogin: false });
            console.log("회원 탈퇴 설공!");
        } catch (error: any) {
            console.error("회원 탈퇴 오류", error.message);
        }
    }
}));
