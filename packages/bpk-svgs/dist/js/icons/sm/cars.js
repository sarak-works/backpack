import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M2 15.2c0 .4.3.8.8.8h1.6c.4 0 .8-.4.8-.8v-1.5H2v1.5zm10.9 0c0 .4.4.8.8.8h1.6c.4 0 .8-.4.8-.8v-1.5H13v1.5h-.1zm.9-11.7C13.5 2.6 12.9 2 12 2H6c-.8 0-1.5.6-1.8 1.5L2.8 7.7c-.5.2-.8.7-.8 1.3v3.9h14V9c0-.6-.3-1.1-.8-1.3l-1.4-4.2zM5.4 4c.1-.3.4-.5.6-.5h6c.3 0 .5.2.6.5l1.1 3.4H4.3L5.4 4zm-.7 7.3c-.6 0-1.2-.5-1.2-1.2.1-.6.6-1.1 1.2-1.1s1.2.5 1.2 1.2c0 .6-.5 1.1-1.2 1.1zm8.6 0c-.6 0-1.2-.5-1.2-1.2 0-.6.5-1.2 1.2-1.2s1.2.5 1.2 1.2c-.1.7-.6 1.2-1.2 1.2z" /></svg>;
  }

}