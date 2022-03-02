import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ajax from  '../ajax.js';

import DealsList from './DealsList.js';
import DealDetail from './DealDetail.js';

export default class App extends Component {

    state = {
      deals: [],
      currentDealID: null
    }

    async componentDidMount() {
      const result = await ajax.fetchInitialDeals();
      this.setState(() => ({deals: result}));
    }

    setCurrentDeal = (dealID) => {
        this.setState({currentDealID: dealID});
    }

    currentDeal = () => {
        return this.state.deals.find((item) => item.key === this.state.currentDealID);
    }

    render() {
    
        if(this.state.currentDealID) {
            return <DealDetail deal={this.currentDeal()} back={this.setCurrentDeal} />;
        }

        if(this.state.deals.length > 0) {
            return <DealsList deals={this.state.deals} onPress={this.setCurrentDeal} />;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Deals</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40
  }
});
