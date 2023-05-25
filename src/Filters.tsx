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
        <label>All </label>
        <input type="radio" value="ALL" name="crashType" defaultChecked />
        <br />
        <label>Fatalities </label>
        <input type="radio" value="FATAL" name="crashType" />
        <br />
        <label>No Indiciation of Injury </label>
        <input type="radio" value="NO INDICATION OF INJURY" name="crashType" />
        <br />
        <label>Injuries Reported, Not Evident </label>
        <input type="radio" value="REPORTED, NOT EVIDENT" name="crashType" />
        <br />
        <label>Nonincapacitating Injury </label>
        <input type="radio" value="NONINCAPACITATING INJURY" name="crashType" />
        <br />
        <label>Incapacitating Injury </label>
        <input type="radio" value="INCAPACITATING INJURY" name="crashType" />
      </div>
    );
  }
}

export default Filters;
