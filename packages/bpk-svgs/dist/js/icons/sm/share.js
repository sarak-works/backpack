import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M11.25 16.5a.736.736 0 0 1 .763.703v3.092c0 .605.772.927 1.434.53l10.291-8.296a.667.667 0 0 0 0-1.058L13.45 3.175c-.494-.397-1.435-.075-1.435.53v3.092a.736.736 0 0 1-.764.703h-3.65C4.5 7.5 0 9 .001 17.713a.659.659 0 0 0 1.07.487 8.427 8.427 0 0 1 5.004-1.7z" /></svg>);