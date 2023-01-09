// To be able to import images with typescript, otherwise the config will only read ts, tsx and d.ts files

declare module "*.jpg";
declare module "*.png";
declare module "*.mp4"{
    const src: string;
    export default src;
};