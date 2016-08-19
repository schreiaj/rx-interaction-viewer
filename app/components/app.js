import React, { Component } from 'react';

export default class App extends Component {
  render() {
		const myArray = [0, 1, 2, 3, 4, 5, 6];
    return (
      <div>
        {myArray.map((el,i) => <div key={i}>{el}</div>)}
      </div>
    );
  }
}
