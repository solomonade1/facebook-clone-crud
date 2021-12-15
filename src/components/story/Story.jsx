import { Avatar } from "@mui/material";
import "./story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="storyAvatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
