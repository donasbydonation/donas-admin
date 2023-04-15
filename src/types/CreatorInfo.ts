export type CreatorInfo = {
    id: number,
    profileImage: string|File,
    name: string,
    youtubeURL: string,
    twitchURL: string,
    africaURL: string,
};

export type CreatorInfoShort = Pick<CreatorInfo, "id"|"name">;
