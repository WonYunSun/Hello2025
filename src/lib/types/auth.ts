import { User } from "@supabase/supabase-js";
import { UserTable } from "./usertable";

export interface UserState {
    user: User | null;
    userTable: UserTable | null;
    isLogin: boolean;
    fetchUser: () => Promise<void>;
    fetchUserData: (userId: string) => Promise<void>;
    updateUser: (updates: Partial<UserTable>) => Promise<void>;
    signOut: () => Promise<void>;
    deleteUser: () => Promise<void>;
}
