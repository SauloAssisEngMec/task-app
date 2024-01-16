import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="INSERT YOUR TASK"
        onChangeText={taskInputHandler}
        value={enteredTaskText}
      />
      <Button color="rgb(65,109,109)" title="Add" onPress={AddTaskHandler} />
      {/* <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={addTaskHandler}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity> */}
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
