import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import Navbr from './Navbr.js';

const Screen11 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const selectedDate = useSelector(state => state.selectedDate);

    const handleDayPress = (day) => {
        dispatch({ type: 'SET_SELECTED_DATE', payload: day.dateString });
        navigation.navigate('Screen2', { selectedDate: day.dateString });
    };

    return (
        <ScrollView>
            <ImageBackground
                source={require('../Images/screen4_bg.jpg')}
                style={styles.bg}
            >
                <Navbr />
                <View style={styles.container}>
                    <Text style={styles.heading}>Set Time For Salah</Text>
                    <Calendar
                        onDayPress={handleDayPress}
                        markedDates={{ [selectedDate]: { selected: true } }}
                    />
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        marginBottom: 30,
        fontSize: 20,
        fontFamily: 'Times New Roman',
        textAlign: 'center',
        marginTop: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200,
        paddingHorizontal: 20
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        height: 736,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Screen11;
