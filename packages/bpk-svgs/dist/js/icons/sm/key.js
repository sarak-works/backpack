import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M22.06 19.963l-6.822-6.823a7.499 7.499 0 1 0-2.131 2.113l1.272 1.27-1.892 1.892a1.5 1.5 0 0 0 2.12 2.122l1.893-1.892.864.864-.458.488a1.5 1.5 0 0 0 2.188 2.053l.393-.419.452.453a1.5 1.5 0 0 0 2.122-2.121zM9 13.476a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5z" /></svg>);