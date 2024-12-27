"use client";
import { useEffect, useState } from "react";

const useRecipientURL = () => {
    const [uid, setUid] = useState<string | null>(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const pathSegments = url.pathname.split("/");
        const extractedUid = pathSegments[pathSegments.length - 1];
        setUid(extractedUid);
    }, []);

    return { uid };
};

export default useRecipientURL;
