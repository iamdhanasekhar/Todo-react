import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
function App() {
  const [showAddTodoForm,setShowAddTodoForm]=useState(false);

  const [todos,setToDos]=useState([
    {rowNumber: 1,rowDescription: 'Example task details',rowAssigned: 'Example name of person'}
    // {rowNumber: 2,rowDescription: 'Make dinner',rowAssigned: 'User Two'},
    // {rowNumber: 3,rowDescription: 'Eat puppy',rowAssigned: 'User Three'},
    // {rowNumber: 4,rowDescription: 'Search puppy',rowAssigned: 'User Two'}
  ])

  
  const addTodo=(assigned,description)=>{
    let rowNumber=0;
    if(todos.length>0){
      rowNumber=todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
      const newTodo={
        rowNumber:rowNumber,
        rowDescription:description,
        rowAssigned:assigned
      };
    setToDos(todos=>[...todos,newTodo])
  }

  const deleteTodo=(deleteTodoRowNumber)=>{
    let filterered=todos.filter(function(value){
      return value.rowNumber!==deleteTodoRowNumber;
    });
    setToDos(filterered);
  }


  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
           <buttoon className="btn btn-primary" onClick={()=>setShowAddTodoForm(!showAddTodoForm)}>
            New Todo
            </buttoon> 
            {showAddTodoForm&&<NewTodoForm addTodo={addTodo}/>
            }
        </div>
      </div>
    </div>
  );
}
export default App;
