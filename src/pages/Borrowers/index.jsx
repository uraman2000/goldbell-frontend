import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  LOGIN,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  DASHBOARD,
  INVOICE_SUBMISSION,
  INVOICE_ACCOUNT,
  INCOMPLETE_SUBMISSION,
  INCOMPLETE_ITEM_DATA,
  SUBMISSION_STATUS,
  SUBMISSION_STATUS_DETAILED,
  INVOICE_UPLOAD,
  ADMIN,
  MANAGE_STAFF,
  INBOX,
  LOGOUT,
} from "../../utils/Links";
import Login from "./Login/Login";
import ForgetPassword from "./Login/ForgetPassword";
import ResetPassword from "./Login/ResetPassword";
import Dashboard from "./MainContent/Dashboard/Dashboard";
import InvoiceSubmisson from "./MainContent/InvoiceSubmission/InvoiceSubmisson";
import Account from "./MainContent/InvoiceSubmission/Account";
import IncompleteSubmission from "./MainContent/IncompleteSubmission/IncompleteSubmission";
import SubmissionStatus from "./MainContent/SubmissionStatus/SubmissionStatus";
import DetailedStatus from "./MainContent/SubmissionStatus/DetailedStatus";
import EditData from "./MainContent/IncompleteSubmission/EditData";
import UploadManually from "./MainContent/InvoiceSubmission/UploadManually";
import Admin from "./MainContent/Admin/Admin";
import ManageStaff from "./MainContent/ManageStaff/ManageStaff";
import Inbox from "./MainContent/Inbox/Inbox";
import Logout from "./MainContent/Logout/Logout";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import DashBoardIcon from "../../images/Navigation/dashboard.svg";
import InvoiceIcon from "../../images/Navigation/invoice_sumission.svg";
import IncompleteSubmissionIcon from "../../images/Navigation/incomplete_submission.svg";
import SubmissionStatusIcon from "../../images/Navigation/submission_status.svg";
import AdminIcon from "../../images/Navigation/Admin.svg";
import ManageStaffIcon from "../../images/Navigation/manage_staff.svg";
import InboxIcon from "../../images/Navigation/inbox.svg";
import LogoutIcon from "../../images/Navigation/logout.svg";
import DashBoardIconActive from "../../images/Navigation/active/dashboard_active.svg";
import InvoiceIconActive from "../../images/Navigation/active/invoice_sumission_active.svg";
import IncompleteSubmissionIconActive from "../../images/Navigation/active/incomplete_submission_active.svg";
import SubmissionStatusIconActive from "../../images/Navigation/active/submission_status_active.svg";
import AdminIconActive from "../../images/Navigation/active/Admin_active.svg";
import ManageStaffIconActive from "../../images/Navigation/active/manage_staff_active.svg";
import InboxIconActive from "../../images/Navigation/active/inbox_active.svg";

const navListItem = [
  { label: "Dashboard", icon: DashBoardIcon, activeIcon: DashBoardIconActive, link: DASHBOARD },
  { label: "Invoice Submission", icon: InvoiceIcon, activeIcon: InvoiceIconActive, link: INVOICE_SUBMISSION },
  {
    label: "Incomplete Submission",
    icon: IncompleteSubmissionIcon,
    activeIcon: IncompleteSubmissionIconActive,
    link: INCOMPLETE_SUBMISSION,
  },
  {
    label: "Submission Status",
    icon: SubmissionStatusIcon,
    activeIcon: SubmissionStatusIconActive,
    link: SUBMISSION_STATUS,
  },
];

const accountListItems = [
  { label: "Admin", icon: AdminIcon, activeIcon: AdminIconActive, link: ADMIN },
  { label: "Manage Staff", icon: ManageStaffIcon, activeIcon: ManageStaffIconActive, link: MANAGE_STAFF },
  { label: "Inbox", icon: InboxIcon, activeIcon: InboxIconActive, link: INBOX },
  { label: "Logout", icon: LogoutIcon, activeIcon: LogoutIcon, link: LOGOUT },
];

const navlist = {
  top: navListItem,
  bottom: accountListItems,
};

export default function index() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={LOGIN} component={Login} />
        <Route exact path={FORGET_PASSWORD} component={ForgetPassword} />
        <Route exact path={RESET_PASSWORD} component={ResetPassword} />
        {/* <Route exact path="/Dashboard" component={() => <NavigationDrawer child={Dashboard} />} /> */}
        <NavigationDrawer navList={navlist}>
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={INVOICE_SUBMISSION} component={InvoiceSubmisson} />
          <Route exact path={INVOICE_ACCOUNT} component={Account} />
          <Route exact path={INVOICE_UPLOAD} component={UploadManually} />

          <Route exact path={INCOMPLETE_SUBMISSION} component={IncompleteSubmission} />
          <Route exact path={INCOMPLETE_ITEM_DATA} component={EditData} />

          <Route exact path={SUBMISSION_STATUS} component={SubmissionStatus} />
          <Route exact path={SUBMISSION_STATUS_DETAILED} component={DetailedStatus} />

          <Route exact path={ADMIN} component={Admin} />
          <Route exact path={MANAGE_STAFF} component={ManageStaff} />
          <Route exact path={INBOX} component={Inbox} />
          <Route exact path={LOGOUT} component={Logout} />
        </NavigationDrawer>
      </Switch>
    </Router>
  );
}
