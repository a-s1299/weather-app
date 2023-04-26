import { useState } from 'react';
import { Pressable, TextInput, StyleSheet, Text, View } from 'react-native';

function Location(props) {

    const [newEntry, setNewEntry] = useState(props.zip);

    function handleNewZip() {
        let eventHack = {target : { value : newEntry}};
        props.updateZip(eventHack);
    }

    function handleRefresh() {
        let dataHack = [{'Key': props.locKey}];
        props.doRefresh(dataHack);
    }


    return(

        <View style={styles(props).main}>
            <View style={styles(props).blockArr}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? props.SECONDARY : props.PRIMARY,
                    },
                    styles(props).submit,
                    ]} 
                    onPress={handleRefresh}>
                    <Text style={[styles(props).pressableText, styles(props).makeBold]}>REFRESH</Text> 
                </Pressable>
            </View>
            <View style={styles(props).blockArr}>
                <TextInput 
                    autoComplete='off'
                    keyboardType='numeric'
                    maxLength={5}
                    caretHidden={true}
                    placeholder={props.zip}
                    style={[styles(props).entry, styles(props).makeBold]}
                    onChangeText={setNewEntry}
                />
            </View>
            <View style={styles(props).blockArr}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? props.SECONDARY : props.PRIMARY,
                    },
                    styles(props).submit,
                    ]} 
                    onPress={handleNewZip}>
                    <Text style={[styles(props).pressableText, styles(props).makeBold]}>SUBMIT</Text> 
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = (props) => StyleSheet.create({

    main: {
        flexDirection: 'row',
        backgroundColor: props.QUATERNARY,
        height: '100%',
    },
    blockArr: {
        flex: 1,
        alignItems: 'center',
        margin: 2,
        paddingTop: 10,
    },
    entry: {
        borderWidth: 5,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: props.PRIMARY, 
        backgroundColor: props.TERTIARY,
        width: 100,
        height: 35,
        textAlign: 'center'
    },
    pressableText: {
        color: props.TERTIARY
    },
    submit: {
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    makeBold: {
        fontWeight: 'bold',
    }

});

export default Location