import React,{useState} from "react";

function NewTodoForm(props){
    const [description,setDescription]=useState("");
    const[assigned,setAssigned]=useState("");

    const submitTodo=()=>{
        if(description!=="" && assigned!==""){
            props.addTodo(assigned,description);
            setAssigned("");
            setDescription("");
        }
    }

    const descriptionChange = (event) =>{
      setDescription(event.target.value);
    }
    // const assignedChange=(event) =>{
    //     setAssigned(event.target.value);
    // }
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={e=>setAssigned(e.target.value)}
                    value={assigned}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                     className="form-control"
                    required  
                    rows={3} onChange={descriptionChange}
                    value={description}>          
                    </textarea>
                </div>
                <button type="button" className="btn btn-primary mmt-3" onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}
export default NewTodoForm;