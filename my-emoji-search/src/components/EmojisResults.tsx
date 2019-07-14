import React, { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";
import {EmojisConsumer} from "../context";

interface item {
    val: string
}
interface props {
    filteredEmojis: {}
}

export default class EmojisResults extends React.Component {
    // state: stateProps

    // constructor(props: any) {
    //     super(props);
        // this.state = {
        //     data: {}
        // }
    // }

  
  render() {
    //   const {data} = this.state;
    //   const emojisArr = Object.keys(data);
    //   if (emojisArr.length === 0) return <div/>
    return (
          <EmojisConsumer>
          {({filteredEmojis}: any) => 
              Object.keys(filteredEmojis).map((emoji,i:any) => (
                filteredEmojis[emoji] ? <EmojiResultRow key={i} src={filteredEmojis[emoji]} title={emoji}/> : ''
          ))
          }
          </EmojisConsumer>
    );
  }
}
