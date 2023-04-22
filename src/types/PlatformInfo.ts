export enum PlatformName {
    Afreeca = "afreecatv",
    Twitch = "twitch",
    YouTube = "youtube",
}

export type PlatformInfo = {
    platform: PlatformName,
    broadcastLink: string,
};
