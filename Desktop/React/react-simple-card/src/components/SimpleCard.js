import React, { Component } from "react";
import Title from "./Title";
import Image from "./Image";
import Description from "./Description";
class SimpleCard extends Component {
  render() {
    return (
      <div className="main-container">
        <Image />
        <div className="sub-container">
          <Title />
          <Description />
        </div>
      </div>
    );
  }
}
export default SimpleCard;
