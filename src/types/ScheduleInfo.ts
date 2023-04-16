import { CreatorInfoShort } from './CreatorInfo';

export type ScheduleInfo = {
    id: number,
    creator: CreatorInfoShort,
    bannerImage: string,
    name: string,
    description: string,
    datetime: string,
};
