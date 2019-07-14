import React, { PureComponent } from "react";
import { number } from "prop-types";

interface props {
    key: number,
    src: string,
    title: string
}

export default class EmojiResultRow extends PureComponent<props> {
    // constructor(props: any) {
    //     super(props);
    // }

  render() {
    return (
      <div className="">
          <img key = {this.props.key} src={this.props.src} title={this.props.title}/>
          <span>{this.props.title}</span>
      </div>
    );
  }
}
