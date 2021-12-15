import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <h3>iframe</h3>
      <iframe
        src="https://www.facebook.com
        /plugins/page.php?href=https%3A%2F%2Fweb.
        facebook.com%2FNigeriancomputerprogrammers&tabs=
        timeline&width=300px&height=100%25&small
        _header=false&adapt_
        container_width=true&hide_cover=false
        &show_facepile=true&appId"
        width="300px"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Rightbar;
