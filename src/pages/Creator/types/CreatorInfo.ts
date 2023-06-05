import { PlatformInfo } from '.';

export class CreatorInfo {
    id?: number;
    name: string;
    platforms: PlatformInfo[];

    constructor(name: string, platforms: PlatformInfo[], id?: number) {
        this.id = id;
        this.name = name;
        this.platforms = platforms.filter(p => (p.broadcastLink !== ""));
    }

    get blob(): Blob {
        return new Blob([JSON.stringify(this)], {type: "application/json"});
    }
};
