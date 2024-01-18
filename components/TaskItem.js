import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        onPress={props.onDeleteTask.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 5,
    padding: 8,
    backgroundColor: "rgb(149, 148, 149)",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.4,
  },
  taskText: {
    color: "#fff",
  },
});
