import React from 'react';
import { Text, View } from 'react-native';

import { ProductList } from '../../entities';
import styles from './styles';

type Props = { product: ProductList }

export default function ListProduct({ product }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Produto </Text>
            <View style={styles.container_topico}>
                 <Text style={styles.label}>Id:</Text>
                 <Text style={styles.text}> {product.id}</Text>
            </View>
            <View style={styles.container_topico}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}> {product.name}</Text>
            </View>
            <View style={styles.container_topico}>
                <Text style={styles.label}>Quantidade:</Text>
                <Text style={styles.text}> {product.amount}</Text>
            </View>
            <View style={styles.container_topico}>
                <Text style={styles.label}>Preço:</Text>
                <Text style={styles.text}>${product.price},00</Text>
            </View>
            <View style={styles.fabricante}>
                <Text style={styles.title}>Fabricante </Text>
                <View style={styles.container_topico}>
                    <Text style={styles.label}>Id:</Text>
                    <Text style={styles.text}> {product.factory.id}</Text>
                </View>
                <View style={styles.container_topico}>
                    <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.text}> {product.factory.name}</Text>
                </View>
            </View>
        </View>
    );
}