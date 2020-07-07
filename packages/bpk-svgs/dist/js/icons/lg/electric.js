import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M4 4.48c0-.219.068-.434.224-.588C4.985 3.14 6.88 2 9.5 2c2.59 0 4.365 1.114 5.213 1.867.191.17.287.419.287.675v15.85C15 21.28 14.231 22 13.281 22H5.72C4.77 22 4 21.28 4 20.393V4.48zm6 2.273c0-.205-.272-.277-.374-.1l-3.455 6.048a.2.2 0 0 0 .174.299H8a1 1 0 0 1 1 1v3.247c0 .205.272.277.374.1l3.455-6.048a.2.2 0 0 0-.174-.3H11a1 1 0 0 1-1-1V6.754z" clipRule="evenodd" /><path d="M17 6a1 1 0 0 0 .2 1.4L20 9.5v5.764a1 1 0 1 1-2 0V12a1 1 0 0 0-2 0v3.264a3 3 0 0 0 6 0V9.5a2 2 0 0 0-.8-1.6l-2.8-2.1A1 1 0 0 0 17 6z" /></svg>);