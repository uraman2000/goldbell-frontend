import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  LOGIN,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  DASHBOARD,
  ADMIN,
  INBOX,
  LOGOUT,
  PENDING,
  APPROVED,
  REJECTED,
  BORROWER,
  PENDING_EDIT,
  REJECTED_VIEW,
  APPROVED_VIEW,
  EDITOR,
} from "../../utils/Links";
import Login from "./Login/Login";
import ForgetPassword from "./Login/ForgetPassword";
import ResetPassword from "./Login/ResetPassword";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import DashBoardIcon from "../../images/Navigation/dashboard.svg";
import AdminIcon from "../../images/Navigation/Admin.svg";
import InboxIcon from "../../images/Navigation/inbox.svg";
import LogoutIcon from "../../images/Navigation/logout.svg";
import DashBoardIconActive from "../../images/Navigation/active/dashboard_active.svg";
import AdminIconActive from "../../images/Navigation/active/Admin_active.svg";
import InboxIconActive from "../../images/Navigation/active/inbox_active.svg";
import PendingIcon from "../../images/Navigation/pending.svg";
import ApprovedIcon from "../../images/Navigation/approved.svg";
import RejectedIcon from "../../images/Navigation/rejected.svg";
import BorrowerIcon from "../../images/Navigation/borrower.svg";
import PendingActiveIcon from "../../images/Navigation/active/pending_active.svg";
import ApprovedActiveIcon from "../../images/Navigation/active/approve_active.svg";
import RejectedActiveIcon from "../../images/Navigation/active/rejected_active.svg";
import BorrowerActiveIcon from "../../images/Navigation/active/borrower_active.svg";
import Dashboard from "./Dashboard/Dashboard";
import Pending from "./Pending/Pending";
import Approved from "./Approved/Approved";
import Rejected from "./Rejected/Rejected";
import PendingEdit from "./Pending/PendingEdit";
import RejectedView from "./Rejected/RejectedView";
import ApprovedView from "./Approved/ApprovedView";
import Borrower from "./Borrower/Borrower";
import BorrowerAddEdit from "./Borrower/BorrowerAddEdit";
import Admin from "../Borrowers/MainContent/Admin/Admin";
import Inbox from "../Borrowers/MainContent/Inbox/Inbox";
import Logout from "../Borrowers/MainContent/Logout/Logout";
const navListItem = [
  { label: "Dashboard", icon: DashBoardIcon, activeIcon: DashBoardIconActive, link: DASHBOARD },
  { label: "Pending", icon: PendingIcon, activeIcon: PendingActiveIcon, link: PENDING },
  {
    label: "Approved",
    icon: ApprovedIcon,
    activeIcon: ApprovedActiveIcon,
    link: APPROVED,
  },
  {
    label: "Rejected",
    icon: RejectedIcon,
    activeIcon: RejectedActiveIcon,
    link: REJECTED,
  },
  {
    label: "Borrower",
    icon: BorrowerIcon,
    activeIcon: BorrowerActiveIcon,
    link: BORROWER,
  },
];

const accountListItems = [
  { label: "Admin", icon: AdminIcon, activeIcon: AdminIconActive, link: ADMIN },
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

        <NavigationDrawer collapsed navList={navlist}>
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={PENDING} component={Pending} />
          <Route exact path={PENDING_EDIT} component={PendingEdit} />
          <Route exact path={APPROVED} component={Approved} />
          <Route exact path={APPROVED_VIEW} component={ApprovedView} />
          <Route exact path={REJECTED} component={Rejected} />
          <Route exact path={REJECTED_VIEW} component={RejectedView} />
          <Route exact path={BORROWER} component={Borrower} />
          <Route exact path={EDITOR} component={BorrowerAddEdit} />

          <Route exact path={ADMIN} component={Admin} />
          <Route exact path={INBOX} component={Inbox} />
          <Route exact path={LOGOUT} component={Logout} />
          {/* 
     
          <Route exact path={INVOICE_ACCOUNT} component={Account} />
          <Route exact path={INVOICE_UPLOAD} component={UploadManually} />

          <Route exact path={INCOMPLETE_SUBMISSION} component={IncompleteSubmission} />
          <Route exact path={INCOMPLETE_ITEM_DATA} component={EditData} />

          <Route exact path={SUBMISSION_STATUS} component={SubmissionStatus} />
          <Route exact path={SUBMISSION_STATUS_DETAILED} component={DetailedStatus} />

          <Route exact path={ADMIN} component={Admin} />
          <Route exact path={MANAGE_STAFF} component={ManageStaff} />
          <Route exact path={INBOX} component={Inbox} />
          <Route exact path={LOGOUT} component={Logout} /> */}
        </NavigationDrawer>
      </Switch>
    </Router>
  );
}
