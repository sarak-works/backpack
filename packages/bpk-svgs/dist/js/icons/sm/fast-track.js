import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M9.5 16c.419 0 .835-.152 1.131-.449l4.525-4.539a2.822 2.822 0 0 0 .034-3.991l-.033-.033-4.526-4.538c-.543-.546-1.491-.604-2.116-.127-.624.477-.689 1.306-.144 1.853l4.525 4.538c.139.139.139.433 0 .572l-4.525 4.539c-.545.546-.48 1.376.144 1.852.284.216.635.323.985.323zM4.408 3.408l3.653 3.609a2.779 2.779 0 0 1 .035 3.93l-.035.035-3.653 3.61a1.426 1.426 0 0 1-1.854.123 1.377 1.377 0 0 1-.281-1.926l.138-.158 3.39-3.349a.397.397 0 0 0 .003-.561l-.003-.003-3.39-3.349a1.375 1.375 0 0 1-.015-1.946l.158-.138a1.426 1.426 0 0 1 1.854.123z" /></svg>;
  }

}