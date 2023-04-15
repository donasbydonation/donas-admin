import { CreatorInfoShort } from './CreatorInfo';

export type ScheduleInfo = {
    id: number,
    creator: CreatorInfoShort,
    bannerImage: string|File,
    name: string,
    description: string,
    datetime: string,
};
