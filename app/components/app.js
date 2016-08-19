import React, { Component } from 'react';

export default class App extends Component {
  render() {
  	const humorousCities = [
  		{id: 1, name:'Accident'},
  		{id: 2, name:'Batman'},
  		{id: 3, name:'Beaverlick'},
  		{id: 4, name:'Flippin'},
  		{id: 5, name:'Dog Patch'},
  		{id: 6, name:'Embarass'}
  	];
  	return (
  		<div>
  			{humorousCities.map((city) => <div key={city.id}>{city.name}</div>)}
  		</div>
  	);
  }
}
