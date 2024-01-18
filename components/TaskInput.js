import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

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
        <TextInput
          style={styles.textInput}
          placeholder="INSERT YOUR TASK"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.singleButton}>
            <Button
              color="rgb(65,109,109)"
              title="Add"
              onPress={AddTaskHandler}
            />
          </View>
          <View style={styles.singleButton}>
            <Button color="red" title="cancel" onPress={props.onCancel} />
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
  },
  buttonContainer: {
    marginTop: 13,
    flexDirection: "row",
  },
  singleButton: {
    marginHorizontal: 5,
    width: "35%",
  },
});
