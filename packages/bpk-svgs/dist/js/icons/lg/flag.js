import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm3.105 10.571c-.432.135-1.105-.23-1.105-.682V3.654a1.248 1.248 0 0 1 .676-1.21A6.42 6.42 0 0 1 10.25 2a8.172 8.172 0 0 1 3.25.857 8.155 8.155 0 0 0 3.25.857 7.203 7.203 0 0 0 2.145-.285c.432-.135 1.105.23 1.105.682v8.235a1.249 1.249 0 0 1-.676 1.21A6.438 6.438 0 0 1 16.75 14a8.172 8.172 0 0 1-3.25-.857 8.155 8.155 0 0 0-3.25-.857 7.203 7.203 0 0 0-2.145.285z" /></svg>);