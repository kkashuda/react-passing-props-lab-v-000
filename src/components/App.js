import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentFilter: null, 
			filters: [], 
			fruit: []
		};

  }

 componentWillMount() {
 	this.fetchFruit();
    this.fetchFilters();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }


  updateFilter(e) {
    this.setState({ currentFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
    );
  }
}

export default App;