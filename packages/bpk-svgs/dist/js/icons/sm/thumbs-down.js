import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M15.75 4v8.104a2.083 2.083 0 0 1-.144.762l-3.087 7.837a.458.458 0 0 1-.423.297 2.846 2.846 0 0 1-2.665-3.57l.284-1.188A.991.991 0 0 0 8.787 15H4.164a1.99 1.99 0 0 1-1.79-2.702l2.17-6.054A4.798 4.798 0 0 1 9.023 3h5.772a.979.979 0 0 1 .956 1zm2.55-1a1.05 1.05 0 0 0-1.05 1.05v6.9A1.05 1.05 0 0 0 18.3 12h2.4a1.05 1.05 0 0 0 1.05-1.05v-6.9A1.05 1.05 0 0 0 20.7 3z" /></svg>);