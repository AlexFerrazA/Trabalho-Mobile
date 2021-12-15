import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        width: Dimensions.get('window').width - 40,
        padding: 15,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 10,
        backgroundColor: "#ff8c00"
    },

    fabricante: {
        padding: 5,
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 10,
        backgroundColor: "orange"
    },
    container_topico: {
        padding: 5,
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 10,

    },

    text: {
        fontSize: 15,
        fontFamily: "sans-serif",
        textAlign: "justify"
    },
    
    label: {
        fontWeight:"900"
    },

    title: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center"
    }

});