import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { Picker } from "@react-native-community/picker";
import { observer } from "mobx-react-lite";

const ModalContainer = observer((props) => {
  const [selectValue, setSelectValue] = useState(props.selectValue);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{props.title}</Text>
          <Picker
            selectedValue={selectValue}
            onValueChange={(itemValue) => {
              setSelectValue(itemValue);
              props.onChangeValue(props.selectItem.id, itemValue);
            }}
          >
            <Picker.Item label={"Выберите кол-во"} value={""} key={""} />
            {props.listAmount.map((l) => {
              return <Picker.Item label={`${l}`} value={l} key={l} />;
            })}
          </Picker>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setModalVisible(false)}
          >
            <Text style={styles.textStyle}>ОК</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    marginTop: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalContainer;
