import SmallButton from "@/components/ui/SmallButton";
import React from "react";
import { createClient } from "@/lib/utils/supabase/server";
import UserSettings from "../_components/UserSettings";
import { Session } from "@supabase/supabase-js";

const SettingsPage = async () => {
    const supabase = await createClient();
    const {
        data: { session }
    } = await supabase.auth.getSession();

    return (
        <>
            <div className="inner">
                <section className="flex justify-between relative">
                    <h1 className="title">계정설정</h1>
                    <SmallButton icon="/icon-back.svg" to={"/"} />
                </section>

                {session && <UserSettings session={session} />}
            </div>
        </>
    );
};

export default SettingsPage;
