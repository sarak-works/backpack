import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M9.8 4H8.2c-.4 0-.7-.3-.7-.8V1.8c0-.5.3-.8.7-.8h1.5c.4 0 .8.3.8.8v1.5c0 .4-.3.7-.7.7zM8.3 6.5h1.4c.4 0 .8.3.8.7v9c0 .4-.4.7-.8.7H8.3c-.4 0-.8-.3-.8-.7v-9c0-.4.4-.7.8-.7z" /></svg>;
  }

}