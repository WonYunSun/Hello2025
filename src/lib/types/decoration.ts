export type Decoration = {
    envelope: { src: string; height: number; width: number; blurWidth: number; blurHeight: number };
    letter: { src: string; height: number; width: number; blurWidth: number; blurHeight: number };
    message: { name: string; text: string; isPrivate: boolean };
};
