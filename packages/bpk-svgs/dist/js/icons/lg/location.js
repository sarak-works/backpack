import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18.096 4.768A8.064 8.064 0 0 0 12.008 2a8.065 8.065 0 0 0-6.089 2.768C3.115 7.975 3.461 12.604 6.53 16l4.773 5.707c.195.193.449.289.705.291a1.01 1.01 0 0 0 .705-.291L17.486 16c3.068-3.396 3.414-8.025.61-11.232zm-3.977 7.336a2.998 2.998 0 0 1-4.224 0A2.959 2.959 0 0 1 9.018 10c0-1.641 1.338-2.971 2.99-2.975 1.652.004 2.99 1.334 2.99 2.975a2.957 2.957 0 0 1-.879 2.104z" /></svg>;
  }

}