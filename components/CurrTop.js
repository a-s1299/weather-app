import { Image, StyleSheet, Text, View } from 'react-native';
import { icons } from '../icons';

function CurrTop(props) {

    return(

        <View style={styles(props).main}>
            <View style={styles(props).locInfo}>
                <Text 
                    style={{
                        fontSize: 36, 
                        fontFamily: 'sans-serif', 
                        color: props.PRIMARY, 
                        fontWeight: 'bold', 
                        textShadowColor: '#000', 
                        textShadowRadius: 5
                    }}>
                    {props.city}, {props.state}
                </Text>
            </View>

            <View style={styles(props).triOutter}>
                <View style={styles(props).triConds}>
                    <View>
                        <Text 
                            style={{
                                fontSize: 64, 
                                color: props.TERTIARY, 
                                fontWeight: 'bold', 
                                textShadowColor: '#000', 
                                textShadowRadius: 10, 
                                paddingBottom:15
                            }}>
                            {props.currTemp}
                        </Text>
                    </View>
                    <View style={styles(props).extremes}>
                        <Text style={[styles(props).tempText, styles(props).highsText]}>{props.kyouHigh}</Text>
                        <Text style={[styles(props).tempText, styles(props).lowsText]}>{props.kyouLow}</Text>
                    </View>
                </View>

                <View style={styles(props).triConds}>
                    <View>
                        <Image 
                            source={icons[props.currIcon]} 
                            style={{
                                resizeMode: 'contain', 
                                height: 110, 
                                width: 140
                            }}/>
                    </View>
                    <View 
                        style={{
                            flexDirection: 'column-reverse', 
                            paddingBottom: 20
                        }}>
                        <Text style={styles(props).regText}>{props.currDesc}</Text>
                    </View>
                </View>

                <View style={styles(props).triConds}>
                    <View>
                        <Image 
                            source={icons[33]} 
                            style={{
                                resizeMode: 'contain', 
                                height: 90, 
                                width: 120
                            }}/>
                    </View>
                    <View>
                        <Text style={styles(props).regText}>{props.currWindSpd} from {props.currWindDir}</Text>
                    </View>
                    <View>
                        <Text style={styles(props).regText}>Gusts: {props.kyouGust}</Text>
                    </View>
                </View>
            </View>
        </View>
        
    )
}//

const styles = (props) => StyleSheet.create({

    main: {
        backgroundColor: props.PRIMARY,
        height: '100%',
    },
    locInfo: {
        flex: 1,
        flexDirection: 'column-reverse',
        padding: 2,
        margin: 5,
        marginTop: 25,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
        backgroundColor: props.SECONDARY,
        alignItems: 'center',
    },
    triOutter: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: props.SECONDARY,
        margin: 5,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
    },
    triConds: {
        flex:1,
        margin: 5,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15,
        backgroundColor: props.QUATERNARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    extremes: {
        flexDirection: 'row',
        gap: 20,
    }, 
    regText: {
        fontSize: 22,
        color: props.TERTIARY, 
        fontWeight: 'bold', 
        textShadowColor: '#000', 
        textShadowRadius: 10
    },
    tempText: {
        fontSize: 32,
        fontWeight: 'bold', 
        textShadowRadius: 5
    },
    highsText: {
        color:'#900000', 
        textShadowColor: '#bbb', 
    }, 
    lowsText: {
        color:'#5f9ea0', 
        textShadowColor: '#000', 
    },
    
});

export default CurrTop