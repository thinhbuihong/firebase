import React, { useEffect, useState } from 'react'
import "firebase/database"
import app from 'firebase';

function AppDatabase() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = app.database().ref('todo/' + title);
    const todo = {
      title,
      complete: false,
    };

    todoRef.set(todo);
  };
  useEffect(() => {
    const todoRef = app.database().ref('todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let title in todos) {
        todoList.push({ title, ...todos[title] });
      }
      setTodo(todoList);
    });
  }, [])
  const deleteTodo = () => {
    const todoRef = app.database().ref('todo/' + title);
    todoRef.remove();
  }

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
      <button onClick={deleteTodo}>delete Todo</button>


      <div>
        {todo
          ? todo.map((todo, index) => <Todo todo={todo} key={index} />)
          : ''}
      </div>
    </div>

  )
}

function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = app.database().ref('todo').child(todo.title);
    todoRef.remove();
  };

  const completeTodo = () => {
    const todoRef = app.database().ref('todo').child(todo.title);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  return (
    <div>
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
    </div>
  );
}

export default AppDatabase
