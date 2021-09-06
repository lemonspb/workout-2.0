import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, Button, View } from 'react-native';
import { Picker } from "@react-native-community/picker";
import { observer } from "mobx-react-lite"
import { useStore } from '../../components/provider'
import { AntDesign } from '@expo/vector-icons';


const StartScreen = observer(({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Выбор упражнений",
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('StartPage')}
                    title="начать"
                    color="red"
                />
            ),
            headerBackTitle: 'Назад'
        })
    }, [navigation])
    const { workout } = useStore()

    const [value, setValue] = useState('')


    return (
        <ScrollView style={styles.container}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => {
                    setValue(itemValue)
                    if (itemValue !== value) {
                        workout.onSelectWorkout(itemValue)
                    }
                }}>
                <Picker.Item label={'Выберите упражнение'} value={''} key={''} />
                {workout.listWorkout.map((item) => { return (<Picker.Item label={item} value={item} key={item} />) })}
            </Picker>
            <FlatList
                data={workout.listSelectWorkout}
                renderItem={({ item }) =>
                    <View style={styles.containerItemList}>
                        <Text key={item.id} style={styles.item}>{item.name}</Text>
                        <AntDesign onPress={() => workout.onRemoveSelectWorkout(item.id)} name="delete" size={24} color="black" />
                    </View>
                }
            />
        </ScrollView>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    containerItemList: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title: {
        paddingBottom: 100
    }
});

export default StartScreen