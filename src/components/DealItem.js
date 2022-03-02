import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import React, { Component } from 'react';
import { priceDisplay } from '../util';

export default class DealItem extends Component {

    handlePress = () => {
        this.props.onPress(this.props.deal.key);
    }

    render() {
        const { deal } = this.props;
        return (
        <TouchableOpacity onPress={this.handlePress} style={styles.deal}>
            <Image
                source={{ uri: deal.media[0] }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text>{deal.title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.cause}>{deal.cause.name}</Text>
                    <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                </View>
            </View>
        </TouchableOpacity>
        );
  }
}

const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 12,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },  
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
    },
    cause: {
        flex: 2,
    },
    price: {
        flex: 1,
        textAlign: 'right',
    },
});