import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import TaskItem from "./components/TaskItem";

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  const [listTasks, setListTasks] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    // console.log(enteredTaskText);

    setListTasks((currentTaks) => [
      ...currentTaks,
      { text: enteredTaskText, key: listTasks.length.toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="INSERT YOUR TASK"
          onChangeText={taskInputHandler}
        />
        <Button color="rgb(65,109,109)" title="Add" onPress={addTaskHandler} />
        {/* <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={addTaskHandler}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.taskContainer}>
        {/* <ScrollView>
          {listTasks.map((task) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText} key={task}>
                {task}
              </Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={listTasks}
          renderItem={(itemData) => {
            return <TaskItem text={itemData.item.text} />;
          }}
        />
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
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "rgb(65,109,109)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
