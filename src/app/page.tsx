// import { createClient } from "@/lib/utils/supabase/server";
// import { redirect } from "next/navigation";

const Home = async () => {
    // const supabase = await createClient();
    // const {
    //     data: { session }
    // } = await supabase.auth.getSession();
    // // 세션 유무에 따라 리디렉션 처리
    // if (session) {
    //     // 로그인된 사용자일 경우
    //     redirect(`/letterbox/${session.user.id}`);
    // } else {
    //     // 로그인되지 않은 사용자일 경우
    //     redirect("/auth");
    // }
    // // 이 부분은 실행되지 않지만, 원칙적으로 반환할 것이 필요합니다.
    // return null; // 또는 <></> 빈 JSX 반환
};

export default Home;
