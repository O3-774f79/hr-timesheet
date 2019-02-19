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
import TravelReq from './views/TravelReq'
import TravelInbox from './views/TravelInbox'
import UseCar from './views/UseCar'
import Allowances from './views/Allowances'
import Inbox from './views/Inbox'
import Setting from './views/Setting'
import DashboardPage from './views/Dashboard/Dashboard'
// core components/views for RTL layout


const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/inbox",
    name: "Inbox",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Inbox,
    layout: "/admin"
  },
  {
    path: "/travelInbox",
    name: "ข้อมูลการเดินทาง",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: TravelInbox,
    layout: "/admin"
  }, 
  {
    path: "/travelReq",
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
    path: "/allowances",
    name: "เบิกเบี้ยเลี้ยงภายใน และต่างประเทศ",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Allowances,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "ข้อมูลส่วนกลาง",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Setting,
    layout: "/admin"
  },
];

export default dashboardRoutes;
