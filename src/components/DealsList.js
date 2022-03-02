import { StyleSheet, View, FlatList } from 'react-native';
import React, { Component } from 'react';

import DealItem from './DealItem';

export default class DealsList extends Component {
  render() {

    const { onPress } = this.props;

    return (
      <View style={styles.list}>
          <FlatList
            data={this.props.deals}
            renderItem={({item}) => <DealItem deal={item} onPress={onPress} />}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 50
    }
});