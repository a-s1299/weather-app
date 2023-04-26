import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { icons } from '../icons';

function Fore(props) {

    function changeScheme(newScheme) {

        let schemeHack;
        
        switch (newScheme) {
            case 'twist':
                schemeHack = ['rgb(66, 69, 78)', 
                    'rgb(100, 120, 162)', 
                    'rgb(228, 156, 0)', 
                    '#90a2bc'];
                break;
            case 'carbon':
                schemeHack = ['rgb(51, 54, 51)', 
                    'rgb(199, 93, 23)', 
                    'rgb(224, 235, 195)', 
                    'rgb(70, 77, 64)'];
                break;
            case 'bingsu':
                schemeHack = ['rgb(216, 193, 191)', 
                    'rgb(122, 65, 89)', 
                    'rgb(254, 255, 255)', 
                    'rgb(165, 141, 144)'];
                break;
            case 'pulse':
                schemeHack = ['rgb(32, 32, 32)', 
                    'rgb(0, 247, 255)', 
                    'rgb(255, 255, 255)', 
                    'rgb(64, 64, 64)'];
                
        }

        props.onSchemeChange(schemeHack);
    }

    return(

        <View style={styles(props).main}>
            <View style={styles(props).foreDay}>
                <View style={styles(props).idAlign}>
                    <Text style={styles(props).regText}>{props.foreID1}</Text>
                </View>
                <Pressable onPress={() => {changeScheme('twist');}}>
                    <Image source={icons[props.foreIcon1]} style={styles(props).iconSizing} />
                </Pressable>

                <View style={styles(props).extremes}>
                    <Text style={[styles(props).tempText, styles(props).highsText]}>{props.foreHigh1}</Text>
                    <Text style={[styles(props).tempText, styles(props).lowsText]}>{props.foreLow1}</Text>
                </View>
            </View>

            <View style={styles(props).foreDay}>
                    <View style={styles(props).idAlign}>
                        <Text style={styles(props).regText}>{props.foreID2}</Text>
                    </View>
                    <Pressable onPress={() => {changeScheme('carbon');}}>
                        <Image source={icons[props.foreIcon2]} style={styles(props).iconSizing} />
                    </Pressable>
                    <View style={styles(props).extremes}>
                        <Text style={[styles(props).tempText, styles(props).highsText]}>{props.foreHigh2}</Text>
                        <Text style={[styles(props).tempText, styles(props).lowsText]}>{props.foreLow2}</Text>
                    </View>
            </View>

            <View style={styles(props).foreDay}>
                <View style={styles(props).idAlign}>
                    <Text style={styles(props).regText}>{props.foreID3}</Text>
                </View>
                <Pressable onPress={() => {changeScheme('bingsu');}}>
                    <Image source={icons[props.foreIcon3]} style={styles(props).iconSizing} />
                </Pressable>
                <View style={styles(props).extremes}>
                    <Text style={[styles(props).tempText, styles(props).highsText]}>{props.foreHigh3}</Text>
                    <Text style={[styles(props).tempText, styles(props).lowsText]}>{props.foreLow3}</Text>
                </View>
            </View>

            <View style={styles(props).foreDay}>
                <View style={styles(props).idAlign}>
                    <Text style={styles(props).regText}>{props.foreID4}</Text>
                </View>
                <Pressable onPress={() => {changeScheme('pulse');}}>
                    <Image source={icons[props.foreIcon4]} style={styles(props).iconSizing} />
                </Pressable>
                <View style={styles(props).extremes}>
                    <Text style={[styles(props).tempText, styles(props).highsText]}>{props.foreHigh4}</Text>
                    <Text style={[styles(props).tempText, styles(props).lowsText]}>{props.foreLow4}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = (props) => StyleSheet.create({

    main: {
        flexDirection: 'row',
        backgroundColor: props.PRIMARY,
        height: '100%',
    },
    foreDay: {
        flex: 1, 
        margin: 5,
        borderTopLeftRadius: 15,
        borderBottomRightRadius:15, 
        backgroundColor: props.QUATERNARY,
        borderColor: props.SECONDARY,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    idAlign: {
        paddingBottom: 10,
    },
    extremes: {
        flexDirection: 'row',
        gap: 20,   
    },
    regText: {
        fontSize: 18,
        color:props.TERTIARY, 
        fontWeight: 'bold', 
        textShadowColor: '#000', 
        textShadowRadius: 10
    },
    tempText: {
        fontSize: 24,
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
    iconSizing: {
        resizeMode: 'contain', 
        height: 100, 
        width: 120,
    }

});

export default Fore