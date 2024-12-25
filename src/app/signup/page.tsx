import { createClient } from "@/lib/utils/supabase/client";
import SignupForms from "./_components/SignupForm";

const NewPostbox = async () => {
    const supabase = createClient();
    const session = await supabase.auth.getSession();
    console.log("session", session);

    return <SignupForms />;
};

export default NewPostbox;
