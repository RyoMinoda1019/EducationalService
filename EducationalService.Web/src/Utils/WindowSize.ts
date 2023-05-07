import { useEffect, useState } from "react";

export type WindowSize = {
    windowHeight: number,
    windowWidth: number,
}

export const useWindowSize = (): WindowSize => {
    const [ height, useHeight ] = useState<number>(window.innerHeight);
    const [ width, useWidth ] = useState<number>(window.innerWidth);

    const useResize = (): void => {
        useWidth(window.innerWidth);
        useHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", useResize);
        return () => window.removeEventListener("resize", useResize)
    }, []);

    return {
        windowHeight: height,
        windowWidth: width
    } as WindowSize;
}