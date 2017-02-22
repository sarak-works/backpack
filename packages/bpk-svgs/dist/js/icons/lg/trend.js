import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M20.819 5.023l-5.177 1.069c-.693.143-.871 1.008-.322 1.558l.95.95-2.994 2.994H8.063c-.398 0-.779.158-1.061.439L2.44 16.596a1.5 1.5 0 1 0 2.122 2.121l4.123-4.123h5.213c.398 0 .779-.158 1.061-.439l3.434-3.434.959.959c.549.55 1.415.371 1.558-.322l1.069-5.177c.137-.674-.486-1.297-1.16-1.158z" /></svg>;
  }

}