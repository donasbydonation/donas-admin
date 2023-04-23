import { CreatorInfo } from './CreatorInfo';

export type ScheduleInfo = {
    id: number,
    creator: Partial<CreatorInfo>,
    bannerImage: string,
    name: string,
    description: string,
    datetime: string,
};
