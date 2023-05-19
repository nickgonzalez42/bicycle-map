import React, { Component } from "react";
import { iSideBarProps } from "./interfaces";

class Filters extends Component<iSideBarProps> {
  constructor(props: iSideBarProps) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.filter(event.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <label>Recent </label>
        <input type="radio" value="Recent" name="fatalities" defaultChecked />
        <br />
        <label>Fatalities </label>
        <input type="radio" value="Fatalities" name="fatalities" />
      </div>
    );
  }
}

export default Filters;
