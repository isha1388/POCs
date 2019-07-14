import React, { createContext } from 'react';
import axios from 'axios';

const EmojisContext = createContext({
    emojis: {},
    updateEmojis: (text: any) => {},
    filteredEmojis: {}
});

interface stateProps {
    emojis: {[key: string]: any},
    updateEmojis: (filterText: any) => void,
    filteredEmojis: {[key: string]: any}
}

export class EmojisProvider extends React.Component {

    updateEmojis = (filterText: any) => {
        const filteredEmojis = this.getFilteredEmojis(filterText);
        this.setState({filteredEmojis});
    }

  state: stateProps;

    constructor(props: any) {
      super(props);
      this.state = {
        emojis: {},
        updateEmojis: this.updateEmojis,
        filteredEmojis: {}
      }
    }

  getFilteredEmojis = (filterText: any) => {
    const filteredArr = Object.keys(this.state.emojis).filter(emoji => {
        return emoji.includes(filterText);
    })

    const filteredEmojis: {[key: string]: any} = {};

    for(const key of filteredArr){
      filteredEmojis[key] =  this.state.emojis[key]
    }

    return filteredEmojis;
  }

    convertResObjToArr = (resObj: any) => {
        return Object.keys(resObj).map(key => resObj[key]);
    }

  componentDidMount() {
    axios.get('https://api.github.com/emojis')
        .then(res => {
            // const emojis = res.data ? this.convertResObjToArr(res.data) : [];
            res.data && this.setState({emojis: res.data, filteredEmojis: res.data});
        })
  }

  render() {
    return (
      <EmojisContext.Provider value={this.state}>
        {this.props.children}
      </EmojisContext.Provider>
    );
  }
}

export const EmojisConsumer = EmojisContext.Consumer;
