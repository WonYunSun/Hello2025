import { usePathname } from "next/navigation";

const useBgDecoVisibility = () => {
    const pathname = usePathname();

    const hideBgDecoPaths = ["/auth", "/signup"];

    const shouldHideBgDeco = hideBgDecoPaths.includes(pathname);

    return shouldHideBgDeco;
};

export default useBgDecoVisibility;
