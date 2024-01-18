import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function AddTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images.jpeg")} />
        <TextInput
          style={styles.textInput}
          placeholder="INSERT YOUR TASK"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.singleButton}>
            <Button
              color="rgb(148, 248, 215)"
              title="Add"
              onPress={AddTaskHandler}
            />
          </View>
          <View style={styles.singleButton}>
            <Button
              color="rgb(162, 154, 255)"
              title="cancel"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C5D0D3",
    marginBottomBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 20,
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    backgroundColor: "#fff",
    borderRadius: 14,
  },
  buttonContainer: {
    marginTop: 13,
    flexDirection: "row",
  },
  singleButton: {
    marginHorizontal: 5,
    width: "35%",
  },
  image: {
    margin: 13,
  },
});
