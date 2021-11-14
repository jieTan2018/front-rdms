/*
 * @Description:
 * @Author: jieTan
 * @Date: 2021-11-14 06:41:00
 * @LastEditTime: 2021-11-14 08:47:59
 * @LastEditors: jieTan
 * @LastModify:
 */

export interface SpPlHeaderInterface {
  headerName: string;
  field: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  editable?: boolean;
  resizable?: boolean;
}

export interface SpPlBodyInterface {
  stage: number;
  tester: string;
  category: string;
  ztNo: number;
  title: string;
  severity: number;
  ztStatus: string;
  source: string;
  feedback: string;
  deadline?: string;
}

export const mockBodyData: SpPlBodyInterface[] = [
  {
    stage: 4,
    tester: "小行星",
    category: "B-Story",
    ztNo: 4877,
    title: "放开服务限流及清除数据库连接",
    severity: 1,
    ztStatus: "",
    source: "",
    feedback: "",
  },
  {
    stage: 2,
    tester: "NA",
    category: "Bug",
    ztNo: 48779,
    title: "",
    severity: 2,
    ztStatus: "",
    source: "",
    feedback: "",
  },
];
