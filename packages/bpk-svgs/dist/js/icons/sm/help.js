import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M8 11c0-.5.1-.9.4-1.4.2-.4.5-.7.8-1l1.2-.9.6-.6c.3-.4.4-.8.4-1.3s-.2-1-.5-1.5-.8-.6-1.6-.6C8.1 3.7 7 4.7 7 5.9c0 .3-.3.6-.6.6H4.6c-.3.1-.6-.2-.6-.6 0-1.7.9-3.4 2.1-4.1.8-.5 2-.8 3.2-.8 1.6 0 3.1.4 3.9 1.1 1 .9 1.4 1.9 1.4 3.4 0 .9-.2 1.7-.7 2.4-.3.4-.8.9-1.5 1.5l-.6.6c-.5.4-.8 1-.8 1.6 0 .2-.2.4-.4.4H8v-1zm.5 3h2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5z" /></svg>;
  }

}