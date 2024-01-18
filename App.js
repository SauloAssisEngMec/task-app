import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listTasks, setListTasks] = useState([]);

  function startAddTaskHandler() {
    setModalVisible(true);
  }

  function endAddTaskHandler() {
    setModalVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    // console.log(enteredTaskText);

    setListTasks((currentTaks) => [
      ...currentTaks,
      { text: enteredTaskText, id: listTasks.length.toString() },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setListTasks((currentTaks) => {
      return currentTaks.filter((task) => task.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Task"
        color="rgb(149, 148, 149)"
        onPress={startAddTaskHandler}
      />
      <TaskInput
        visible={modalVisible}
        onAddTask={addTaskHandler}
        onCancel={endAddTaskHandler}
      />
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
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteTask={deleteTaskHandler}
              />
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
