import { User } from "@supabase/supabase-js";

export type UserState = {
    user: User | null;
    isLogin: boolean;
    fetchUser: () => Promise<void>;
    signOut: () => Promise<void>;
};
