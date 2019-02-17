// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import TravelReq from './views/TravelReq'
import TravelInbox from './views/TravelInbox'
import UseCar from './views/UseCar'
import Allowances from './views/Allowances'
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/TravelInbox",
    name: "ข้อมูลการเดินทาง",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: TravelInbox,
    layout: "/admin"
  }, 
  {
    path: "/TravelReq",
    name: "แบบคำขอเดินทาง",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: TravelReq,
    layout: "/admin"
  },
  {
    path: "/useCar",
    name: "เบิกชดเชยการใข้รถส่วนตัวในกิจการบริษัท",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: UseCar,
    layout: "/admin"
  },
  {
    path: "/Allowances",
    name: "เบิกเบี้ยเลี้ยงภายใน และต่างประเทศ",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Allowances,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  }
];

export default dashboardRoutes;
