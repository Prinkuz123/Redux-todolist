import  { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "./Todo";
import './Edit.css'

const Edit = () => {
  const { id } = useParams();
  const inputRef = useRef(null);
  const data = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const filteredData = data.filter((e) => {
   return e.id == id;
  });

  const saveTask = () => {
    const inputData = inputRef.current.value;
    if (inputData == "") {
     return  window.alert("Input field is empty");
    }
    dispatch(updateTask({ id: id, name: inputData }))
    window.alert("Data updated")
    navigate('/');
  };

  return (
    <div className="edit">
      {filteredData.map((e) => {
        return (
          <input className="editinput"
            key={e.id}
            placeholder="Type here to edit"
            type="text"
            ref={inputRef}
            defaultValue={e.name}
          />
        );
      })}
      <button className="editButton" onClick={saveTask}>Save</button>
    </div>
  );
};

export default Edit;
