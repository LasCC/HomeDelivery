import React, { PureComponent } from "react";

export default class Pin extends PureComponent {
  render() {
    return (
      <div>
        <div className='pin bounce' />
        <div className='pulse' />
      </div>
    );
  }
}
