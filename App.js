import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import CurrTop from './components/CurrTop';
import Fore from './components/Fore';
import CurrBottom from './components/CurrBottom';
import Location from './components/Location';


export default function App() {

    const [primary, setPrimary] = useState('rgb(51, 54, 51)');
    const [secondary, setSecondary] = useState('rgb(199, 93, 23)');
    const [tertiary, setTertiary] = useState('rgb(224, 235, 195)');
    const [quaternary, setQuaternary] = useState('rgb(70, 77, 64)');

    function handleSchemeChange(event) {
        setPrimary(event[0]);
        setSecondary(event[1]);
        setTertiary(event[2]);
        setQuaternary(event[3]);
    }

    const API_KEY = `${hiddenKey}`;
    const API_LOCKEY = "https://dataservice.accuweather.com/locations/v1/postalcodes/search?";
    const API_CURRENT = "http://dataservice.accuweather.com/currentconditions/v1/";
    const API_FORECAST = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
    const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [zip, setZip] = useState('78636')
    const [city, setCity] = useState('Johnson City')
    const [state, setState] = useState('TX')
    const [locKey, setLocKey] = useState('34399_PC');
    const [currData, setCurrData] = useState({});
    const [foreData, setForeData] = useState([]);

    const [currTemp, setCurrTemp] = useState(0);
    const [kyouHigh, setKyouHigh] = useState(0);
    const [kyouLow, setKyouLow] = useState(0);
    const [currIcon, setCurrIcon] = useState('');
    const [currDesc, setCurrDesc] = useState('');
    const [currWindDir, setCurrWindDir] = useState('');
    const [currWindSpd, setCurrWindSpd] = useState(0);
    const [kyouGust, setKyouGust] = useState(0);
    const [sunset, setSunset] = useState('');
    const [moonAge, setMoonAge] = useState(0);
    
    const [foreID1, setForeID1] = useState(0);
    const [foreIcon1, setForeIcon1] = useState(0);
    const [foreHigh1, setForeHigh1] = useState(0);
    const [foreLow1, setForeLow1] = useState(0);
    const [foreID2, setForeID2] = useState(0);
    const [foreIcon2, setForeIcon2] = useState(0);
    const [foreHigh2, setForeHigh2] = useState(0);
    const [foreLow2, setForeLow2] = useState(0);
    const [foreID3, setForeID3] = useState(0);
    const [foreIcon3, setForeIcon3] = useState(0);
    const [foreHigh3, setForeHigh3] = useState(0);
    const [foreLow3, setForeLow3] = useState(0);    
    const [foreID4, setForeID4] = useState(0);
    const [foreIcon4, setForeIcon4] = useState(0);
    const [foreHigh4, setForeHigh4] = useState(0);
    const [foreLow4, setForeLow4] = useState(0);

    const [allergens, setAllergens] = useState([]);
    

    function parseCurrData(data) {

        setCurrTemp(data[0].Temperature.Imperial.Value);
        setCurrIcon(data[0].WeatherIcon);
        setCurrDesc(data[0].WeatherText);
        setCurrWindDir(data[0].Wind.Direction.Localized);
        setCurrWindSpd(data[0].Wind.Speed.Imperial.Value);
    }

    function parseForeData(data) {

        setKyouHigh(data[0].Temperature.Maximum.Value);
        setKyouLow(data[0].Temperature.Minimum.Value);

        let a = data[0].Day.WindGust.Speed.Value;
        let b = data[0].Night.WindGust.Speed.Value;
        setKyouGust((a > b) ? a : b);

        // setSunset((new Date(data[0].Sun.Set)).toLocaleTimeString('en-US'));
        setSunset((new Date(data[0].Sun.Set)).toLocaleTimeString('it-IT'));

        setMoonAge(data[0].Moon.Age);

        setForeID1(WEEKDAY[(new Date(data[1].Date)).getDay()]);
        setForeIcon1(data[1].Day.Icon);
        setForeHigh1(data[1].Temperature.Maximum.Value);
        setForeLow1(data[1].Temperature.Minimum.Value);
        setForeID2(WEEKDAY[(new Date(data[2].Date)).getDay()]);
        setForeIcon2(data[2].Day.Icon);
        setForeHigh2(data[2].Temperature.Maximum.Value);
        setForeLow2(data[2].Temperature.Minimum.Value);
        setForeID3(WEEKDAY[(new Date(data[3].Date)).getDay()]);
        setForeIcon3(data[3].Day.Icon);
        setForeHigh3(data[3].Temperature.Maximum.Value);
        setForeLow3(data[3].Temperature.Minimum.Value);
        setForeID4(WEEKDAY[(new Date(data[4].Date)).getDay()]);
        setForeIcon4(data[4].Day.Icon);
        setForeHigh4(data[4].Temperature.Maximum.Value);
        setForeLow4(data[4].Temperature.Minimum.Value);
        setAllergens(data[0].AirAndPollen);
    }

    function doData(data) {

        fetch(
                `${API_CURRENT}${data[0].Key}?details=true&apikey=${API_KEY}`
            ).then(
                response => {
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return response.json()
                }
            ).then(
                resCurrData => {
                    setCurrData(resCurrData);
                    parseCurrData(resCurrData);
                    console.log('clean curr\n');

                    
                }
            ).catch(
                error => {
                    console.log(error.message);
                }
            );

        fetch(
                `${API_FORECAST}${data[0].Key}?details=true&apikey=${API_KEY}`
            ).then(
                response => {
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return response.json()
                }
            ).then(
                resForeData => {
                    setForeData(resForeData.DailyForecasts);
                    parseForeData(resForeData.DailyForecasts);
                    console.log('clean fore\n');
                }
            ).catch(
                error => {
                    console.log(error.message);
                }
            );

    }
   
    function handleZipChange(event) {
        setZip(event.target.value);

        fetch(
            `${API_LOCKEY}apikey=${API_KEY}&q=${event.target.value}`
        ).then(
            response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json()
            }
        ).then(
            resLocData => {
                setLocKey(resLocData[0].Key);
                setCity(resLocData[0].LocalizedName);
                setState(resLocData[0].AdministrativeArea.ID);
                console.log(`${city}, ${state} = ${locKey}`);

                doData(resLocData);
            }
        ).catch(
            error => {
                console.log(error.message);
            }
        );
    }

    useEffect(() => {
        let dataHack = [{'Key': locKey}];
        doData(dataHack);
    }, []);


    // save the calls!!
    // useEffect(()=>{

    //     const fetchData = async () => {
    //         setCurrData(currSave);
    //         setForeData(foreSave.DailyForecasts);
    //     }

    //     fetchData()
    //         .catch(console.error)
        

    //     // console.log(currData);
    //     // console.log(foreData);

    //     try {
    //         parseCurrData(currSave);
    //     } catch (e) {
    //         console.log(e);
    //     }

    //     try {
    //         parseForeData(foreSave.DailyForecasts);
    //     } catch (e) {
    //         console.log(e);
    //     }

    // }, [])
    //
    

    return (
        <View style={styles.mainContainer}>
            <StatusBar hidden />
            <View style={{flex:5}}>
                <CurrTop
                    PRIMARY={primary}
                    SECONDARY={secondary} 
                    TERTIARY={tertiary} 
                    QUATERNARY={quaternary} 

                    city={city} 
                    state={state} 
                    currTemp={currTemp} 
                    kyouHigh={kyouHigh} 
                    kyouLow={kyouLow} 
                    currIcon={currIcon} 
                    currDesc={currDesc} 
                    currWindSpd={currWindSpd} 
                    currWindDir={currWindDir} 
                    kyouGust={kyouGust} 
                />
            </View>            
            <View style={{flex:3}}>
                <Fore 
                    PRIMARY={primary}
                    SECONDARY={secondary} 
                    TERTIARY={tertiary} 
                    QUATERNARY={quaternary} 
                    onSchemeChange={handleSchemeChange}

                    foreID1={foreID1} 
                    foreIcon1={foreIcon1} 
                    foreHigh1={foreHigh1} 
                    foreLow1={foreLow1}
                    foreID2={foreID2} 
                    foreIcon2={foreIcon2} 
                    foreHigh2={foreHigh2} 
                    foreLow2={foreLow2}
                    foreID3={foreID3} 
                    foreIcon3={foreIcon3} 
                    foreHigh3={foreHigh3} 
                    foreLow3={foreLow3}
                    foreID4={foreID4} 
                    foreIcon4={foreIcon4} 
                    foreHigh4={foreHigh4} 
                    foreLow4={foreLow4}
                />
            </View>            
            <View style={{flex:5}}>
                <CurrBottom 
                    PRIMARY={primary}
                    SECONDARY={secondary} 
                    TERTIARY={tertiary} 
                    QUATERNARY={quaternary} 

                    sunset={sunset} 
                    moonAge={moonAge}
                    allergens={allergens}
                />
            </View>            
            <View style={{flex:1}}>
                <Location 
                    PRIMARY={primary}
                    SECONDARY={secondary} 
                    TERTIARY={tertiary} 
                    QUATERNARY={quaternary} 

                    zip={zip}
                    locKey={locKey}
                    updateZip={handleZipChange}
                    doRefresh={doData}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#000000',
    },

});
