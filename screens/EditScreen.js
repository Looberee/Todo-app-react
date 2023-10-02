import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Database from "../Database";

const EditScreen = ({ route }) => {
    const { todo } = route.params;
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

const handleDeleteTodo = async (id) => {
    await Database.deleteTodo(id);
    return;
  };

  const handleEditTodo = async () => {
    if (!title && !description) {
        Alert.alert("No change?");
        return;
      }
      
      await Database.addTodo(title, description);
      navigation.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        defaultValue={todo.title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        defaultValue={todo.description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={handleEditTodo}>
        <Text style={styles.addButtonText}>Edit Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
  },
  addButton: {
    backgroundColor: "green",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EditScreen;