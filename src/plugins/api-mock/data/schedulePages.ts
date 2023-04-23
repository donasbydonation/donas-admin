import { GetSchedulesResponseDTO } from '@/pages/Schedule/api';

export const schedulePages: Array<GetSchedulesResponseDTO> = [
    {
        totalPage: 3,
        schedules: [
            {
                scheduleId: 1,
                creatorId: 1,
                creatorName: "송선생",
                profileImage: "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                platforms: [
                    {
                        platformId: 1,
                        provider: "YOUTUBE",
                        broadcastLink: "https://www.youtube.com/@S_YW",
                    },
                    {
                        platformId: 2,
                        provider: "TWITCH",
                        broadcastLink: "https://www.twitch.tv/thdduddns98",
                    },
                ],
                title: "인내의 숲 npc이었던 건에 대하여",
                bannerImage: "https://i.ytimg.com/vi/KpRBg-tGChc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk8dOfAbEjB07CP5wkn6jbM_iI3A",
                description: "송선생의 인내의 숲 npc이었던 건에 대하여",
                scheduledTime: "2023-04-23T23:00:00Z", // ISO 8601 format
            },
        ],
    },
    {
        totalPage: 3,
        schedules: [
            {
                scheduleId: 2,
                creatorId: 2,
                creatorName: "축지법 송선생",
                profileImage: "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                platforms: [
                    {
                        platformId: 3,
                        provider: "YOUTUBE",
                        broadcastLink: "https://www.youtube.com/@S_YW",
                    },
                    {
                        platformId: 4,
                        provider: "AFREECA",
                        broadcastLink: "https://bj.afreecatv.com/lovefaith0",
                    },
                ],
                title: "카트라이더 서비스 종료, 마지막 카트",
                bannerImage: "https://i.ytimg.com/vi/vBzgwKDc2U8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_WwmuBDKGLfl6x5_T2O9wx8Fr8A",
                description: "비행술 송선생의 카트라이더 서비스 종료, 마지막 카트",
                scheduledTime: "2023-04-01T19:00:00+09:00", // ISO 8601 format
            },
        ],
    },
    {
        totalPage: 3,
        schedules: [
            {
                scheduleId: 3,
                creatorId: 3,
                creatorName: "비행술 송선생",
                profileImage: "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                platforms: [
                    {
                        platformId: 5,
                        provider: "TWITCH",
                        broadcastLink: "https://www.twitch.tv/thdduddns98",
                    },
                    {
                        platformId: 6,
                        provider: "AFREECA",
                        broadcastLink: "https://bj.afreecatv.com/lovefaith0",
                    },
                ],
                title: "낮엔 3이었는데 밤엔 4인 것은?",
                bannerImage: "https://i.ytimg.com/vi/qIphNk2t7Pw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpbHa-VFBv8Rc9_ruxMqPPCHyRJA",
                description: "축지법 송선생의 낮엔 3이었는데 밤엔 4인 것은?",
                scheduledTime: "2023-03-15T19:00:00+09:00", // ISO 8601 format
            },
        ],
    },
];
