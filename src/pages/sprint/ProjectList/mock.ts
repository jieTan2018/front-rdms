/*
 * @Description: 模拟数据
 * @Author: jieTan
 * @Date: 2021-11-13 13:51:14
 * @LastEditTime: 2021-11-13 14:11:39
 * @LastEditors: jieTan
 * @LastModify:
 */

export interface SpProjListInterface {
  title: string;
  source?: string;
  progress?: number;
  createAt?: string;
  startAt?: string;
  testAt?: string;
  finishAt?: string;
  stageAt?: string;
  onlineAt?: string;
  avatar?: string;
}

export const mockData: SpProjListInterface[] = [
  {
    title: "多组织阻塞bug跟踪",
    source: "自动",
    progress: 100,
    createAt: "2021-07-28 03:17:38",
    startAt: "2021-07-27",
    testAt: "2021-09-30",
    finishAt: "2021-07-27",
    stageAt: "2021-07-27",
    onlineAt: "2021-07-27",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
  },
  {
    title: "线上问题跟踪",
    source: "人工",
    progress: 75,
    createAt: "2021-09-30 14:44:22",
    startAt: "2021-09-29",
    testAt: "2021-09-30",
    finishAt: "2021-09-30",
    stageAt: "2021-09-30",
    onlineAt: "2021-09-30",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
  },
  {
    title: "emergency20211112",
    source: "自动",
    progress: 0,
    createAt: "2021-11-12 19:23:50",
    startAt: "2021-11-11",
    testAt: "2021-11-12",
    finishAt: "2021-11-12",
    stageAt: "2021-11-12",
    onlineAt: "2021-11-12",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
  },
  {
    title: "sprint20211125",
    source: "自动",
    progress: 100,
    createAt: "2021-11-12 22:03:57",
    startAt: "2021-11-12",
    testAt: "2021-11-29",
    finishAt: "2021-11-25",
    stageAt: "2021-11-25",
    onlineAt: "2021-11-25",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
  },
];
