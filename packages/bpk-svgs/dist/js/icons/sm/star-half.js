import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M8.2 13.9l.8-.5V2c-.2 0-.5.1-.6.4L6.7 5.9c-.1.2-.3.3-.6.4l-3.5.5c-.6.1-.8.8-.4 1.2l3 2.7c.2.2.2.4.2.6l-1.2 3.9c-.1.6.5 1 1 .7l3-2z" /></svg>;
  }

}