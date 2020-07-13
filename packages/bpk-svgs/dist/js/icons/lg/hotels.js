import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4.608 5.93A1.153 1.153 0 0 0 4 7.013V10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.2a.8.8 0 0 0 .8.8h.4a.8.8 0 0 0 .8-.8V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h.999a1 1 0 0 0 1-1l-.002-1H20V7.013a1.154 1.154 0 0 0-.608-1.083l-1.77-.758a14.067 14.067 0 0 0-11.244 0zM3 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.28a1 1 0 0 0 .948-.684L5 17h14l.772 2.316a1 1 0 0 0 .949.684H21a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" /></svg>);