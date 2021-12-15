import Story from "../story/Story";
import "./storyReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://media.istockphoto.com/photos/african-american-graduate-student-studying-from-home-during-covid19-picture-id1300821206?b=1&k=20&m=1300821206&s=170667a&w=0&h=07MXcT5w6fcnMhRZIv1qgdWmRLQqknfJ5MUlALfy4g0="
        profileSrc="https://randomuser.me/api/portraits/men/91.jpg"
        title="Duane Perkins"
      />
      <Story
        image="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://randomuser.me/api/portraits/women/17.jpg"
        title="Jeanne Brooks"
      />
      <Story
        image="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://media.istockphoto.com/photos/portrait-of-a-handsome-man-picture-id1131285202?b=1&k=20&m=1131285202&s=170667a&w=0&h=Qn8OEXKKrHFcxwHT_9BRCrbQvdMKFPOj_9_4LKDhbrQ="
        title="Dustin Walker"
      />
      <Story
        image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://randomuser.me/api/portraits/women/11.jpg"
        title="Kim E Brock"
      />

      <Story
        image="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Jared Banks"
      />
    </div>
  );
}

export default StoryReel;
