import {
  FacebookOutlined,
  SearchOutlined,
  Flag,
  Home,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircleOutlined,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import "./topbar.css";
import { useStateValue } from "../../StateProvider";

export default function Topbar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <FacebookOutlined fontSize="large" className="facebookLogo" />
        <div className="searchBox">
          <SearchOutlined style={{ cursor: "pointer" }} />
          <input
            type="text"
            placeholder="Search facebook"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarCenter">
        <div className="topbarOption--active">
          <Home fontSize="large" />
        </div>
        <div className="topbarOption">
          <Flag fontSize="large" />
        </div>
        <div className="topbarOption">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="topbarOption">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="topbarOption">
          <SupervisedUserCircleOutlined fontSize="large" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarInfo">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}
