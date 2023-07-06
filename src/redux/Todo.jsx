import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}


 export const todoSlice=createSlice({
    name:"todo",
    initialState,

    reducers:{
        //----add task------
        addTask:(state,action)=>{
           
            state.data=[...state.data,{id:Date.now(),name:action.payload.name}]
        },
        //-----deleteTask-----
          deleteTask:(state,action)=>{
            const id=action.payload.id
            state.data=state.data.filter((e)=>e.id!==id)



        },


        // -----editTask-----
        updateTask:(state,action)=>{
            const{id,name}=action.payload
            state.data=state.data.map((e)=>{
                if(e.id==id){
                    return{...e,name}
                }
                return e
            }

            )

        },
      


    }
    
})
export const{addTask,updateTask,deleteTask}=todoSlice.actions
export default todoSlice.reducer