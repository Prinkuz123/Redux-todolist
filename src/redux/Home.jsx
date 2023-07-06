import { useState } from "react";
import { Container,Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { addTask,deleteTask } from "./Todo";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const{data}=useSelector(state=>state.todo)
  const navigate=useNavigate()
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTaskHandle = () => {
    if (!input) {
      return;
    }
    dispatch(addTask({ id: Date.now(), name: input }));
    setInput("");
  };

  const deleteTaskHandle = (id) => {
    const confirmDelete=window.confirm("Are you sure to want to delete this task")
    if(confirmDelete){
      dispatch(deleteTask({id:id}))
    }
    


  };
  return (
    <Container>

    <div className="addTaskDiv">
      <h1>Todolist</h1>
      <input
        type="text"
        className="input"
        placeholder="Type task here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="addtask" onClick={addTaskHandle}>
        AddTask
      </button>
     
    </div>
   

    <Table striped bordered  className="table">
    <thead>
      <tr>
        <th>sl no</th>
        <th>Taskname</th>
       
      </tr>
    </thead>
    <tbody>

 {data.map((e,index)=>{
  return(
    <tr key={e.id}>
    <td>{index+1}</td>
    <td>{e.name}</td>
    
    <button className="deleteTask" onClick={()=>deleteTaskHandle(e.id)}>
    DeleteTask
  </button>
  <button className="editTask" onClick={()=>navigate(`edit/${e.id}`)}>Edit</button>
 
    

    </tr>

  )
  
 })}      
    </tbody>
  </Table>
  </Container>
   
  
  );
};

export default Home;
