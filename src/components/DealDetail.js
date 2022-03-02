import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { priceDisplay } from '../util';

export default class DealDetail extends Component {

    backFunc = () => {
        this.props.back(null);
    }

    render() {
        const { deal } = this.props;  
        return (
            <View style={styles.deal}>
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
                <TouchableOpacity onPress={this.backFunc}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
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