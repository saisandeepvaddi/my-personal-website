import React from "react";

function BlogImage(props) {
  return (
    <React.Fragment>
      <img {...props} style={{ ...props.style, maxWidth: "100vw" }} />
    </React.Fragment>
  );
}

export default BlogImage;
