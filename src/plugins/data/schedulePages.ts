import { GetSchedulesResponseDTO } from '@/pages/Schedule/api';

export const schedulePages: Array<GetSchedulesResponseDTO> = [
    {
        context: {
            totalPages: 3,
            currentPage: 1,
        },
        content: [
            {
                id: 1,
                name: "인내의 숲 npc이었던 건에 대하여",
                description: "송선생의 인내의 숲 npc이었던 건에 대하여",
                bannerImage: "https://i.ytimg.com/vi/KpRBg-tGChc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk8dOfAbEjB07CP5wkn6jbM_iI3A",
                datetime: "2023-04-11T19:00:00+09:00", // ISO 8601 format
                creator: {
                    id: 1,
                    name: "송선생",
                },
            },
        ],
    },
    {
        context: {
            totalPages: 3,
            currentPage: 2,
        },
        content: [
            {
                id: 2,
                name: "카트라이더 서비스 종료, 마지막 카트",
                description: "비행술 송선생의 카트라이더 서비스 종료, 마지막 카트",
                bannerImage: "https://i.ytimg.com/vi/vBzgwKDc2U8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_WwmuBDKGLfl6x5_T2O9wx8Fr8A",
                datetime: "2023-04-01T19:00:00+09:00", // ISO 8601 format
                creator: {
                    id: 2,
                    name: "비행술 송선생",
                },
            },
        ],
    },
    {
        context: {
            totalPages: 3,
            currentPage: 3,
        },
        content: [
            {
                id: 3,
                name: "낮엔 3이었는데 밤엔 4인 것은?",
                description: "축지법 송선생의 낮엔 3이었는데 밤엔 4인 것은?",
                bannerImage: "https://i.ytimg.com/vi/vBzgwKDc2U8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_WwmuBDKGLfl6x5_T2O9wx8Fr8A",
                datetime: "2023-03-15T19:00:00+09:00", // ISO 8601 format
                creator: {
                    id: 3,
                    name: "축지법 송선생",
                },
            },
        ],
    },
];
