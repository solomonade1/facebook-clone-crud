import {
  AccountCircle,
  ChatBubble,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="postTop">
        <Avatar src={profilePic} className="postAvatar" />
        <div className="postTopInfo">
          <h3>{username}</h3>
          <p> {new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="postBottom">
        <p>{message}</p>
      </div>
      <div className="postImage">
        <img src={image} alt="" />
      </div>
      <div className="postOptions">
        <div className="postOption">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="postOption">
          <ChatBubble />
          <p>Comment</p>
        </div>
        <div className="postOption">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="postOption">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
