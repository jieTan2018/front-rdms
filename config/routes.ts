/*
 * @Description: 
 * @Author: jieTan
 * @Date: 2021-10-31 06:40:33
 * @LastEditTime: 2021-11-14 02:51:23
 * @LastEditors: jieTan
 * @LastModify: 
 */
type RouteType = {
  name?: string;
  path?: string;
  icon?: string;
  layout?: boolean;
  component?: string;
  exact?: string;
  routes?: RouteType[];
  redirect?: string;
  wrappers?: string;
  title?: string;
  hash?: string;
};

const SprintRoutes: RouteType = {
  name: "sprint工作台",
  path: "/sprint",
  icon: "TrophyOutlined",
  routes: [
    {
      name: "dashboard",
      path: "sprint/dashboard",
      icon: "DashboardOutlined",
      component: "./sprint/Dashboard",
    },
    {
      name: "项目列表",
      path: "projects",
      icon: "ProfileOutlined",
      component:"./sprint/ProjectList",
    },
    {
      name: "列表明细",
      path: "projects/detail",
      icon: "UnorderedListOutlined",
      component:"./sprint/ProjectList/PlDetail",
    },
  ],
};

const EvaluationRoutes: RouteType = {
  name: "研发过程数据",
  path: "/evaluation",
  icon: "FundProjectionScreenOutlined",
};

const ToolRoutes: RouteType = {
  name: "检查工具",
  path: "/tool",
  icon: "ToolOutlined",
};

export default [
  {
    path: "/user",
    layout: false,
    routes: [
      {
        path: "/user",
        routes: [{ name: "登录", path: "/user/login", component: "./user/Login" }],
      },
      { component: "./404" },
    ],
  },
  { path: "/welcome", name: "欢迎", icon: "smile", component: "./Welcome" },
  SprintRoutes,
  EvaluationRoutes,
  ToolRoutes,
  {
    path: "/admin",
    name: "管理页",
    icon: "crown",
    access: "canAdmin",
    // component: "./Admin",
    routes: [{ path: "/admin/sub-page", name: "二级管理页", icon: "smile", component: "./Welcome" }, { component: "./404" }],
  },
  { name: "查询表格", icon: "table", path: "/list", component: "./TableList" },
  { path: "/", redirect: "/welcome" },
  { component: "./404" },
];
