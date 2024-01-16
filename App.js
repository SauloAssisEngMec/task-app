import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
        <Button color="#841584" title="Add" onPress={addTaskHandler} />
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
            return (
              <View style={styles.taskItem}>
                <Text style={styles.taskText}>{itemData.item.text}</Text>
              </View>
            );
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
  taskItem: {
    margin: 5,
    padding: 8,
    backgroundColor: "rgb(65,109,109)",
    borderRadius: 6,
  },
  taskText: {
    color: "#fff",
  },
});
