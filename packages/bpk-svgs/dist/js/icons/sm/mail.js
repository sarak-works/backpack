import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M15.4 3H2.6C1.7 3 1 3.8 1 4.7v8.6c0 .9.7 1.7 1.6 1.7h12.8c.9 0 1.6-.8 1.6-1.7V4.7c0-.9-.7-1.7-1.6-1.7zm-.6 3.5L10.7 11c-.5.5-1.1.8-1.7.8h-.5c-.2 0-.3-.1-.4-.1-.3-.1-.6-.3-.8-.6l-3-3.2-1.1-1.4c-.3-.3-.6-.7-.6-.9 0-.2.1-.5.3-.6.1-.2.4-.3.5-.3.2 0 .6.3.9.6l4.1 3.4.3.2c.1.1.2.1.3.1.2 0 .4-.1.6-.2l4.1-3.4c.3-.4.7-.7.9-.7s.4.1.5.3c.1.2.3.4.3.6s-.3.6-.6.9z" /></svg>;
  }

}