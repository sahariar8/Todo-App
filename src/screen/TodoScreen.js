import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper"; 
import Follow from "../components/Follow";



const TodoScreen = () => {

    //initial State Declearation
    const [todo,setTodo]  = useState("");
    const [todoList,setTodoList] = useState([]);
    const [editTodo,setEditTodo] = useState(null);

    //Handle Todo 

    const handleTodo = () =>{

      if(todo === ""){
        Alert.alert("Enter Any Task");
        return;
      }

        const id = Date.now().toString();
        const updateTodoList = [...todoList,{id, title:todo}];

        setTodoList(updateTodoList);
        setTodo('');

        // setTodoList([...todoList,{ id:Date.now().toString(),title: todo}])
    }

    //Delete ToDo

    const handleTodoDelete = (id)=>{
        const newTodoList = todoList.filter((todo)=> todo.id !== id );
        setTodoList(newTodoList);
    }

    //Edit ToDo

    const handleTodoEdit = (todo) =>{
        setEditTodo(todo);
        setTodo(todo.title);
    }

    //Update ToDo

    const handleUpdateTodo = ()=>{
      const updateTodo = todoList.map((item)=>{
        if(item.id === editTodo.id){
          return{...item,title:todo}
        }

        return item;
      })

      setTodoList(updateTodo);
      setEditTodo(null);
      setTodo("");
    }

    //create a view for show each task
    const renderTodos = ({item}) =>{

        return(
            <View style={{ flexDirection:"row", paddingHorizontal:12, alignItems:"center", backgroundColor:"#8C3061",borderRadius:6,marginVertical:6}}>
                
                <Text style={{ paddingVertical:16,fontSize:20,color:"white",fontWeight:"800",flex:1}}>{item.title}</Text>
                <IconButton onPress={ () => handleTodoEdit(item) } icon="pencil" iconColor="white" />
                <IconButton onPress={ () => handleTodoDelete(item.id) } icon="trash-can" iconColor="white" />
               
            </View>
        );
    }

  return (
    <View style={{ marginHorizontal: 16 ,marginTop:80}}>
      <TextInput
        style={{
          borderColor: "#C5705D",
          borderWidth: 2,
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a Task"
        value={todo}
        onChangeText={ setTodo }
      />
     {
        editTodo ? 
        (<TouchableOpacity onPress={ handleUpdateTodo } style={{ backgroundColor:"#5B99C2",paddingVertical:12,borderRadius:6,alignItems:"center",marginTop:10,marginBottom:100}}>
              <Text style={{ fontSize:20,fontWeight:"bold",color:"#FFF"}}> Save </Text>
          </TouchableOpacity>) :
       (
        <TouchableOpacity onPress={ handleTodo } style={{ backgroundColor:"#5B99C2",paddingVertical:12,borderRadius:6,alignItems:"center",marginTop:10,marginBottom:100}}>
            <Text style={{ fontSize:20,fontWeight:"bold",color:"#FFF"}}> Add Task</Text>
        </TouchableOpacity>
       )
     }

     <FlatList data={todoList} renderItem={renderTodos} />
     {
        todoList.length <= 0 && <Follow />
     }
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
