import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import ListStudent from "./views/components/ListStudent";
// import AddStudent from "./views/components/AddStudent";
// import Hook from "./views/components/Hook";
// import ClassComponent from "./views/components/ClassComponent";

let routers = [
  {
    name: "Dashboard",
    icon: <PieChartOutlined />,
    path: "/dashboard",
    component: <h3>Dashboard</h3>,
  },
  {
    name: "Hook",
    icon: <PieChartOutlined />,
    path: "/hook",
    // component: <Hook />,
  },
  {
    name: "Class Component",
    icon: <PieChartOutlined />,
    path: "/classcomponent",
    // component: <ClassComponent />,
  },
  {
    name: "Students",
    icon: <UserOutlined />,
    children: [
      {
        name: "Student List",
        icon: <FileOutlined />,
        path: "/student/list",
        // component: <ListStudent />,
      },
      {
        name: "Add Student",
        icon: <FileOutlined />,
        path: "/student/add",
        // component: <AddStudent />,
      },
    ],
  },
];

export default routers;
