import React, { PureComponent } from "react";
import {EmojisConsumer} from "../context";

interface props {
    onTextChange: (e: any, updateEmojis: any) => void
}

export default class SearchInput extends PureComponent {

  render() {
    return (
        <EmojisConsumer>
          {
              ({updateEmojis}) => <input onChange={(event) => updateEmojis(event.target.value)}/>
          }
        </EmojisConsumer>
    );
  }
}
