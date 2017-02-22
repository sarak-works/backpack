import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M15 10.662V4.338A3.348 3.348 0 0 0 11.662 1H6.338A3.348 3.348 0 0 0 3 4.338v6.324c0 1.545 1.069 2.842 2.5 3.218v.018L3 17h1.921l1.636-2h4.885l1.636 2H15l-2.5-3.102v-.018c1.431-.376 2.5-1.673 2.5-3.218zM12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7.5 2h3c.275 0 .5.225.5.5s-.225.5-.5.5h-3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5zM5 4.8c0-.44.36-.8.8-.8h6.4c.44 0 .8.36.8.8v2.4c0 .44-.36.8-.8.8H5.8c-.44 0-.8-.36-.8-.8V4.8zM5 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" /></svg>;
  }

}