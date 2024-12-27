"use client";

import { create } from "zustand";
import { createClient } from "@/lib/utils/supabase/client";
import { UserState } from "@/lib/types/auth";
import { UserTable } from "@/lib/types/usertable";

export const useUserStore = create<UserState>((set, get) => ({
    user: null,
    userTable: null,
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
                    userTable: null,
                    isLogin: false
                });
            }
        } catch (err) {
            console.error("세션 확인 오류", err);
            set({ user: null, userTable: null, isLogin: false });
        }
    },

    fetchUserData: async (userId: string) => {
        const supabase = createClient();

        try {
            const { data, error } = await supabase.from("users").select("*").eq("id", userId).single();

            if (error) {
                console.error("사용자 데이터 가져오기 오류:", error);
                return; // 오류 발생 시 종료
            }

            if (data) {
                const userData: UserTable = {
                    id: data.id,
                    username: data.username,
                    allow_anonymous: data.allow_anonymous !== null ? data.allow_anonymous : false,
                    count_visibility: data.count_visibility !== null ? data.count_visibility : false,
                    letter_visibility: data.letter_visibility !== null ? data.letter_visibility : false
                };
                set({ userTable: userData, isLogin: true }); // 사용자 데이터와 로그인 상태 업데이트
            }
        } catch (err) {
            console.error("사용자 데이터 가져오기 오류:", err);
        }
    },

    updateUser: async (updates: Partial<UserTable>) => {
        const supabase = createClient();
        const userTable = get().userTable;

        if (!userTable) return;

        try {
            const { error } = await supabase
                .from("users")
                .update(updates) // updates 객체를 통해 여러 필드 업데이트 가능
                .eq("id", userTable.id); // userTable.id를 통해 사용자 업데이트

            if (error) {
                console.error("사용자 업데이트 오류:", error);
                return;
            }

            // 상태 업데이트
            set((state) => ({
                ...state,
                userTable: {
                    ...state.userTable!,
                    ...updates,
                    id: userTable.id // id는 반드시 포함해야 하므로 명시적으로 설정
                }
            }));
        } catch (err) {
            console.error("사용자 업데이트 오류:", err);
        }
    },

    signOut: async () => {
        const supabase = createClient();

        try {
            await supabase.auth.signOut();
            set({ user: null, userTable: null, isLogin: false });
            console.log("로그아웃 성공!");
        } catch (err) {
            console.error("로그아웃 오류:", err);
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

            set({ user: null, userTable: null, isLogin: false });
            console.log("회원 탈퇴 성공!");
        } catch (error: any) {
            console.error("회원 탈퇴 오류", error.message);
        }
    }
}));