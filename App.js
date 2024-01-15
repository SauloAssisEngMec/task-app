import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  const [listTasks, setListTasks] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    // console.log(enteredTaskText);

    setListTasks((currentTaks) => [...currentTaks, enteredTaskText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="INSERT YOUR TASK"
          onChangeText={taskInputHandler}
        />
        <Button color="#841584" title="Add" onPress={addTaskHandler} />
      </View>

      <View style={styles.taskContainer}>
        {listTasks.map((task) => (
          <Text key={task}>{task}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },

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
  taskContainer: {
    flex: 4,
  },
});
