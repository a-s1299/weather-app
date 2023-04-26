import { FlatList, StyleSheet, Text, View } from 'react-native';

function CurrBottom(props) {

    return(

        <View style={styles(props).main}>
            <View style={styles(props).topContainer}>
                <View style={styles(props).splitTop}>
                    <Text style={styles(props).regText}>Sunset @ </Text>
                    <Text style={styles(props).regText}>{props.sunset}</Text>
                </View>
                <View style={styles(props).splitTop}>
                    <Text style={styles(props).regText}>Moon age = {props.moonAge}</Text>
                </View>
            </View>
            
            <View style={styles(props).allergenContainer}>

                <FlatList data={props.allergens} renderItem={ (itemData) => {
                    if (itemData.item.Name != 'AirQuality' && itemData.item.Name != 'UVIndex') {
                        return(
                            <View style={styles(props).allergenBlock}>
                                <View style={styles(props).allergenData}>
                                    <Text style={styles(props).regText}>{itemData.item.Name}</Text>
                                </View>
                                <View style={styles(props).allergenData}>
                                    <Text style={styles(props).regText}>{itemData.item.Category}</Text>
                                </View>
                                <View style={styles(props).allergenData}>
                                    <Text style={styles(props).regText}>{itemData.item.Value}</Text>
                                </View>
                            </View>
                        );
                    }
                }}/>

            </View>
        </View>
    )
}

const styles = (props) => StyleSheet.create({

    main: {
        backgroundColor: props.PRIMARY,
        height: '100%',
    },
    topContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: props.SECONDARY,
        margin: 7,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
    },
    allergenContainer: {
        flex: 5,
        backgroundColor: props.PRIMARY,
        margin: 7,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
    },
    splitTop: {
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: props.QUATERNARY,
        margin: 5,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    allergenBlock: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: props.QUATERNARY,
        borderWidth: 5,
        borderColor: props.SECONDARY,
        marginTop: 7,
        marginBottom: 7,

        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    allergenData: {
        width: 125, 
        alignItems: 'center',
    }, 
    regText: {
        fontSize: 18,
        color: props.TERTIARY,
        fontWeight: 'bold', 
        textShadowColor: '#000', 
        textShadowRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    
});

export default CurrBottom