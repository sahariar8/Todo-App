import { StyleSheet, View} from "react-native";
import TodoScreen from "./src/screen/TodoScreen";

export default function App() {
  return (
  
      <View>
        <TodoScreen />
      </View>
    
  );
}

const styles = StyleSheet.create({});
// const updateTodoList = [...todoList,{id:id, title:todo}]
//         setTodoList(updateTodoList);
//         setTodo('');