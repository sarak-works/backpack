import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M13.1 9l-4.8 5.4c-.4.5-1.1.5-1.6.1s-.5-1.1-.1-1.6L10.1 9 6.7 5.1c-.5-.5-.4-1.2.1-1.6s1.2-.4 1.6.1L13.1 9z" /></svg>;
  }

}