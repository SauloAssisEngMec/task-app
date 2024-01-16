import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <Pressable onPress={props.onDeleteTask.bind(this, props.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
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
