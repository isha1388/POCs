import React from 'react';
import EmojisResults from './components/EmojisResults';
import Header from './components/header';
import SearchInput from './components/SearchInput';
import { EmojisProvider } from './context';

export default class App extends React.Component {

  // state = {
  //   filteredEmojis: []
  // }

  constructor (props:any) {
    super(props);
  }

  // handleTextChange = (event: any) => {
  //   console.log(event.target);
  // }

  render() {
    return (
      // <div className="App">
      <EmojisProvider>
        <Header/>
        <SearchInput/>
        <EmojisResults/>
      </EmojisProvider>
      // </div>
    );
  }
  
}
