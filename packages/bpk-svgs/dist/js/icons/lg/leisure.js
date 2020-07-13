import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.981 13.911a.93.93 0 0 1-.899.455l-2.384-.2a1 1 0 0 0-1.048.734l-.627 2.308a.93.93 0 0 1-.737.689A8.019 8.019 0 0 1 12 20l-.001.001a8.122 8.122 0 0 1-1.285-.102.93.93 0 0 1-.737-.69l-.627-2.308a1 1 0 0 0-1.049-.734l-2.384.2a.93.93 0 0 1-.899-.455 7.96 7.96 0 0 1-.88-2.42.93.93 0 0 1 .395-.926l1.955-1.379A1 1 0 0 0 6.82 9.95L5.819 7.779a.93.93 0 0 1 .121-1.001 8.028 8.028 0 0 1 2.583-1.985.93.93 0 0 1 .999.142l1.838 1.532a1 1 0 0 0 1.28 0l1.838-1.532a.93.93 0 0 1 .999-.142 8.031 8.031 0 0 1 2.844 2.303.932.932 0 0 1 .093.965l-.987 2.136a1 1 0 0 0 .331 1.237l1.695 1.195a.93.93 0 0 1 .394.934 7.962 7.962 0 0 1-.866 2.348zm-4.152-4.227l-.64 2.559a1 1 0 0 1-.97.757h-2.438a1 1 0 0 1-.97-.758l-.64-2.558H9.17a1 1 0 0 1 .416-1.075l1.86-1.24a1 1 0 0 1 1.109 0l1.859 1.24a1 1 0 0 1 .415 1.075z" /></svg>);